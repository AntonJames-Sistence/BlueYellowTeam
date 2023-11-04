"use client";
import React, { useState, useEffect, useRef } from "react";
import FacebookPost from "./FacebookPost";

export default function Facebook() {
  let [facebookData, setFacebookData] = useState(null);
  let [facebookColumns, setFacebookColumns] = useState(null);
  let [numOfPost, setNumOfPost] = useState(6);
  const faceBookDataRef = useRef(facebookData);
  const numOfPostRef = useRef(numOfPost);

  useEffect(() => {
    numOfPostRef.current = numOfPost;
  }, [numOfPost]);

  useEffect(() => {
    const loadFaceBookData = async () => {
      const res = await fetch("/api/facebook");

      if (res.ok) {
        const data = await res.json();
        faceBookDataRef.current = data;
        setFacebookData(data);
      }
    };
    loadFaceBookData();
  }, []);

  useEffect(() => {
    if (facebookData) {
      const shrunkFbList = facebookData.slice(0, numOfPost);
      let tempFacebookColumns = [[], [], []];

      if (window.innerWidth >= 1024) tempFacebookColumns = [[], [], []];
      else if (window.innerWidth >= 768) tempFacebookColumns = [[], []];
      else tempFacebookColumns = [[]];

      //divides facebookData into three columns to make layout/css easier
      for (let i = 0; i < shrunkFbList.length; i++) {
        const index = i % tempFacebookColumns.length;
        tempFacebookColumns[index].push(shrunkFbList[i]);
      }
      setFacebookColumns(tempFacebookColumns);
    }
  }, [numOfPost, facebookData]);

  useEffect(() => {
    let handleResize = () => {
      if (faceBookDataRef.current) {
        const shrunkFbList = faceBookDataRef.current.slice(
          0,
          numOfPostRef.current
        );
        let tempFacebookColumns = [[], [], []];

        if (window.innerWidth >= 1024) tempFacebookColumns = [[], [], []];
        else if (window.innerWidth >= 768) tempFacebookColumns = [[], []];
        else tempFacebookColumns = [[]];

        //divides facebookData into three columns to make layout/css easier
        for (let i = 0; i < shrunkFbList.length; i++) {
          const index = i % tempFacebookColumns.length;
          tempFacebookColumns[index].push(shrunkFbList[i]);
        }
        setFacebookColumns(tempFacebookColumns);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pt-36 max-w-7xl w-full m-auto">
      <div className="text-center lg:text-left text-5xl font-bold text-black-500 pb-3 mb-4 w-full">
        Updates From Facebook
      </div>
      <div className="flex flex-wrap justify-evenly lg:justify-between w-full">
        {facebookColumns ? (
          facebookColumns.map((postList, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-[90%] sm:w-[80%] md:w-[47%] lg:w-[32%]"
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
