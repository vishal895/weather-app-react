import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {


const apikey="44f2ac4c19aac0619be1e030f1629f1d"
const[inputCity,setInputCity]= useState("")
const[data,setData]=useState({})


const getWeatherDetails =(cityName) => {
  if(!cityName) return
  const apiURL ="https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid=" + apikey
  axios.get(apiURL)
  .then((res)=>{
    console.log("response",res.data)
    setData(res.data)
  }).catch((err)=>{
    console.log("err",err)
  })
}

const handleChangeInput = (e) =>{
  console.log("value",e.target.value)
  setInputCity(e.target.value)
}
const handleSearch =() =>{
  getWeatherDetails(inputCity)
}



useEffect(()=>{
  getWeatherDetails("delhi")
},[])



  return (
    <div className="col-md-12">
      <div className="weatherbg">
        <h1 className="heading">weather app</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control" value={inputCity} onChange={handleChangeInput}/>

          <button className="btn btn-primary" type="button" onClick={handleSearch}>search</button>
        </div>
      </div>

      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherresultbox">
          <img className="weathericon" src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png" />
          <h5 className="weathercity">{data?.name}</h5>
          <h6 className="weathertemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
        </div>
      </div>
    </div>
    
  );
}

export default App;
