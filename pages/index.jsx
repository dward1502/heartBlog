import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Fade, Bounce } from 'react-reveal';
import Typewriter from 'typewriter-effect';
import MainCard from '../components/home/mainCard';
import BlogSmallCard from '../components/home/blogSmallCards';

import styles from '../sass/Home.module.scss';
import { getRecentPosts2to4, getTopPost } from '../lib/posts_util';
import { getTop3Stories } from '../lib/stories_util';

function HomePage(props) {
  const heroImg = '/images/heart&ekgTransparent.webp';
  const topBlog = props.topBlogPost;
  const recentBlogPosts = props.recentBlogPosts;
  const topStories = props.topStories;

  return (
    <Fragment>
      <section className={styles.heroText}>
        <Typewriter
          options={{
            strings: [
              'You have power over your mind -- not outside events. Realize this, and you will find strength. --- Marcus Aurelius',
              'The key is to keep company only with people who uplify you, whose presence calls forth your best. --- Epictetus',
              'The happiness of your life depends on the quality of your thoughts. --- Marcus Aurelius',
            ],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
          }}
        />
      </section>
      <div className={styles.heroImgCont}>
        <Image
          src={heroImg}
          alt='Heart with EKG line'
          layout='fill'
          className={styles.heroImg}
        />
      </div>
      <section className={styles.stories}>
        <Bounce left>
          <h1>TRANSPLANT STORIES</h1>
        </Bounce>

        <Fade bottom duration={3000}>
          <div className={styles.storiesGrid}>
            <div className={styles.mainCard}>
              <div className={styles.mainImg}>
                <Image
                  src={topStories[0].photo.link}
                  alt={topStories[0].photo.description}
                  layout='fill'
                />
              </div>
              <div className={styles.mainText}>
                <h1>{topStories[0].title}</h1>
                <h3>{topStories[0].date}</h3>
                <h5>{topStories[0].username}</h5>
                <p>{topStories[0].excerpt}</p>
                <div className={styles.readMore}>
                  <Link
                    href={`/stories/${topStories[0].storyID}`}
                    className={styles.btn}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${styles.storyCard} ${styles.storySecondary}`}>
              <div className={styles.storyImg}>
                <Image
                  src={topStories[1].photo.link}
                  alt={topStories[1].photo.description}
                  layout='fill'
                />
              </div>
              <div className={styles.storyText}>
                <h1>{topStories[1].title}</h1>
                <h3>{topStories[1].date}</h3>
                <h5>{topStories[1].username}</h5>
                <p>{topStories[1].excerpt}</p>
                <div className={styles.readMore}>
                  <Link
                    href={`/stories/${topStories[1].storyID}`}
                    className={styles.btn}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${styles.storyCard} ${styles.storyTertiary}`}>
              <div className={styles.storyImg}>
                <Image
                  src={topStories[2].photo.link}
                  alt={topStories[2].photo.description}
                  layout='fill'
                />
              </div>
              <div className={styles.storyText}>
                <h1>{topStories[2].title}</h1>
                <h3>{topStories[2].date}</h3>
                <h5>{topStories[2].username}</h5>
                <p>{topStories[2].excerpt}</p>
                <div className={styles.readMore}>
                  <Link
                    href={`/stories/${topStories[2].storyID}`}
                    className={styles.btn}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade duration={3000}>
          <div className={styles.viewMoreBtn}>
            <Link href='/stories'>
              <a>View More</a>
            </Link>
          </div>
        </Fade>
      </section>
      <section className={styles.blog}>
        <Bounce left>
          <h1>BI-WEEKLY BLOG</h1>
        </Bounce>
        <Fade bottom duration={3000}>
          <div className={styles.blogGrid}>
            <div className={styles.blogMain}>
              <MainCard data={topBlog} />
            </div>
            <div className={`${styles.blogCard} ${styles.one} `}>
              <BlogSmallCard data={recentBlogPosts[0]} />
            </div>
            <div className={`${styles.blogCard} ${styles.two} `}>
              <BlogSmallCard data={recentBlogPosts[1]} />
            </div>
            <div className={`${styles.blogCard} ${styles.three} `}>
              <BlogSmallCard data={recentBlogPosts[2]} />
            </div>
            <div className={`${styles.blogCard} ${styles.four} `}>
              <BlogSmallCard data={recentBlogPosts[3]} />
            </div>
          </div>
        </Fade>
        <Fade duration={3000}>
          <div className={`${styles.viewMoreBtn} ${styles.darkBlue}`}>
            <Link href='/blog'>
              <a>View More</a>
            </Link>
          </div>
        </Fade>
      </section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const topBlogPost = getTopPost();
  const recentBlogPosts = getRecentPosts2to4();
  const top3 = await getTop3Stories();

  return {
    props: {
      topBlogPost: topBlogPost,
      recentBlogPosts: recentBlogPosts,
      topStories: JSON.parse(JSON.stringify(top3)),
    },
  };
}

export default HomePage;
