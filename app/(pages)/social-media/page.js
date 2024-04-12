import Facebook from "../../components/Facebook";
import getAllFacebookPost from "../projects/hooks/getAllFacebookPosts";

export default async function EventsPage() {
  const allFacebookPost = await getAllFacebookPost();
  return (
    <div className="pt-8 flex w-full flex-col items-center max-[550px]:px-0 px-5">
      <Facebook facebookData={allFacebookPost} />
    </div>
  );
}
