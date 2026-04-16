import { Suspense } from 'react'
import './App.css'
import Countries from './Countries/Countries'

const fetchCountries=fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())


function App() {


  

  return (
    <>
    <h1>Hello World!</h1>
    <Suspense fallback={'Loading...'}>
      <Countries fetchCountries={fetchCountries}></Countries>
    </Suspense>
      

      
    </>
  )
}

export default App
