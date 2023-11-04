"use client";
import React, { useState, useEffect } from "react";
import FacebookPost from "./FacebookPost";

export default function Facebook() {
  let [facebookData, setFacebookData] = useState(null);
  let [facebookColumns, setFacebookColumns] = useState(null);
  let [numOfPost, setNumOfPost] = useState(6);

  useEffect(() => {
    const loadFaceBookData = async () => {
      const res = await fetch("/api/facebook");

      if (res.ok) {
        const data = await res.json();
        setFacebookData(data);
      }
    };
    loadFaceBookData();
  }, []);

  useEffect(() => {
    if (facebookData) {
      const shrunkFbList = facebookData.slice(0, numOfPost);
      let tempFacebookColumns = [[], [], []];

      //divides facebookData into three columns to make layout/css easier
      for (let i = 0; i < shrunkFbList.length; i++) {
        const index = i % tempFacebookColumns.length;
        tempFacebookColumns[index].push(shrunkFbList[i]);
      }
      setFacebookColumns(tempFacebookColumns);
    }
  }, [numOfPost, facebookData]);
  return (
    <div className="pt-36 max-w-7xl w-full">
      <div className="text-center md:text-left text-5xl font-bold text-black-500 pb-3 mb-4">
        Updates From Facebook
      </div>
      <div className="flex flex-wrap justify-evenly lg:justify-between ">
        {facebookColumns ? (
          facebookColumns.map((postList, index) => {
            return (
              <div
                key={index}
                style={{ width: "32%" }}
                className="flex flex-col"
              >
                {postList.map((post) => {
                  return <FacebookPost key={post.id} post={post} />;
                })}
              </div>
            );
          })
        ) : (
          <div>..loading</div>
        )}
      </div>
      <div
        className="bg-white m-auto text-lg text-black w-fit px-5 rounded-2xl cursor-pointer border-2 "
        onClick={() => setNumOfPost((state) => state + 3)}
      >
        ... Load more
      </div>
    </div>
  );
}
