import { useState, useEffect } from 'react';
import axios from 'axios';
import useInput from '../../hooks/use_input';
import { signIn } from 'next-auth/client';
// import { useRouter } from 'next/router';
import Image from 'next/image';
import Notification from '../UI/notification';

import styles from './modal.module.scss';

const isEmail = (value) => value.includes('@');
const isNotEmpty = (value) => value.trim() !== '';
const isPassword = (value) => value.trim().length > 6;

const loginModal = (props) => {
  const [loginSwitch, setLoginSwitch] = useState(true);
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (
      requestStatus === 'success' ||
      requestStatus === 'error' ||
      requestStatus === 'user exist'
    ) {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

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

  async function signUpHandler(event) {
    event.preventDefault();

    console.log(signUpUsernameValue, signUpEmailValue, signUpPasswordValue);
    setRequestStatus('pending')
    axios
      .post('/api/auth/signup', {
        username: signUpUsernameValue,
        email: signUpEmailValue,
        password: signUpPasswordValue,
      })
      .then((response) => {
        console.log(response);
        setRequestStatus('success')
        const timer = setTimeout(()=>{
           resetSignUpUsername();
           resetSignUpEmail();
           resetSignUpPassword();
           props.onConfirm();
        },3000)
        return () => clearTimeout(timer)
      })
      .catch((error) => {
        if(error.response.status === 422) {
          setRequestError(error.response.data.message);
          setRequestStatus('error');
        }
        setRequestError(error.message);
        setRequestStatus('error');
      });
  }

  async function loginHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(loginEmailValue, loginPasswordValue);

    const result = await signIn('credentials', {
      redirect: false,
      email: loginEmailValue,
      password: loginPasswordValue,
    });
    console.log(result);
    if(result.error === null) {
      setRequestStatus('login')
      const timer = setTimeout(() => {
        resetLoginEmail();
        resetLoginPassword();
        props.onConfirm();
      }, 3000);
      return () => clearTimeout(timer);
    }
    if(result.error === "No User Found!"){
      setRequestStatus('login error');
      const timer = setTimeout(() => {
        resetLoginEmail();
        resetLoginPassword();
        setRequestStatus(null)
      }, 3000);
      return () => clearTimeout(timer);
    }
    if(result.error === 'Could not log you in!') {
      setRequestStatus('login error')
      const timer = setTimeout(() => {
        resetLoginEmail();
        resetLoginPassword();
        setRequestStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
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

  let notification;

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'User has been created successfully',
    };
  }
  if (requestStatus === 'login') {
    notification = {
      status: 'login',
      title: 'Login Success',
      message: 'User has been logged in successfully',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error in sending request ...',
      message: requestError,
    };
  }
  if (requestStatus === 'login error') {
    notification = {
      status: 'error',
      title: 'Error in logging in',
      message: 'User email or password is incorrect',
    };
  }
  if (requestStatus === 'user exist') {
    notification = {
      status: 'user exist',
      title: 'User exists',
      message: 'User exists try a different email or login',
    };
  }
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending User information',
      message: 'Your request is on its way!',
    };
  }

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

          <button
            className={styles.btn}
            onClick={signUpHandler}
            disabled={!formIsValid}>
            SignUp
          </button>
        </div>
      </div>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </div>
  );
};

export default loginModal;
