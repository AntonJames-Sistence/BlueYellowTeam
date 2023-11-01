import { NextResponse } from "next/server";
import { set, ref, push, update, get } from "firebase/database";
import { DB } from "../../../data/firebase";

export async function GET() {
  try {
    const facebookRef = ref(DB, "facebook");
    const snapshot = await get(facebookRef);

    if (snapshot.exists()) {
      const allPost = Object.values(snapshot.val().posts);
      return NextResponse.json(allPost);
    }

    throw new Error("idk");
  } catch (error) {
    return NextResponse.error("No post yet");
  }
}

export async function PUT() {
  const acessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const url = `https://graph.facebook.com/v18.0/161473720380035?fields=posts%7Blikes.summary(true)%2Cattachments%7Bmedia%2Cdescription%2Curl%2Csubattachments%7D%2Ccreated_time%2Cmessage%2Cshares%2Ccomments%7Bcomment_count%7D%7D%2Cname%2Cphotos.limit(1)%7Bimages%7D&access_token=${acessToken}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch facebook post from the API");
    }

    const fbData = await res.json();

    const cleanedData = {};
    cleanedData.posts = {};

    for (let i = 0; i < fbData.posts.data.length - 1; i++) {
      const post = fbData.posts.data[i];
      const newPost = {};

      newPost.id = post?.id;
      newPost.likes = post.likes.summary.total_count;

      const multiImg = post.attachments.data[0].subattachments;
      newPost.images = multiImg
        ? multiImg.data.map((ele) => ele.media.image.src)
        : [post.attachments.data[0].media.image.src];

      newPost.createdAt = post["created_time"];

      newPost.description =
        post.message ?? post?.attachments?.data[0].description;
      newPost.url = post?.attachments?.data[0].url;

      newPost.name = fbData.name;
      newPost.pfp = fbData.photos.data[0].images[0].source;

      cleanedData.posts[newPost.id] = newPost;
    }

    // const updates = {};
    // updates["facebook"] = cleanedData;
    // update(ref(DB), updates);

    // return NextResponse.json(fbData);
    return NextResponse.json(cleanedData);
  } catch (error) {
    return NextResponse.error("didnt work");
  }
}
