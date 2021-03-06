import PostContent from '../../../components/posts/blog_content'
import {getPostData, getPostsFiles} from '../../../lib/posts_util'


const SingleBlogPostPage = (props) => {
    return <PostContent post={props.post} />
}

export function getStaticProps(context) {    
    const { params }  = context;
    console.log('This is params in slug page');
    console.log(params);
    const { slug } = params;
    const postData = getPostData(slug)

    return {
        props:{
            post:postData
        },
        revalidate:600
    }
}
export function getStaticPaths() {
    const postFilename = getPostsFiles()
    const slugs = postFilename.map(fileName => fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback:false
    }
}



export default SingleBlogPostPage

