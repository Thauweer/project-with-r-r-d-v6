import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/user.css'

type Props = {
  id: number
  name: string
  email: string
}

const UserMini = (props: Props) => {
  return (
    <div className='user-card'>
      <div>
        id:{props.id}
      </div>
      <div>
        <Link to={`${props.id}`} className='link-info'>
          {props.name}
        </Link>
        <div className='user-email'>
          {props.email}
        </div>
      </div>

    </div>
  )
}

export default UserMini