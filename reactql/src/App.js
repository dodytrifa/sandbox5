// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  // const API =  "https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=C&port=IDPNJ-PNJD"
  
  // const [person, setPerson] = useState(null)
  const [posts, setPosts] = useState([])

  // async function fetchData() {
  //   const response = await fetch(API)
  //   console.log(response);
  //   setData(await response.json())
  // }
  
  // useEffect( async () => {
  //   const response = await fetch("https://api.randomuser.me/")
  //   const data = await response.json()
  //   const [item] = data.results
  //   setPerson(item)
  //   }, [])

  useEffect(() => {
    axios.get("https://api.randomuser.me/")
    .then(res => {
      console.log(res)
      setPosts(res.data);
    })
    .catch(err => {
      console.log(err);
    })
    
  },[])
    
  
  return (
    
    <div className="App">
      <div>
        <ul>
          {
            posts.map(post => <li key={post.id}>{post.title}</li>)
          }
        </ul>
      </div>
    </div>
  );
}




export default App;
