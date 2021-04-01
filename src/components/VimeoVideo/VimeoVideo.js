import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './VimeoVideo.module.scss';

const VimeoVideo = ({ id }) => (
  <div className={styles.embedContainer}>
    <iframe src={`https://player.vimeo.com/video/${id}`} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
  </div>
);

VimeoVideo.propTypes = {

};

export default VimeoVideo;
