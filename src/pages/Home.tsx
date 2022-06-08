import React, { useState, useEffect } from 'react'
import '../assets/css/styles.css'
import AdviceBox from '../components/AdviceBox'
import axios from 'axios'
import LoadingScreen from '../components/LoadingScreen'

const Home = () => {
    const [adviceId, setAdviceId] = useState(0)
    const [adviceQuote, setAdviceQuote] = useState('')
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getAdvice()
    }, [])

    function getAdvice(event = null) {
        setLoading(true)
        axios.get('https://api.adviceslip.com/advice')
            .then(response => {
                setAdviceId(response.data.slip.id)
                setAdviceQuote(response.data.slip.advice)
                setLoading(false)
            })
            .catch((error) => {
                alert("API error: " + error)
                window.location.reload()
            })
    }
  return (
    <div className="grid place-items-center h-screen transition duration-300 ease-in-out">
        {isLoading ? (
            <LoadingScreen />
        ) : (
            <AdviceBox id={adviceId} description={adviceQuote} getAdvice={getAdvice} />
        )}
    </div>
  )
}

export default Home