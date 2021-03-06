import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import BackgroundSlider from 'gatsby-image-background-slider';

import HeroCarousel from '../components/HeroCarousel';
import Page from '../components/Page';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Section from '../components/Section';
import BlockSet from '../components/BlockSet';
import IconBlock from '../components/IconBlock';
import SectionHeading from '../components/SectionHeading';

import * as styles from './index.module.scss';

export const query = graphql`
  query {
    allFile(filter: {absolutePath: {regex: "/home\/carousel/"}}) {
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
`;

const IndexPage = ({ data }) => (
  <Page headerColor="black">
    <SEO title="Home" />
    <div className={styles.embedContainer}>
      <iframe src="https://player.vimeo.com/video/529616897?autoplay=1&muted=1" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
    </div>
    <Section>
      <Grid container spacing={8} style={{ padding: '40px' }}>
        <Grid item xs={12} sm={4}>
          <p className={styles.sectionUpperTitle}>Check out my latest work.</p>
          <h1 className={styles.sectionTitle}>Welcome to my portfolio</h1>
          <p className={styles.sectionDescription}>
            I'm a full stack developer, videographer, photographer, graphic designer, printer, musician and friend.
          </p>
        </Grid>
        <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
          <StaticImage
            src="../assets/images/home/deviceshomepage.jpg"
          />
        </Grid>
      </Grid>
    </Section>
    <Section>
      <BlockSet
        xs={12}
        sm={6}
        md={4}
      >
        <IconBlock
          title="Apps"
          description="Mobile apps for iPhone and Android"
          iconName="smartphone"
          href="/work/apps"
        />
        <IconBlock
          title="Websites"
          description="Marketing Websites and API's"
          iconName="globe"
          href="/work/web"
        />
        <IconBlock
          title="Video"
          description="We provide all kinds of services"
          iconName="video"
          href="/work/video"
        />
        <IconBlock
          title="Photography"
          description="We provide all kinds of services"
          iconName="aperture"
          href="/work/photography"
        />
        <IconBlock
          title="Graphic Design"
          description="Social media, T-shirts, Posters, Banners"
          iconName="printer"
          href="/work/graphicdesign"
        />
        <IconBlock
          title="Social"
          description="We provide all kinds of services"
          iconName="share2"
          href="/work/social"
        />
      </BlockSet>
    </Section>
    <Section>
      <Grid container spacing={8} style={{ padding: '40px' }}>
        <Grid item xs={12} sm={6}>
          <p className={styles.sectionUpperTitle}>Check out my latest app.</p>
          <h1 className={styles.sectionTitle}>Get. Stuff. Done.</h1>
          <p className={styles.sectionDescription}>
            Inspired by the hard list by Andy Fricella. Keep track of your critical tasks that need to be done each day. When you complete them, cross them off the list. Once you've accomplished all your tasks for that day, we'll mark it as a W. Otherwise, we'll chalk it up as an L and we all know what that means.
          </p>
          <p style={{ marginLeft: 10 }}>
            <ul>
              <li>Track up to 5 tasks a day</li>
              <li>Schedule critical tasks for today or tomorrow</li>
              <li>Daily notifications to keep you on track</li>
              <li>Earn rewards for consistancy and perserveraence</li>
              <li>Share progress with friends</li>
            </ul>
          </p>
          <p className={styles.sectionDescription}>
            Download the app today and start on a path to conquoring yourself
          </p>
          <div style={{ display: 'flex' }}>
            <Link to="https://store.apple.com">
              <StaticImage src="../assets/images/apps/iosappstore.png" />
            </Link>
            <Link to="https://store.apple.com">
              <StaticImage src="../assets/images/apps/playstore.png" />
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <StaticImage
            src="../assets/images/home/phone.png"
          />
        </Grid>
      </Grid>
    </Section>
    <Section containerStyle={{ backgroundColor: 'black', height: '90px', padding: '20 10' }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: 5 }}>
          <h1 className={styles.bannerText}>
            Need help with anything? Reach out and say hi!
          </h1>
        </div>
        <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button>Contact Us</Button>
        </div>
      </div>
    </Section>
    <Section>
      <Grid container spacing={8} style={{ padding: '40px' }}>
        <Grid item xs={12} sm={4}>
          <StaticImage
            src="../assets/images/home/markleach.png"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <h1 className={styles.sectionTitle}>Mark Leach</h1>
          <h4>Here&apos;s looking at you, kid.</h4>
          <p className={styles.sectionDescription}>
            A landing site for country artist Mark Leach for his upcoming single.
          </p>
          <div>
            <a to="http://markleachmusic.com" style={{ textDecoration: 'none' }} target="_blank"><h4>Visit Site</h4></a>
          </div>
        </Grid>
      </Grid>
    </Section>
    <Section>
      <Grid container spacing={8} style={{ padding: '40px' }}>
        <Grid item xs={12} sm={6}>
          <h1 className={styles.sectionTitle}>Guerrilla Sportswear</h1>
          <h4>Clothing for fighters</h4>
          <p className={styles.sectionDescription}>
            An ecommerce site built with shopify. Guerrilla Sportswear is a fitness apparel brand by fighters, for fighters. Support amature MMA and help a fighter get to the octagon.
          </p>
          <div>
            <a to="http://guerrillasportswear.com" style={{ textDecoration: 'none' }} target="_blank"><h4>Visit Site</h4></a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StaticImage
            src="../assets/images/home/gswlaptop.png"
          />
        </Grid>
      </Grid>
    </Section>
    <Section containerStyle={{ backgroundColor: 'black', height: '90px', padding: '20 10' }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: 5 }}>
          <h1 className={styles.bannerText}>
            Need help with anything? Reach out and say hi!
          </h1>
        </div>
        <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button>Contact Us</Button>
        </div>
      </div>
    </Section>
    <Section containerStyle={{
      display: 'block', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
    }}
    >
      <SectionHeading
        title="Clients"
        subtitle="I get by with a little help from my friends"
      />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StaticImage
            src="../assets/images/client/clayspark.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StaticImage
            src="../assets/images/client/ctd.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StaticImage
            src="../assets/images/client/gsw.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StaticImage
            src="../assets/images/client/leachs.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StaticImage
            src="../assets/images/client/raw.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StaticImage
            src="../assets/images/client/scottys.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StaticImage
            src="../assets/images/client/squarescullery.png"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StaticImage
            src="../assets/images/client/pristineexteriors.png"
          />
        </Grid>
      </Grid>
    </Section>
    {/* <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <BlogSummary blog={blogs[0]} />
          </Grid>
          <Grid item xs={12} sm={6} />
          <Grid item xs={12} sm={6} />
          <Grid item xs={12} sm={6} />
        </Grid>
      </Section> */}
  </Page>
);

export default IndexPage;
