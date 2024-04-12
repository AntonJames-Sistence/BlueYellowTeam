import React from "react";
import Button from '../../components/Button';

export default function Error() {
  return (<>
            <div className="text-red-500 text-3xl mt-14 mb-4">You are not an admin</div>
            <Button
              css="bg-blue-400 text-white font-semibold px-10 py-1 w-fit rounded-md cursor-pointer hover:bg-blue-600 hover:scale-110 transition-in-out duration-300 my-10 m-auto"
              text="Go back"
              url="/admin/login"
            ></Button>
          </>)
}
