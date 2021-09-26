import ReactMarkdown from 'react-markdown'

import PostHeader from './post_header';

import styles from './posts.module.scss'
const BlogContent = (props) => {
    const { post } = props;
    console.log('This is data in blog_content');
    console.log(post);
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    return (
      <article className={styles.content}>
        <PostHeader title={post.title} image={imagePath} />
        <div className={styles.markdown}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    );
}

export default BlogContent
