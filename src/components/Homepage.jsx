import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Homepage = () => {

    const navigate = useNavigate()
  return (
    <>
    <h2> Jolly Tours and Travels </h2>
    <h6> Erode</h6>
    <ul>
        <li style={{marginBottom : "10px"}}>  <Button type='primary' onClick={() => navigate('/wonderla') }> Wonderla Enquiry </Button>   </li>
        <li style={{marginBottom : "10px"}}>  <Button type='primary' onClick={() => navigate('/silverstorm') }> Silver Storm Enquiry </Button>  </li>
        <li style={{marginBottom : "10px"}}>  <Button type='primary' onClick={() => navigate('/bus') }> Bus Enquiry </Button>        </li>
        <li style={{marginBottom : "10px"}}>  <Button type='primary' onClick={() => navigate('/tour') }> Tour Enquiry </Button></li>
    </ul>
    
    </>
    

  )
}

export default Homepage