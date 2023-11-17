"use client";
import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, idk }) => (
  <div className="w-full md:w-1/2 relative rounded-[2rem] flex justify-center items-center py-6 sm:px-10 md:px-2 lg:px-4">
    <iframe
      className={idk}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
