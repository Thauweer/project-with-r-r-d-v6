import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import UserMini from '../components/UserMini'
import { fetchUsers } from '../endpoints'

type Props = {}

const UsersList = (props: Props) => {
  const [users, setUsers] = useState<Array<any>>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      {isLoading ? <Loader /> :
        <div>{ }
          {users?.map((user) => {
            return <UserMini key={user?.id} name={user?.name} email={user?.email} id={user?.id} />
          })}
        </div>}
    </>
  )
}

export default UsersList