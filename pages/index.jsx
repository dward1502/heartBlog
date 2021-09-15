import {Fragment} from 'react'
import Image from 'next/image'
import {CgArrowRightR} from 'react-icons/cg'

import styles from '../sass/Home.module.scss'

export default function Home() {
  return (
    <Fragment>
      <div className={styles.headerText}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat
          id nihil voluptatem reprehenderit voluptatum impedit nemo sint.
          Repudiandae illum ipsam laudantium reprehenderit nihil perspiciatis
          qui dolorem esse reiciendis doloremque! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nisi, blanditiis, eveniet voluptatibus
          maiores, laborum ducimus corporis ex quo ad nulla harum. Sint labore
          quasi in asperiores vel, nemo eum non.
        </p>
      </div>
      <div className={styles.hero}>
        <div className={styles.imgContainer}>
          <Image
            src='/images/heart&ekgTransparent.webp'
            layout='fill'
            alt='Heart and ekg display'
          />
        </div>
      </div>
      <section className={styles.storySection}>
        <h1>Transplant Stories</h1>
        <div className={styles.storyCont}>
          <div className={styles.mainCard}>
            <div className={styles.imgCardCont}>

            </div>
            <h1>Title</h1>
            <h4>09/05/2020</h4>
            <h6>Username</h6>
            <p className={styles.cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ratione voluptate impedit dolorum provident ducimus aspernatur cumque ad recusandae, tempore obcaecati dolore nisi dicta, quia numquam facilis nam magnam iusto.</p>
            <div className={styles.readMoreBtn}>
              <p>Read More <CgArrowRightR/></p>
            </div>
          </div>
          <div className={styles.storyCards}>
            <div className={`${styles.card} ${styles.mb_5}`}>

              
            </div>
            <div className={styles.card}></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
