import { useState, useRef } from 'react';
import axios from 'axios';
import { signIn } from 'next-auth/client';
// import { useRouter } from 'next/router';
import Image from 'next/image';

import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import styles from './modal.module.scss';

async function createUser(username, email, password) {
  const response = await axios
    .post('/api/auth/signup', {
      username,
      email,
      password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.res);
      }
    });
  return response;
}

const loginModal = (props) => {
  const [loginSwitch, setLoginSwitch] = useState(true);
  const signUpUsernameRef = useRef();
  const signUpEmailRef = useRef();
  const signUpPasswordRef = useRef();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  

  async function signUpHandler(event) {
    event.preventDefault();

    const enteredUsername = signUpUsernameRef.current.value;
    const enteredEmail = signUpEmailRef.current.value;
    const enteredPassword = signUpPasswordRef.current.value;

    const response = await createUser(
      enteredUsername,
      enteredEmail,
      enteredPassword
    );
    console.log(response);
    props.onConfirm();

    console.log(
      'Signup Button is pressed',
      enteredUsername,
      enteredEmail,
      enteredPassword
    );
  }

  async function loginHandler(event) {
    event.preventDefault();
    const enteredEmail = loginEmailRef.current.value;
    const enteredPassword = loginPasswordRef.current.value;
    console.log('llogin', enteredEmail, enteredPassword);

    const result = await signIn('credentials', {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });
    // if(!result.error) {
    // console.log(result);
    // }
    console.log(result);
  }

  const loginSwitchHandler = () => {
    setLoginSwitch(true);
  };
  const signUpSwitchHandler = () => {
    setLoginSwitch(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.imgCont}>
            <Image
              src='/images/heartEKGlogo.webp'
              alt='Heart EKG Logo'
              layout='fill'
            />
          </div>
          {loginSwitch ? (
            <button className={styles.btn} onClick={signUpSwitchHandler}>
              Sign Up
            </button>
          ) : (
            <button className={styles.btn} onClick={loginSwitchHandler}>
              Login
            </button>
          )}
        </div>

        <div
          className={`${styles.containerLogin} ${
            loginSwitch ? '' : styles.inactive
          }`}>
          <h1>Login</h1>
          {/* <div className={styles.socialLogin}>
            <div className={styles.googleBtn}>
              <div className={styles.iconWrapper}>
                <FcGoogle className={styles.google} />
              </div>
              <p className={styles.btnText}>Login with Google</p>
            </div>
            <div className={styles.facebookBtn}>
              <div className={styles.iconWrapper}>
                <FaFacebook className={styles.facebook} />
              </div>
              <p className={styles.btnText}>Login with Facebook</p>
            </div>
          </div> */}
          {/* <div className={styles.separator}>
            <span>OR</span>
          </div> */}
          <input
            type='email'
            placeholder='Email'
            className={styles.input}
            ref={loginEmailRef}
          />
          <input
            type='password'
            placeholder='Password'
            className={styles.input}
            ref={loginPasswordRef}
          />
          <button className={styles.btn} onClick={loginHandler}>
            Login
          </button>
        </div>

        <div
          className={`${styles.containerLogin} ${
            loginSwitch ? styles.inactive : ''
          }`}>
          <h1>SignUp</h1>
          {/* <div className={styles.socialLogin}>
            <div className={styles.googleBtn}>
              <div className={styles.iconWrapper}>
                <FcGoogle className={styles.google} />
              </div>
              <p className={styles.btnText}>SignUp with Google</p>
            </div>
            <div className={styles.facebookBtn}>
              <div className={styles.iconWrapper}>
                <FaFacebook className={styles.facebook} />
              </div>
              <p className={styles.btnText}>SignUp with Facebook</p>
            </div>
          </div> */}
          {/* <div className={styles.separator}>
            <span>OR</span>
          </div> */}
          <input
            type='text'
            placeholder='Username'
            className={styles.input}
            ref={signUpUsernameRef}
          />
          <input
            type='email'
            placeholder='Email'
            className={styles.input}
            ref={signUpEmailRef}
          />
          <input
            type='password'
            placeholder='Password'
            className={styles.input}
            ref={signUpPasswordRef}
          />
          <button className={styles.btn} onClick={signUpHandler}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default loginModal;
