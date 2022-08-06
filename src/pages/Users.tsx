import React from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {}

const Users = (props: Props) => {
  return (
    <>
      <Link to='.' style={{'textDecoration':'none'}}>
        <button type="button" className="btn btn-dark"> ⇐ back</button>
      </Link>
      <Outlet />
    </>
  )
}

export default Users