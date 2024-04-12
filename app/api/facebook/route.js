import { NextResponse } from "next/server";
import postgres from "postgres";

export const GET = async () => {
  const sql = postgres(process.env.POSTGRESQL_DB, { ssl: 'require' });

  try {
    const facebookData = await sql`SELECT * FROM facebook;`;

    return NextResponse.json(facebookData);
  } catch (error) {
    return NextResponse.error("No post yet");
  }
}

function cleanFacebookData(postData, fbData) {
  return postData.map((post) => {
    const newPost = {};

    newPost.id = post.id;
    newPost.likes = post.likes?.summary?.total_count || 0;
    newPost.comments = post.comments?.summary?.total_count || 0;
    newPost.shares = post.shares?.count || 0;
    newPost.url = post.permalink_url;
    newPost.createdAt = post["created_time"];
    
    newPost.name = fbData?.name || "";
    newPost.pfp = fbData?.photos?.data[0]?.images[0]?.source || "";
    
    const hasManyMedia = post.attachments?.data[0]?.subattachments;
    newPost.images = [];

    if (hasManyMedia) {
      newPost.images = hasManyMedia.data.map((media) => media.media.image.src);
    } else {
      newPost.images.push(post.attachments?.data[0]?.media?.image?.src || "");
    }

    newPost.description = post.message || 
                          (post.attachments?.data[0]?.description || "");

    return newPost;
  });
}


export const PUT = async () => {
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const url = `https://graph.facebook.com/v19.0/101182722724503?fields=posts%7Blikes.summary(true)%2Cattachments%7Bmedia%2Cdescription%2Curl%2Csubattachments%7D%2Ccreated_time%2Cmessage%2Ccomments.summary(true)%2Cshares%2Cpermalink_url%7D%2Cname%2Cphotos.limit(1)%7Bimages%7D&access_token=${accessToken}`;
  const sql = postgres(process.env.POSTGRESQL_DB, { ssl: 'require' });

  try {
    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.error(
        "Couldn't retrieve Facebook data from graph api"
      );
    }

    const fbData = await res.json();
    const postData = fbData.posts.data;

    const cleanData = cleanFacebookData(postData, fbData);

    await sql`DROP TABLE IF EXISTS facebook;`;

    await sql`CREATE TABLE IF NOT EXISTS facebook (
        id SERIAL PRIMARY KEY,
        post_id TEXT,
        likes NUMERIC,
        comments NUMERIC,
        shares NUMERIC,
        url TEXT,
        createdAt TIMESTAMP,
        name TEXT,
        pfp TEXT,
        description TEXT,
        images TEXT[]
    );`;

    for (const post of cleanData) {
      // Insert events
      await sql`
        INSERT INTO facebook (post_id, likes, comments, shares, url, createdAt, name, pfp, description, images)
        VALUES (${post.id}, ${post.likes}, ${post.comments}, ${post.shares}, ${post.url}, ${post.createdAt}, ${post.name}, ${post.pfp}, ${post.description}, ${post.images});
      `;
    }

    return NextResponse.json("Successfully updated facebook data");
  } catch (error) {
    return NextResponse.error("Couldn't retrieve Facebook data");
  }
}