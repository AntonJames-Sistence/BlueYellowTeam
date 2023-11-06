'use client';
import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({ embedId, idk }) => (
  <iframe
    className={idk}
    width="853"
    height="480"
    src={`https://www.youtube.com/embed/${embedId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  />
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;