import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../endpoints'
import Loader from './Loader'
import UserMini from './UserMini'

type Props = {}

const UserProfile = (props: Props) => {
const params = useParams()
const [user, setUser] = useState<any>()
const [isLoading, setloading] = useState(true)

useEffect(()=>{
  getUser(params?.id).then((data)=>{
    setUser(data[0])
    setloading(false)
  })
}, [])

  return (
    <>
      {isLoading ? <Loader/> : <UserMini id={user?.id} name={user?.name} email={user?.email}/>}
    </>    
  )
}

export default UserProfile