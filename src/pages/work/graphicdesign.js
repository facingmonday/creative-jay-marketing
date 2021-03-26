import * as React from 'react';

import Gallery from '@browniebroke/gatsby-image-gallery';

import Grid from '@material-ui/core/Grid';
import { StaticImage } from 'gatsby-plugin-image';

import { useStaticQuery, graphql, navigate } from 'gatsby'; // to query for image data
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

export const query = graphql`
  query {
    allFile(filter: {absolutePath: {regex: "/graphicdesign\/hero/"}}) {
      edges {
        node {
          id
          name
          absolutePath
          publicURL
        }
      }
    }
    images: allFile(filter: {absolutePath: {regex: "/graphicdesign\/gallery/"}}) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

const PrintPage = ({ data: { images, allFile } }) => {
  const galleryImages = images.edges
    .map(({ node }) => node.childImageSharp)
    .filter((image) => image?.thumb);

  return (
    <Page headerColor="black">
      <SEO title="Work" />
      <HeroCarousel
        title="Professional Video Editing"
        images={allFile?.edges?.map(({ node }) => node)}
      />
      <Section>
        { galleryImages?.length ? <Gallery images={galleryImages} /> : null }
      </Section>
    </Page>
  );
};

export default PrintPage;
