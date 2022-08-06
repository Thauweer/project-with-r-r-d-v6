import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <div>
        <Link to='/'>general</Link> - to general
      </div>
      <div>
        <Link to='/users'>users</Link> - to users
      </div>
      <div>
        <Link to='/groups'>groups</Link> - (not found)
      </div>
    </>
  )
}

export default About