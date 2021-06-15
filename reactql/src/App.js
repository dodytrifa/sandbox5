// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Single from './Single'

function App() {

  // const API =  "https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=C&port=IDPNJ-PNJD"
  
  // const [person, setPerson] = useState(null)
  
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

  
    
  
  return (
    
    <div className="App">
      <Single/>
    </div>
  );
}




export default App;
