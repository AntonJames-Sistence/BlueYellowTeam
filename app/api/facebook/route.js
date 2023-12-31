import { NextResponse } from "next/server";
import { set, ref, push, update, get, off } from "firebase/database";
import { DB } from "../../../data/firebase";
import { register } from "module";

export async function GET() {
  const facebookRef = ref(DB, "facebook");
  try {
    const snapshot = await get(facebookRef);
    if (snapshot.exists()) {
      const allPost = Object.values(snapshot.val());
      return NextResponse.json(allPost);
    }
    throw new Error("No Facebook post");
  } catch (error) {
    return NextResponse.error("No post yet");
  } finally {
    off(facebookRef);
  }
}

export async function PUT() {
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const url = `https://graph.facebook.com/v18.0/ 101182722724503?fields=posts%7Blikes.summary(true)%2Cattachments%7Bmedia%2Cdescription%2Curl%2Csubattachments%7D%2Ccreated_time%2Cmessage%2Ccomments.summary(true)%2Cshares%2Cpermalink_url%7D%2Cname%2Cphotos.limit(1)%7Bimages%7D&access_token=${accessToken}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch facebook post from the API");
    }

    const fbData = await res.json();

    const postData = fbData.posts.data;

    const cleanData = postData.map((post) => {
      if (!post) {
        return null;
      }
      const newPost = {};

      newPost.id = post.id;
      newPost.likes = post.likes.summary.total_count;
      newPost.comments = post.comments.summary.total_count;
      newPost.shares = post.shares?.count || 0;
      newPost.url = post.permalink_url;
      newPost.createdAt = post["created_time"];

      newPost.name = fbData.name;
      newPost.pfp = fbData.photos.data[0].images[0].source;

      const hasManyMedia = post.attachments.data[0].subattachments;
      newPost.images = [];

      if (hasManyMedia) {
        newPost.images = hasManyMedia.data.map(
          (media) => media.media.image.src
        );
      } else {
        newPost.images.push(post.attachments.data[0].media.image.src);
      }

      newPost.description = "";

      if (post.message) {
        newPost.description = post.message;
      } else {
        newPost.description = post.attachments.data[0].description;
      }
      return newPost;
    });
    const firebase = {};
    firebase["facebook"] = cleanData;
    update(ref(DB), firebase);

    return NextResponse.json("Successfully updated data");
  } catch (error) {
    return NextResponse.error("Couldn't retrieve Facebook data, PUT route");
  }
}
