import axios from 'axios';
import { useState } from 'react';
import { getSession} from 'next-auth/client'

import styles from './add_story.module.scss';

const index = (props) => {
  const [title, setTitle] = useState('');
  const [photoTheme, setPhotoTheme] = useState('abstract');
  const [story, setStory] = useState('');

  const username = props.session.user.name;

  function submitStoryHandler(event) {
    event.preventDefault();
    axios
      .post('/api/insertStory', {
        title,
        photoTheme,
        story,
        username
      })
      .then((response) => {
        console.log(response);
        setTitle('');
        setPhotoTheme('');
        setStory('');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.content}>
      <h1>Add Your Story</h1>
      <form onSubmit={submitStoryHandler}>
        <div className={styles.title}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
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
        <div className={styles.textarea}>
          <label htmlFor="story">Write story here</label>
          <textarea
            value={story}
            onChange={(event) => setStory(event.target.value)}
            name='story'
            id='story'
            cols='30'
            rows='50'
            placeholder='Write story here. Use proper grammar and no run on sentences. Try to use paragraphs.'></textarea>
        </div>
        <div className={styles.btn}>
          <button>Add Story</button>
        </div>
      </form>
    </div>
  );
};
 
export async function getServerSideProps(ctx) {
  return {
    props:{
      session: await getSession(ctx)
    }
  }
}

export default index;
