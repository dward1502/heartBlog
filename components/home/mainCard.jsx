import Link from 'next/link'
import Image from 'next/image'
import styles from './home_components.module.scss'

const mainCard = (props) => {
    const {title,date,image,description,slug} = props.data[0];
    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/blog/posts/${slug}`

    return (
      <div className={styles.mainCard}>
        <div className={styles.mainImg}>
          <Image src={imagePath} alt={title} layout='fill'/>
        </div>
        <div className={styles.mainText}>
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
