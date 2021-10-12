import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(),'posts')

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory)
}

 export function getPostData(postIdentifier) {
     const postSlug = postIdentifier.replace(/\.md$/, '') //removes file extension
     const filePath = path.join(postsDirectory, `${postSlug}.md`)
     const fileContent = fs.readFileSync(filePath, 'utf-8')
     const {data,content} = matter(fileContent)

    const postData = {
        slug:postSlug,
        ...data,
        content:content
    }
    return postData;
 }

 // BLOG post requests
 export function getAllPosts() {
     const postFiles = getPostsFiles()
     const allPosts = postFiles.map((postFile) => {
         return getPostData(postFile)
     })

     const sortedPosts = allPosts.sort( function compare(a,b){
         let dateA = new Date(a.date)
         let dateB = new Date(b.date)
         return dateB-dateA
     })
     return sortedPosts;
 }
 export function get5RecentPosts() {
     const allPosts = getAllPosts()
    const recent5Posts = allPosts.slice(0,5)
    return recent5Posts;
 }

export function getTopPost() {
    const top5Posts = get5RecentPosts()
    const topPost = top5Posts.slice(0,1)
    return topPost
}

export function getRecentPosts2to4() {
    const top5Posts = get5RecentPosts()
    const posts = top5Posts.slice(1)
    return posts
}
export function getTop2Posts() {
    const top5Posts = get5RecentPosts()
    const posts = top5Posts.slice(0,2)
    return posts
}

export function getAllPostsExceptFirst2() {
    const allPosts = getAllPosts()
    const posts = allPosts.slice(2)
    return posts
}

