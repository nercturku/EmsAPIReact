import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'


const Devices = () => {
  const [devices, setDevices] = useState([])
  const [deviceName, setName] = useState('')
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/devices/get/`)
    .then(response => response.json())
    .then(json => {
      setDevices(json)
      setIsPending(false)
    })
    }, [deviceName])
  
  return (
    <Layout>
      {isPending}
          <div className='grid gid-cols-2 gap-3 lg:grid-cols-4'>
            {devices.map((item) => {
                return (
                <Card key={item.id} device = {item}/>
                )
            })}
              
          </div>
      
    </Layout>
  )
}

export default Devices;