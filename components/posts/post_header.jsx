import Image from 'next/image';
import styles from './posts.module.scss';

const post_header = (props) => {
    const {image,title} = props;

    return (
        <div className={styles.header}>
            <Image src={image} alt={title} layout='fill' />
        </div>
    )
}

export default post_header
