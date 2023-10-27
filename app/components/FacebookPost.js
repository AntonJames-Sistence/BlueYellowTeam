export default function FacebookPost({ post }) {
  return (
    <div className="FaceBookLogs-post shadow-md w-1/3 p-4 mb-2.5 min-content">
      <div className="FaceBookLogs-post-header flex items-center gap-1.5 mb-2.5">
        <img
          className="FaceBookLogs-post-header-img w-10 h-10 rounded-full"
          src={post.pfp}
          alt=""
        />
        <div className="FaceBookLogs-post-header-content h-10">
          <div className="FaceBookLogs-post-header-content-1 font-bold text-sm">
            {post.name}
          </div>
          <div className="FaceBookLogs-post-header-content-2 text-xs">
            {post.date}
          </div>
        </div>
      </div>
      <div className="FaceBookLogs-post-caption break-words">
        {post.caption}
      </div>
      <img src={post.imgs[0]} alt="" />
    </div>
  );
}
