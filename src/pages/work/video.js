import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { useStaticQuery, graphql } from 'gatsby'; // to query for image data
import Img from 'gatsby-image'; // to take image data and render it
import HeroCarousel from '../../components/HeroCarousel';

import Page from '../../components/Page';
import SEO from '../../components/SEO';
import Button from '../../components/Button';
import Section from '../../components/Section';
import BlockSet from '../../components/BlockSet';
import IconBlock from '../../components/IconBlock';
import SectionHeading from '../../components/SectionHeading';

import * as styles from './work.module.scss';
import VimeoVideo from '../../components/VimeoVideo/VimeoVideo';

const VideoPage = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "work"}}) {
        edges {
          node {
            id
            name
            absolutePath
            publicURL
          }
        }
      }
    }
  `);
  return (
    <Page headerColor="black">
      <SEO title="Video" />
      <HeroCarousel
        title="Professional Video Editing"
        images={allFile?.edges?.map(({ node }) => node)}
      />
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={4}>
            <h1 className={styles.sectionTitle}>Video</h1>
            <p className={styles.sectionDescription}>
              My inherent passion for film-making, storyboarding, and cinematography has led me into this amazing industry. I enjoy filming music videos, weddings, live events, promotional videos, commercials and the list goes on.
            </p>
          </Grid>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/X7VMtUum7wY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/366383639" width="640" height="360" frameBorder="0" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h1 className={styles.sectionTitle}>Wedding Videos</h1>
            <p className={styles.sectionDescription}>
              Investing in a wedding film will become your most prized possession. It means reliving moments shared between loved ones on the happiest day of your life. I capture artistic footage, intimate moments, and love between two people.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <VimeoVideo id="367436881" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <VimeoVideo id="365427097" />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12}>
            <SectionHeading
              title="Social Videos"
            />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://www.youtube.com/embed/iih-oBTlbo0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://www.youtube.com/embed/iih-oBTlbo0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://www.youtube.com/embed/iih-oBTlbo0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={4}>
            <h1 className={styles.sectionTitle}>Live Events</h1>
            <p className={styles.sectionDescription}>
              Filming live events bring its own unique challenges. They can be a lot of fun and get you into some cool places, but you only get one shot so being prepaid is crucial.
            </p>
          </Grid>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe src="https://player.vimeo.com/video/400112514" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Facebook.mp4" />

          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/351035091" frameBorder="0" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://player.vimeo.com/video/290144468" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://player.vimeo.com/video/294892756" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={4}>
            <h1 className={styles.sectionTitle}>TikTok Promotions</h1>
            <p className={styles.sectionDescription}>
              Creating TikTok videos is fun, but sometimes you need help. Creating compelling advertising videos for TikTok can be a lot of work and too much for one person to handle.
            </p>
          </Grid>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@jaydoesvideo/video/6939316371666832646" data-video-id="6939316371666832646" style={{ maxWidth: '605px', minWidth: '325px' }}>
              <section>
                <a target="_blank" title="@jaydoesvideo" href="https://www.tiktok.com/@jaydoesvideo">@jaydoesvideo</a>
                <p>
                  It’s like ripping off someone else’s bandaid.
                  <a title="shirtbusiness" target="_blank" href="https://www.tiktok.com/tag/shirtbusiness">##shirtbusiness</a>
                  {' '}
                  <a title="heatpressnation" target="_blank" href="https://www.tiktok.com/tag/heatpressnation">##heatpressnation</a>
                  {' '}
                  <a title="heatpressvinyl" target="_blank" href="https://www.tiktok.com/tag/heatpressvinyl">##heatpressvinyl</a>
                  {' '}
                  <a title="printingbusiness" target="_blank" href="https://www.tiktok.com/tag/printingbusiness">##printingbusiness</a>
                </p>
                <a target="_blank" title="♬ Countdown - TikTok" href="https://www.tiktok.com/music/Countdown-6678884126759586562">♬ Countdown - TikTok</a>
              </section>
            </blockquote>
          </Grid>

        </Grid>
      </Section>
    </Page>
  );
};

export default VideoPage;
