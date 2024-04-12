"use client";
import { useState, useEffect, useRef } from "react";
import FacebookPost from "./FacebookPost";
import "./main.css";

export default function Facebook({ facebookData }) {
  let [facebookColumns, setFacebookColumns] = useState(null);
  let [numOfPost, setNumOfPost] = useState(6);
  const numOfPostRef = useRef(numOfPost);

  const splitDataIntoColumns = () => {
    const shrunkFbList = facebookData.slice(0, numOfPostRef.current);
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
  };

  useEffect(() => {
    numOfPostRef.current = numOfPost;
  }, [numOfPost]);

  useEffect(splitDataIntoColumns, [numOfPost, facebookData]);

  useEffect(() => {
    window.addEventListener("resize", splitDataIntoColumns);

    return () => window.removeEventListener("resize", splitDataIntoColumns);
  }, []);

  return (
    <div className="w-11/12 max-w-[1400px] m-auto">
      <div className="text-center lg:text-left text-4xl font-bold text-black-500 pb-3 mb-4 w-full">
        Updates From Facebook
      </div>
      <div className="flex flex-wrap justify-evenly lg:justify-between w-full">
        {facebookColumns ? (
          facebookColumns.map((postList, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-full md:w-[45%] lg:w-[32%]"
              >
                {postList.map((post) => {
                  return <FacebookPost key={post.id} post={post} />;
                })}
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center w-full h-[80vh]">
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button
          className="text-black px-6 py-2 rounded-full text-sm font-bold transition-colors duration-200 bg-yellow-400 hover:bg-yellow-500"
          onClick={() => setNumOfPost((state) => state + 3)}
        >
          Load More Posts
        </button>
      </div>
    </div>
  );
}
