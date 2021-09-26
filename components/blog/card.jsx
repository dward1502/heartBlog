import Image from 'next/image';
import Link from 'next/link';
import styles from './blogCard.module.scss';

const card = (props) => {
  const { title, date, slug, image } = props.data;
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/blog/posts/${slug}`;

  return (
    <div className={styles.card}>
      <div className={styles.cardImgCont}>
        <Image src={imagePath} alt={title} layout='fill' />
      </div>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <div className={`${styles.readMore} ${styles.mt_30}`}>
        <Link href={linkPath}>
          <a className={styles.btn}>Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default card;
