import React from "react";

const Post = ({ post }) => {
  return (
    <div className="FaceBookLogs-post">
      <div className="FaceBookLogs-post-header">
        <img className="FaceBookLogs-post-header-img" src={post.pfp} alt="" />
        <div className="FaceBookLogs-post-header-content">
          <div className="FaceBookLogs-post-header-content-1">{post.name}</div>
          <div className="FaceBookLogs-post-header-content-2">{post.date}</div>
        </div>
      </div>
      <div className="FaceBookLogs-post-caption">{post.caption}</div>
      <img src={post.imgs[0]} alt="" />
      {/* <img
        src="https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/386362851_17908825400831144_2861762780999471667_n.jpg?stp=dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NZMq2I6xhzIAX8ZoFcw&_nc_ht=scontent-mad2-1.xx&edm=AKIiGfEEAAAA&oh=00_AfAHCF7EoCf21VEGWsH87GomSjyJn9eJZTmJERxcEKsZxA&oe=653BB104"
        alt=""
      /> */}
    </div>
  );
};

export default Post;
