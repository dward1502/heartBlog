import { Fragment } from 'react';
import Image from 'next/image';

import styles from '../sass/Home.module.scss';

export default function Home() {
  const heroImg = '/images/heart&ekgTransparent.webp';
  return (
    <Fragment>
      <section className={styles.heroText}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat
          animi itaque aut quia ipsa, laboriosam optio voluptatibus voluptates
          consectetur accusantium architecto placeat rerum quaerat? Sapiente
          minima a repellendus quasi!
        </p>
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
        <h1>TRANSPLANT STORIES</h1>
        <div className={styles.storiesGrid}>
          <div className={styles.mainCard}>
            <div className={styles.mainImg}></div>
            <div className={styles.mainText}>
              <h1>Title</h1>
              <h3>09/05/2021</h3>
              <h5>Username</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente fugiat, nulla molestiae impedit veritatis obcaecati
                deserunt iste tenetur consequuntur sed tempore ducimus at quis
                eos ex nihil vitae fuga doloribus.
              </p>
              <div className={styles.readMore}>
                <button className={styles.btn}>Read More</button>
              </div>
            </div>
          </div>
          <div className={`${styles.storyCard} ${styles.storySecondary}`}>
            <div className={styles.storyImg}></div>
            <div className={styles.storyText}>
              <h1>Title</h1>
              <h3>09/05/2021</h3>
              <h5>Username</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente fugiat, nulla molestiae impedit veritatis obcaecati
                deserunt iste tenetur consequuntur sed tempore ducimus at quis
                eos ex nihil vitae fuga doloribus.
              </p>
              <div className={styles.readMore}>
                <button className={styles.btn}>Read More</button>
              </div>
            </div>
          </div>
          <div className={`${styles.storyCard} ${styles.storyTertiary}`}>
            <div className={styles.storyImg}></div>
            <div className={styles.storyText}>
              <h1>Title</h1>
              <h3>09/05/2021</h3>
              <h5>Username</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente fugiat, nulla molestiae impedit veritatis obcaecati
                deserunt iste tenetur consequuntur sed tempore ducimus at quis
                eos ex nihil vitae fuga doloribus.
              </p>
              <div className={styles.readMore}>
                <button className={styles.btn}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.viewMoreBtn}>
          <button>View More</button>
        </div>
      </section>
      <section className={styles.blog}>
        <h1>BI-WEEKLY BLOG</h1>
        <div className={styles.blogGrid}>
          <div className={styles.blogMain}>
            <div className={styles.mainCard}>
              <div className={styles.mainImg}></div>
              <div className={styles.mainText}>
                <h1>Title</h1>
                <h3>09/05/2021</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente fugiat, nulla molestiae impedit veritatis obcaecati
                  deserunt iste tenetur consequuntur sed tempore ducimus at quis
                  eos ex nihil vitae fuga doloribus.
                </p>
                <div className={styles.readMore}>
                  <button className={styles.btn}>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.blogCard} ${styles.one} `}>
            <div className={styles.blogCardImg}></div>
            <div className={styles.blogText}>
              <h1>Title</h1>
              <div>
                <h3>09/05/2021</h3>
                <button className={styles.btn}>Read More</button>
              </div>
            </div>
          </div>
          <div className={`${styles.blogCard} ${styles.two} `}>
            <div className={styles.blogCardImg}></div>
            <div className={styles.blogText}>
              <h1>Title</h1>
              <div>
                <h3>09/05/2021</h3>
                <button className={styles.btn}>Read More</button>
              </div>
            </div>
          </div>
          <div className={`${styles.blogCard} ${styles.three} `}>
            <div className={styles.blogCardImg}></div>
            <div className={styles.blogText}>
              <h1>Title</h1>
              <div>
                <h3>09/05/2021</h3>
                <button className={styles.btn}>Read More</button>
              </div>
            </div>
          </div>
          <div className={`${styles.blogCard} ${styles.four} `}>
            <div className={styles.blogCardImg}></div>
            <div className={styles.blogText}>
              <h1>Title</h1>
              <div>
                <h3>09/05/2021</h3>
                <button className={styles.btn}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.viewMoreBtn} ${styles.darkBlue}`}>
          <button>View More</button>
        </div>
      </section>
    </Fragment>
  );
}
