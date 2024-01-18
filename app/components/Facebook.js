"use client";
import React, { useState, useEffect, useRef } from "react";
import FacebookPost from "./FacebookPost";
import "./main.css";

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
      const res = await fetch("/api/facebook", { next: { revalidate: 60 } });

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
    <div className="w-11/12 max-w-[1400px] m-auto">
      <div className="text-center lg:text-left text-5xl font-bold text-black-500 pb-3 mb-4 w-full">
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
            <div class="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="absolute font-semibold">Loading</div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button
          className="text-black px-4 py-1 rounded-full text-sm font-bold transition-colors duration-200 bg-yellow-400 hover:bg-yellow-500"
          onClick={() => setNumOfPost((state) => state + 3)}
        >
          ... Load more
        </button>
      </div>
    </div>
  );
}
