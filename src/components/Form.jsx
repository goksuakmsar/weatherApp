import React, { useState } from 'react'
import axios from 'axios';
import { WiSunset } from "react-icons/wi";
import './Form.css'

function Form() {
  const [info, setInfo] = useState([])
  const [state, setState] = useState(false)
  const [city, setCity] = useState('')

  const handleChange = async () => {
    const api = "85ea982faa671d437527c6897cfa7a46"
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr `
    await axios(baseURL).then(res => setInfo(res.data))
    setState(true)
  }

  return (
    <div className='container'>
      <h1>Hava Durumu</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleChange() }}>
        <div className="form">
          <input onChange={(e) => setCity(e.target.value)} className='inputText' type="text" placeholder='Şehrinizi Giriniz' />
          <button type='submit' className="btn">Verileri Getir</button>
        </div>
      </form>

      {
        state ? <div className='info'>
          <p id='city'>{info.name}, {info.sys.country} </p>
          <div className="value">
            <p className='degree'>{info.main.temp}<WiSunset /></p>
            <p className='weather'>{info.weather[0].description} </p>
          </div>

          <div className="feelsLike">
            <p>Hissedilen</p>
            <p id='felt'>{info.main.feels_like}<WiSunset /></p>
          </div>
        </div> : null
      }
    </div>
  )
}

export default Form