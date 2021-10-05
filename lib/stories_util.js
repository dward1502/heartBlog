import axios from 'axios'

export async function getAllStories() {

   const stories = axios.get('/api/stories').then(response => {
    console.log(response)
    return response
    }).catch(error => {
        console.log(error)
    })
    return stories
}

