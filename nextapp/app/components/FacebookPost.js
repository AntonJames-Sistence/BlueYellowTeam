export default function FacebookPost({ post }) {
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
    </div>
  );
}
