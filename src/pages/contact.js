import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import HeroVideo from '../components/HeroVideo';

import Page from '../components/Page';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Section from '../components/Section';
import BlockSet from '../components/BlockSet';
import SectionHeading from '../components/SectionHeading';
import HeroImage from '../components/HeroImage';

import * as styles from './contact.module.scss';

export const contactQuery = graphql`
  query {
    socialImages: allFile(filter: {dir: {regex: "/assets\/images\/social/"}}) {
      edges {
        node {
          id
          name
          absolutePath
          relativePath
          sourceInstanceName
          dir
          publicURL
        }
      }
    }
    heroImage: file(name: { eq: "contact-hero" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [JPG]
        )
      }
    }
  }
`;

const ContactPage = ({ data }) => {
  console.log('data', data);
  return (
    <Page headerColor="black">
      <SEO title="Home" />
      <HeroImage
        image={data.heroImage?.childImageSharp?.gatsbyImageData?.images?.fallback}
        superTitle="Want to chat?"
        title="Reach out and (get in) touch (with) me."
      />
      <SectionHeading
        title="Social Media"
      />
      <Section>
        <Grid container spacing={2}>
          <Grid item xs={3} className={styles.contact__socialColumn}>
            <StaticImage
              src="../assets/images/social/instagram.png"
              className={styles.contact__socialImage}
            />
            <h4 variant="h4">@jaydoesvideo</h4>
          </Grid>
          <Grid item xs={3} className={styles.contact__socialColumn}>
            <StaticImage
              src="../assets/images/social/tiktok.png"
              className={styles.contact__socialImage}
            />
            <h4 variant="h4">tiktok.com/@jaydoesvideo</h4>
          </Grid>
          <Grid item xs={3} className={styles.contact__socialColumn}>
            <StaticImage
              src="../assets/images/social/vimeo.png"
              className={styles.contact__socialImage}
            />
            <h4 variant="h4">vimeo.com/jaydoesvideo</h4>
          </Grid>
          <Grid item xs={3} className={styles.contact__socialColumn}>
            <StaticImage
              src="../assets/images/social/youtube.png"
              className={styles.contact__socialImage}
            />
            <h4 variant="h4">youtube.com</h4>
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default ContactPage;
