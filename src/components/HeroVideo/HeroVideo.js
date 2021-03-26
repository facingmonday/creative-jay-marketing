import React, { Component } from 'react';

import * as styles from './HeroVideo.module.scss';

const HeroVideo = ({ title, videoId }) => (
  <div className={styles.heroVideo}>
    <div className={styles.videoWrapper}>
      {
        typeof window !== 'undefined' && (
        // <YoutubeBackground
        //   videoId="X7VMtUum7wY"
        //   className={styles.videoWrapper}
        // />
        <div />
        )
      }
    </div>
  </div>
);

export default HeroVideo;
