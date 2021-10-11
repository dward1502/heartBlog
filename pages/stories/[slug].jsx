import { connectToDatabase } from "../../lib/db";
import Image from 'next/image'

import styles from './stories.module.scss'

const SpecificStoryPage = (props) => {
    console.log(props.story);
    const data = props.story

    return (
      <article className={styles.content}>
        <div className={styles.header}>
          <Image
            src={data.photo.link}
            alt={data.photo.description}
            layout='fill'
          />
        </div>
        <div className={styles.textContent}>
            <h1>{data.title}</h1>
            <h4>{data.date}</h4>
            <h5>{data.username}</h5>
          <p>{data.story}</p>
        </div>
      </article>
    );
}
export async function getServerSideProps(context) {
    const storyID = context.params.slug;
    const client = await connectToDatabase()
    const db = client.db()

    const data = await db.collection('stories').findOne({storyID: storyID})

    return {
        props:{
            story: JSON.parse(JSON.stringify(data))
        }
    }
}


export default SpecificStoryPage
