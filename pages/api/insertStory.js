//Unsplash API 
//gQNMKADGFAB5UC9PMFU1fDsRZnLcqzNlnH_b7ywyLAM access key
//8tPX7t5A7-LLOJ9N7NLg_I7N27gjqG8CbV9I0Iwfvw0 secret key
import {createApi} from 'unsplash-js'


const unsplash = createApi({
  accessKey: 'gQNMKADGFAB5UC9PMFU1fDsRZnLcqzNlnH_b7ywyLAM',
});

async function handler(req,res) {
    const date = new Date()
    const formattedDate = date.toLocaleDateString('en-US')

 if(req.method === 'POST') {
    let response = req.body;
    const photoTheme = req.body.photoTheme

    response.date = formattedDate
    // console.log(response);

   const photo = await unsplash.photos.getRandom({query:photoTheme,orientation:'landscape'}).then(result =>{
        let obj = {}
        if(result.errors) {
            console.log(`error occurred`, result.errors[0])
        }
        const description = result.response.description
        const photo = result.response.urls.regular
        obj.description = description
        obj.link = photo
        
        return obj;
    })

    response.picture = photo
    console.log(response)



     res.status(201).json({message:'Successfully recieved story'})
 }
}

export default handler