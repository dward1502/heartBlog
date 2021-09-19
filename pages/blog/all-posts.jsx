import { Fragment } from 'react';

import styles from './blog.module.scss';

const AllPostsPage = () => {
  return (
    <Fragment>
      <section className={styles.aboutBox}>
        <div className={styles.container}>
          <div className={styles.imgContAbt}>
            <div className={styles.image}></div>
          </div>
          <div className={styles.aboutText}>
            <p>
              Hello I am Daniel Ward a transplant survivor and software
              developer. I made this website to discuss my progress in a
              bi-weekly format on my blog. At the same time I wanted to have a
              platform where other transplant survivors could share their
              experiences and journey with their second or third lease on life.
            </p>
            <p>
              Come join the discussion and read through mine and others journey
              through one of the most unbelievable and amazing procedure that
              can be done on the human body, a whole new heart the powerplant of
              our body.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.recentPostCont}>
        <div className={styles.recentPosts}>
          <div className={styles.postImgCont}></div>
          <div className={styles.postData}>
            <h1>Title</h1>
            <h3>09/05/2021</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              fugiat, nulla molestiae impedit veritatis obcaecati deserunt iste
              tenetur consequuntur sed tempore ducimus at quis eos ex nihil
              vitae fuga doloribus.
            </p>
            <div className={styles.readMore}>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
        </div>
        <div className={styles.recentPosts}>
          <div className={styles.postImgCont}></div>
          <div className={styles.postData}>
            <h1>Title</h1>
            <h3>09/05/2021</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              fugiat, nulla molestiae impedit veritatis obcaecati deserunt iste
              tenetur consequuntur sed tempore ducimus at quis eos ex nihil
              vitae fuga doloribus.
            </p>
            <div className={styles.readMore}>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.allPosts}>
        <div className={styles.card}>
          <div className={styles.cardImgCont}></div>
          <h1>Title</h1>
          <h3>08/21/2021</h3>
          <div className={`${styles.readMore} ${styles.mt_30}`}>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </section>
    </Fragment>
  );
};

export default AllPostsPage;
