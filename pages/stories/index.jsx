import { Fragment } from 'react';
import Image from 'next/image';

import styles from './stories.module.scss';

const StoriesPage = () => {
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
              sudden change is dealth with differently by every patient and here
              I thought it would be a good place for use to describe our stories
              and share our adventures.
            </p>
            <p>
              Anyone can add a story regarding their journey all that needs to
              be done is sign up / login and the ADD STORY button will be
              available. There you will fill out your story, add a picture and
              post the story for others to read and see. Comment on stories that
              move you, and hopefully we can grow with our experience as well as
              others
            </p>
          </div>
        </div>
      </section>
      <div className={styles.title}>
        <h1>OUR STORIES</h1>
        <button>ADD STORY</button>
      </div>
      <section className={styles.dualStoriesGrid}>
        <div className={styles.mainCard}>
          <div className={styles.imgCont}></div>
          <div className={styles.mainText}>
            <h1>Title</h1>
            <h3>09/05/2021</h3>
            <h5>Username</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              corrupti earum quam eius officia ad? Cupiditate consectetur veniam
              eos laboriosam quas voluptatum repellat minus voluptate assumenda
              recusandae? Hic consequatur, labore maxime laboriosam
              exercitationem sed eligendi alias harum numquam iste? Velit nam
              deserunt sunt necessitatibus accusamus voluptates aut expedita!
              Dicta, quo.
            </p>
            <div className={styles.readMore}>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
        </div>
        <div className={styles.mainCard}>
          <div className={styles.imgCont}></div>
          <div className={styles.mainText}>
            <h1>Title</h1>
            <h3>09/05/2021</h3>
            <h5>Username</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              corrupti earum quam eius officia ad? Cupiditate consectetur veniam
              eos laboriosam quas voluptatum repellat minus voluptate assumenda
              recusandae? Hic consequatur, labore maxime laboriosam
              exercitationem sed eligendi alias harum numquam iste? Velit nam
              deserunt sunt necessitatibus accusamus voluptates aut expedita!
              Dicta, quo.
            </p>
            <div className={styles.readMore}>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.threeStoriesGrid}>
        <div className={`${styles.one} ${styles.mainCard}`}>
          <div className={styles.imgCont}></div>
          <div className={styles.mainText}>
            <h1>Title</h1>
            <h3>09/05/2021</h3>
            <h5>Username</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              corrupti earum quam eius officia ad? Cupiditate consectetur veniam
              eos laboriosam quas voluptatum repellat minus voluptate assumenda
              recusandae? Hic consequatur, labore maxime laboriosam
              exercitationem sed eligendi alias harum numquam iste? Velit nam
              deserunt sunt necessitatibus accusamus voluptates aut expedita!
              Dicta, quo.
            </p>
            <div className={styles.readMore}>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
        </div>
        <div className={`${styles.two} ${styles.smallCard}`}>
          <div className={styles.smallImg}></div>
          <div className={styles.smallText}>
            <h1>Title</h1>
            <h3>09/05/2021</h3>
            <h5>Username</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              adipisci, omnis sit in qui quas libero eligendi! Itaque mollitia
              id quibusdam distinctio pariatur debitis, aliquam ratione dolores
              natus eligendi perferendis.
            </p>
            <div className={styles.readMore}>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
        </div>
        <div className={`${styles.three} ${styles.smallCard}`}>
          <div className={styles.smallImg}></div>
          <div className={styles.smallText}>
            <h1>Title</h1>
            <h3>09/05/2021</h3>
            <h5>Username</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              adipisci, omnis sit in qui quas libero eligendi! Itaque mollitia
              id quibusdam distinctio pariatur debitis, aliquam ratione dolores
              natus eligendi perferendis.
            </p>
            <div className={styles.readMore}>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default StoriesPage;
