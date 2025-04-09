import React, { useEffect } from 'react'
import { useState } from 'react'

function ProgressBar({time}) {
  const [progress, setProgress] = useState(time);

  useEffect(()=>{
    const timer = setInterval(()=>{
        setProgress((prevState)=>
            {
                 prevState -10
        })
    }, 10)

    return()=>{
        clearInterval(timer)
    }
  }, [])

  return (
    <progress value={progress} max={time}/>
  )
}

export default ProgressBar