import Link from 'next/link';
import Image from 'next/image';
import styles from './home_components.module.scss';
import { Fragment } from 'react';

const blogSmallCards = (props) => {
  const { title, date, image, slug } = props.data;
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/blog/posts/${slug}`;

  return (
    <Fragment>
      <div className={styles.blogCardImg}>
        <Image src={imagePath} alt={title} layout='fill' />
      </div>
      <div className={styles.blogText}>
        <h1>{title}</h1>
        <div>
          <h3>{date}</h3>
          <Link href={linkPath}>
            <a className={styles.btn}>Read More</a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default blogSmallCards;
