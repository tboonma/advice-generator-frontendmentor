import React, { useState, useEffect } from 'react'
import '../assets/css/styles.css'
import AdviceBox from '../components/AdviceBox'
import axios from 'axios'

const Home = () => {
    const [adviceId, setAdviceId] = useState(0)
    const [adviceQuote, setAdviceQuote] = useState('')

    useEffect(() => {
        getAdvice()
    }, [])

    function getAdvice() {
        axios.get('https://api.adviceslip.com/advice')
            .then(response => {
                setAdviceId(response.data.slip.id)
                setAdviceQuote(response.data.slip.advice)
            })
            .catch((error) => {
                alert("API error: " + error)
                window.location.reload()
            })
    }
  return (
    <div className="grid place-items-center h-screen">
        <AdviceBox id={adviceId} description={adviceQuote} />
    </div>
  )
}

export default Home