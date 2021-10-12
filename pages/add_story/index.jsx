import axios from 'axios';
import { useState } from 'react';
import { getSession } from 'next-auth/client';
import useInput from '../../hooks/use_input';
import Notification from '../../components/UI/notification';

import styles from './add_story.module.scss';

const isNotEmpty = (value) => value.trim() !== '';
const textAreaValid = (value) =>
  value.trim() !== '' || (value.trim() !== '' && value.trim().length > 30);

const index = (props) => {
  const [photoTheme, setPhotoTheme] = useState('abstract');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty);
  const {
    value: storyValue,
    isValid: storyIsValid,
    hasError: storyHasError,
    valueChangeHandler: storyChangeHandler,
    inputBlurHandler: storyBlurHandler,
    reset: resetStory,
  } = useInput(textAreaValid);

  let formIsValid = false;

  if (titleIsValid && storyIsValid) {
    formIsValid = true;
  }

  const username = props.session.user.name;

  if (!username) {
    return (
      <div className={styles.center}>
        <p>Need to login or signup to post a story.</p>
      </div>
    );
  }

  function submitStoryHandler(event) {
    event.preventDefault();
    setRequestStatus('pending');
    axios
      .post('/api/insertStory', {
        title: titleValue,
        photoTheme,
        story: storyValue,
        username,
      })
      .then((response) => {
        console.log(response);
        setRequestStatus('success');
        const timer = setTimeout(() => {
          resetTitle();
          setPhotoTheme('abstract');
          resetStory();
          setRequestStatus(null)
        }, 3000);
        return () => clearTimeout(timer);
      })
      .catch((error) => {
        setRequestError(error.message);
        setRequestStatus('error');
      });
  }

  const titleStyles = titleHasError
    ? `${styles.title} ${styles.invalid}`
    : styles.title;
  const storyStyles = storyHasError
    ? `${styles.textarea} ${styles.invalid}`
    : styles.textarea;

  let notification;
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Story has been created successfully',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error in sending request ...',
      message: requestError,
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
    <div className={styles.content}>
      <h1>Add Your Story</h1>
      <form onSubmit={submitStoryHandler}>
        <div className={titleStyles}>
          <label htmlFor='title'>Title</label>
          {titleHasError && (
            <p className={styles.errorText}>Please enter a title</p>
          )}
          <input
            type='text'
            required
            value={titleValue}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
          />
        </div>
        <div className={styles.dropdown}>
          <label htmlFor='photoTheme'>
            Pick a photo theme from the list below
          </label>
          <select
            name='photoTheme'
            id='photoTheme'
            value={photoTheme}
            onChange={(event) => setPhotoTheme(event.target.value)}
            required>
            <option value='abstract'>Abstract</option>
            <option value='heart'>Heart</option>
            <option value='nature'>Nature</option>
            <option value='beach'>Beach</option>
            <option value='pattern'>Pattern</option>
          </select>
        </div>
        <div className={storyStyles}>
          <label htmlFor='story'>Write story here</label>
          {storyHasError && (
            <p className={styles.errorText}>Please enter your story</p>
          )}
          <textarea
            value={storyValue}
            onChange={storyChangeHandler}
            onBlur={storyBlurHandler}
            name='story'
            id='story'
            cols='30'
            rows='50'
            placeholder='Write story here. Use proper grammar and no run on sentences. Try to use paragraphs.'></textarea>
        </div>
        <div className={styles.btn}>
          <button disabled={!formIsValid}>Add Story</button>
        </div>
      </form>
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

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

export default index;
