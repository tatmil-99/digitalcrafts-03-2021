import React from 'react'

export default function UserDetails(props) {
  return (
    <div>
      <h1>User Details</h1>
      <p>{props.firstName}</p>
    </div>
  )
}
