import {useState, Fragment} from 'react'

import Image from 'next/image';
import Link from 'next/link';
import {FaUserCircle, FaBars, FaTimes} from 'react-icons/fa'
import styles from './navigation.module.scss';
import Modal from '../Modal/modalOverlay';

const navigation = () => {
    const [modal, setModal] = useState()
    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const loginModalHandlerNull = () => {
      setModal(null)
    }

    const loginModalHandler = () => {
        console.log('Initiate modal');
        setModal(true)
    }

  return (
    <Fragment>
      {modal && <Modal onConfirm={loginModalHandlerNull} />}
      <header className={styles.header}>
        <nav>
          <div className={styles.logo}>
            <Link href='/'>
              <a>
                <Image
                  src='/images/heartEKGlogo.webp'
                  alt='Heart EKG Logo'
                  layout='fill'
                  className={styles.img}
                />
              </a>
            </Link>
          </div>
          <ul
            className={click ? `${styles.list} ${styles.active}` : styles.list}>
            <li onClick={closeMobileMenu}>
              <Link href='/stories'>
                <a>Stories</a>
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link href='/blog/all-posts'>
                <a>Blog</a>
              </Link>
            </li>
            <li onClick={loginModalHandler}>
              <a>Login</a>
            </li>
          </ul>
        </nav>
        <div
          className={click ? `${styles.auth} ${styles.active}` : styles.auth}>
          <span>
            <FaUserCircle />
          </span>
          <p onClick={loginModalHandler}>Login</p>
        </div>
        <div className={styles.burgerBtn} onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </header>
    </Fragment>
  );
};

export default navigation;
