import {Fragment} from 'react'
import Image from 'next/image'
// import {CgArrowRightR} from 'react-icons/cg'

import styles from '../sass/Home.module.scss'

export default function Home() {
  const heroImg = '/images/heart&ekgTransparent.webp'
  return (
    <Fragment>
      <section className={styles.heroText}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat animi itaque aut quia ipsa, laboriosam optio voluptatibus voluptates consectetur accusantium architecto placeat rerum quaerat? Sapiente minima a repellendus quasi!</p>
      </section>
      <div className={styles.heroImgCont}>
        <Image src={heroImg} alt='Heart with EKG line' layout='fill'/> 
      </div>
      <section className={styles.stories}>
        <h1>TRANSPLANT STORIES</h1>
        <div >

        </div>
      </section>
      <section className={styles.blog}>
        <h1>BI-WEEKLY BLOG</h1>
      </section>
    </Fragment>
  );
}
