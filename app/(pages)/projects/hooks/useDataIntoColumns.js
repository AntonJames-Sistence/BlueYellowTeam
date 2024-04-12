import React, { useRef } from "react";

export default function (numOfPost, facebookData, setFacebookColumns) {
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

  return { splitDataIntoColumns, numOfPostRef };
}
