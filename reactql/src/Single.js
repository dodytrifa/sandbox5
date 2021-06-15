import React, {useEffect,useState} from 'react'
import axios from 'axios'


export default function Single() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    // axios.get("https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=C&port=IDPNJ-PNJD")
    .then(res => {
      console.log(res)
      setPosts(res.data);
    })
    .catch(err => {
      console.log(err);
    })
    
  },[])

  return (
    <div>
      {posts}
      <ul>
          {
            posts.map(post => <li key={post.id}>{post.vessel_id}</li>)
          }
        </ul>
    </div>
  )
}
