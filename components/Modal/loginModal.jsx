import { useState, useRef } from 'react';
import axios from 'axios';
import useInput from '../../hooks/use_input';
import { signIn } from 'next-auth/client';
// import { useRouter } from 'next/router';
import Image from 'next/image';

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

const isEmail = (value) => value.includes('@');
const isNotEmpty = (value) => value.trim() !== '';
const isPassword = (value) => value.trim().length > 6;

const loginModal = (props) => {
  const [loginSwitch, setLoginSwitch] = useState(true);

  const {
    value: loginEmailValue,
    isValid: loginEmailIsValid,
    hasError: loginEmailHasError,
    valueChangeHandler: loginEmailChangeHandler,
    inputBlurHandler: loginEmailBlurHandler,
    reset: resetLoginEmail,
  } = useInput(isEmail);
  const {
    value: loginPasswordValue,
    isValid: loginPasswordIsValid,
    hasError: loginPasswordHasError,
    valueChangeHandler: loginPasswordChangeHandler,
    inputBlurHandler: loginPasswordBlurHandler,
    reset: resetLoginPassword,
  } = useInput(isPassword);

  const {
    value: signUpUsernameValue,
    isValid: signUpUsernameIsValid,
    hasError: signUpUsernameHasError,
    valueChangeHandler: signUpUsernameChangeHandler,
    inputBlurHandler: signUpUsernameBlurHandler,
    reset: resetSignUpUsername,
  } = useInput(isNotEmpty);
  const {
    value: signUpEmailValue,
    isValid: signUpEmailIsValid,
    hasError: signUpEmailHasError,
    valueChangeHandler: signUpEmailChangeHandler,
    inputBlurHandler: signUpEmailBlurHandler,
    reset: resetSignUpEmail,
  } = useInput(isEmail);
  const {
    value: signUpPasswordValue,
    isValid: signUpPasswordIsValid,
    hasError: signUpPasswordHasError,
    valueChangeHandler: signUpPasswordChangeHandler,
    inputBlurHandler: signUpPasswordBlurHandler,
    reset: resetSignUpPassword,
  } = useInput(isPassword);

  let formIsValid = false;

  if (loginEmailIsValid && loginPasswordIsValid) {
    formIsValid = true;
  }
  if (signUpEmailIsValid && signUpPasswordIsValid && signUpUsernameIsValid) {
    formIsValid = true;
  }

  // const loginEmailRef = useRef();
  // const loginPasswordRef = useRef();

  async function signUpHandler(event) {
    event.preventDefault();

    console.log(signUpUsernameValue, signUpEmailValue, signUpPasswordValue);
    resetSignUpUsername()
    resetSignUpEmail()
    resetSignUpPassword()
    // const response = await createUser(
    //   enteredUsername,
    //   enteredEmail,
    //   enteredPassword
    // );
    // console.log(response);
    // props.onConfirm();

    // console.log(
    //   'Signup Button is pressed',
    //   enteredUsername,
    //   enteredEmail,
    //   enteredPassword
    // );
  }

  async function loginHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(loginEmailValue, loginPasswordValue);
    resetLoginEmail();
    resetLoginPassword();

    // const result = await signIn('credentials', {
    //   redirect: false,
    //   email: enteredEmail,
    //   password: enteredPassword,
    // });
    // // if(!result.error) {
    // // console.log(result);
    // // }
    // console.log(result);
  }

  const loginSwitchHandler = () => {
    setLoginSwitch(true);
  };
  const signUpSwitchHandler = () => {
    setLoginSwitch(false);
  };

  const loginEmailStyles = loginEmailHasError
    ? `${styles.input} ${styles.invalid}`
    : styles.input;
  const loginPasswordStyles = loginPasswordHasError
    ? `${styles.input} ${styles.invalid}`
    : styles.input;
  const signUpUsernameStyles = signUpUsernameHasError
    ? `${styles.input} ${styles.invalid}`
    : styles.input;
  const signUpEmailStyles = signUpEmailHasError
    ? `${styles.input} ${styles.invalid}`
    : styles.input;
  const signUpPasswordStyles = signUpPasswordHasError
    ? `${styles.input} ${styles.invalid}`
    : styles.input;

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

        <form
          className={`${styles.containerLogin} ${
            loginSwitch ? '' : styles.inactive
          }`}>
          <h1>Login</h1>
          <div className={loginEmailStyles}>
            <label htmlFor='loginEmail'>Email Address</label>
            <input
              type='email'
              id='loginEmail'
              value={loginEmailValue}
              onChange={loginEmailChangeHandler}
              onBlur={loginEmailBlurHandler}
            />
            {loginEmailHasError && (
              <p className={styles.errorText}>Please enter a valid email</p>
            )}
          </div>
          <div className={loginPasswordStyles}>
            <label htmlFor='loginPassword'>Password</label>
            <input
              type='password'
              id='loginPassword'
              value={loginPasswordValue}
              onChange={loginPasswordChangeHandler}
              onBlur={loginPasswordBlurHandler}
            />
            {loginPasswordHasError && (
              <p className={styles.errorText}>
                Please enter a password longer than 6 characters.
              </p>
            )}
          </div>

          <button
            className={styles.btn}
            onClick={loginHandler}
            disabled={!formIsValid}>
            Login
          </button>
        </form>

        <div
          className={`${styles.containerLogin} ${
            loginSwitch ? styles.inactive : ''
          }`}>
          <h1>SignUp</h1>
          <div className={signUpUsernameStyles}>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={signUpUsernameValue}
              onChange={signUpUsernameChangeHandler}
              onBlur={signUpUsernameBlurHandler}
            />
            {signUpUsernameHasError && (
              <p className={styles.errorText}>Please enter a username</p>
            )}
          </div>
          <div className={signUpEmailStyles}>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              value={signUpEmailValue}
              onChange={signUpEmailChangeHandler}
              onBlur={signUpEmailBlurHandler}
            />
            {signUpEmailHasError && (
              <p className={styles.errorText}>Please enter a valid email</p>
            )}
          </div>
          <div className={signUpPasswordStyles}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              className={styles.input}
              value={signUpPasswordValue}
              onChange={signUpPasswordChangeHandler}
              onBlur={signUpPasswordBlurHandler}
            />
            {signUpPasswordHasError && (
              <p className={styles.errorText}>
                Please enter a password longer than 6 characters.
              </p>
            )}
          </div>

          <button className={styles.btn} onClick={signUpHandler} disabled={!formIsValid}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default loginModal;
