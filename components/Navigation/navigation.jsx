import {useState} from 'react'

import Image from 'next/image';
import Link from 'next/link';
import {FaUserCircle} from 'react-icons/fa'
import styles from './navigation.module.scss';

const navigation = () => {
    const [modal, setModal] = useState()


    const loginModalHandler = () => {
        console.log('Initiate modal');
        setModal(true)
    }

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='/images/heartEKGlogo.webp'
              alt='Heart EKG Logo'
              layout='fill'
              className={styles.img}
            />
          </Link>
        </div>
        <ul className={styles.list}>
          <li>
            <Link href='/'>
              <a>Stories</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.auth}>
        <span>
          <FaUserCircle />
        </span>
        <p onClick={loginModalHandler}>Login</p>
      </div>
    </header>
  );
};

export default navigation;
