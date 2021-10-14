import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import styles from './stories.module.scss';
import { connectToDatabase } from '../../lib/db';
import {Fade, Flip} from 'react-reveal'



const StoriesPage = (props) => {
  const [session, loading] = useSession();

  const allStories = props.stories;

  return (
    <Fragment>
      <section className={styles.hero}>
        <div className={styles.box}>
          <div className={styles.heroImg}>
            <Image
              src='/images/neverGiveUp.png'
              alt='Never give up ekg with heart photo'
              layout='fill'
            />
          </div>
          <div className={styles.heroText}>
            <p>
              Transplant patients have a bond with each other that many people
              can not understand, even our loved ones. We have all at some time
              been close to death before our transplant only to be called and
              given the gift, suddenly our life has been changed drasticly. This
              sudden change is dealt with differently by every patient and here
              I thought it would be a good place for us to describe our story
              and share our adventures.
            </p>
            <p>
              Anyone can add a story regarding their journey all that needs to
              be done is sign up / login and the ADD STORY button will be
              available to click. There you will fill out your story, choose a
              picture theme and post the story for others to read and see.
              Comment on stories that move you, and hopefully we can grow by
              reading other experiences and realize we have many things in
              common with each other.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.title}>
        <Flip top>
          <h1>OUR STORIES</h1>
        </Flip>

        {!session && !loading && (
          <Link href='/add_story'>
            <button disabled>Add Story</button>
          </Link>
        )}
        {session && (
          <Link href='/add_story'>
            <button>Add Story</button>
          </Link>
        )}
      </div>
      <section className={styles.dualStoriesGrid}>
        {allStories.map((data) => {
          return (
            <Fade left duration={1500} key={data._id}>
              <div className={styles.mainCard}>
                <div className={styles.imgCont}>
                  <Image
                    src={data.photo.link}
                    alt={data.photo.description}
                    layout='fill'
                  />
                </div>
                <div className={styles.mainText}>
                  <h1>{data.title}</h1>
                  <h3>{data.date}</h3>
                  <h5>{data.username}</h5>
                  <p>{data.excerpt}</p>
                  <div className={styles.readMore}>
                    <Link
                      href={`/stories/${data.storyID}`}
                      className={styles.btn}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </section>
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await connectToDatabase();
  const db = client.db();

  const stories = await db
    .collection('stories')
    .find()
    .sort({ _id: -1 })
    .toArray();
  return {
    props: {
      stories: JSON.parse(JSON.stringify(stories)),
    },
  };
}

export default StoriesPage;
