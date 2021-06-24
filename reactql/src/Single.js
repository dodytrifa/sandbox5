import React, {useEffect,useState} from 'react'
// import axios from 'axios'


export default function Single() {
  const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => {
  //     console.log(res)
  //     setPosts(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
    
  // },[])

  const getData = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    fetch("https://randomuser.me/api")
    // fetch("https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=C&port=IDPNJ-PNJD")
    .then((response) => response.json())
    .then((json)=> {
      console.log(json)
      setPosts(json)
    })
  }

  return (
    <div>
      {/* <ul>
          {
            posts.map(post => {
             const {id, title} = post
             return (
              <li key={id}>{title}</li>
             )
            })
          }
        </ul> */}
        <button onClick={getData}>getData</button>
        <br/>
        <pre>
          {JSON.stringify(posts, null, 2)}
        </pre>
    </div>
  )
}
