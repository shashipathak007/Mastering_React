import React, { useEffect, useState } from 'react'

const User = () => {
    const [user, setUser]= useState([])
    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then (data => setUser(data));
    }, []);

  return (
     <div>
      <h2>User List</h2>
      {user.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default User