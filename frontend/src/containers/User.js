import React from 'react'
import {connect} from 'react-redux'

const User = ({
  first_name,
  last_name,
  username,
  email,
  user_type,
  language

}) => {

  return (
    <div>
      <h1>User Info:</h1>
      <p><bold>First Name: </bold>{first_name}</p>
      <p><bold>Last Name: </bold>{last_name}</p>
      <p><bold>Username: </bold>{username}</p>
      <p><bold>Email: </bold>{email}</p>
      <p><bold>User Type: </bold>{user_type}</p>
      <p><bold>Language: </bold>{language}</p>
      
    </div>
  )
}

const mapStateToProps = state => ({
  first_name: state.profile.first_name,
  last_name: state.profile.last_name,
  username: state.profile.username,
  email: state.profile.email,
  user_type: state.profile.user_type,
  language: state.profile.language 
})
export default connect(mapStateToProps, null)(User)