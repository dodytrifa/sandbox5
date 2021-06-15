// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
// import axios from 'axios'

function App() {

  // const API =  "https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=C&port=IDPNJ-PNJD"
  
  const [data, setData] = useState([])

  // async function fetchData() {
  //   const response = await fetch(API)
  //   console.log(response);
  //   setData(await response.json())
  // }
  
  useEffect(() => {
    // fetchData()

    fetch("https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=C&port=IDPNJ-PNJD") 
      .then(response => response.json())
      
    }, [])
    
    console.log(response);
  if(!data) {
    
    return 'LOADING...'
  }
  
  return (
    
    <div className="App">
      <div>

      </div>
    </div>
  );
}




export default App;
