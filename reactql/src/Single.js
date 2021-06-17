import React, {useEffect,useState} from 'react'
import axios from 'axios'


export default function Single() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
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
      <ul>
          {
            posts.map(post => {
             const {id, title} = post
             return (
              <li key={id}>{title}</li>
             )
            })
          }
        </ul>
    </div>
  )
}
