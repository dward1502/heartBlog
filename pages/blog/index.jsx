import { Fragment } from 'react';
import Image from 'next/image'
import MainCard from '../../components/blog/mainCard'
import Card from '../../components/blog/card'
import styles from './blog.module.scss';
import { getAllPostsExceptFirst2, getTop2Posts } from '../../lib/posts_util';

const AllPostsPage = (props) => {
  const mostRecentPost = props.top2Post;
  const allPosts = props.allPosts;

  return (
    <Fragment>
      <section className={styles.aboutBox}>
        <div className={styles.container}>
          <div className={styles.imgContAbt}>
            <div className={styles.image}>
              <Image src='/images/selfPortrait.webp' alt='Self portrait of Daniel Ward author of the blog' layout='fill'/>
            </div>
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
              through one of the most unbelievable and amazing procedures that
              can be done on the human body, a whole new heart the "powerplant of
              our body".
            </p>
          </div>
        </div>
      </section>
      <section className={styles.recentPostCont}>
        {mostRecentPost.map((post) => {
          return <MainCard key={post.slug} data={post} />;
        })}
      </section>
      <section className={styles.allPosts}>
        {allPosts.map((post)=>{
          return (
            <Card key={post.slug} data={post} />
          )
        })}
      </section>
    </Fragment>
  );
};

export function getStaticProps() {
  const top2BlogPosts = getTop2Posts()
  const posts = getAllPostsExceptFirst2()
  return {
    props:{
      top2Post: top2BlogPosts,
      allPosts: posts
    }
  }
}

export default AllPostsPage;
