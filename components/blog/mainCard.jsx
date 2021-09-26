import Image from 'next/image'
import Link from 'next/link'
import styles from './blogCard.module.scss'

const mainCard = (props) => {
    const {title,date,description,slug,image} =props.data;
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/blog/posts/${slug}`;

    return (
      <div className={styles.recentPosts} >
        <div className={styles.postImgCont}>
            <Image src={imagePath} alt={title} layout='fill'/> 
        </div>
        <div className={styles.postData}>
          <h1>{title}</h1>
          <h3>{date}</h3>
          <p>{description}</p>
          <div className={styles.readMore}>
            <Link href={linkPath}>
                <a className={styles.btn}>Read More</a>
            </Link>            
          </div>
        </div>
      </div>
    );
}

export default mainCard
