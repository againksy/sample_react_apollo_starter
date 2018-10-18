import React, { Component, Fragment, } from 'react'
import gql from 'graphql-tag'
import { Mutation, } from 'react-apollo'

export const UPDATE_USER_CITY = gql`
  mutation user($userID: ID!, $city: String!) {
    updateUserCity(userID: $userID, city: $city) {
      id
      city
    }
  }
`

class UserCity extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: props.user.city,
    }
  }
  render(){
    let { edit, user, showEdit, fullinfo,} = this.props
    if(!fullinfo) return null;
    if(!edit){
      return <span className="user_city">{user.city}</span>
    }
    let { city, } = this.state;
    return(<Fragment>
        <Mutation
          mutation={UPDATE_USER_CITY}
          variables={{ city, userID: user.id }}
          onCompleted={showEdit}
        >{postMutation => {
          return <form className="" onSubmit={e=>{
              e.preventDefault();
              postMutation({ variables: { $userID: user.id, city } });
            }}>
            <span>Country: </span>
            <input
              className="user_city-edit_input"
              value={city || ''}
              onChange={e => this.setState({ city: e.target.value })}
              type="text"
              placeholder=""
            />
            <button className="user_city-submit" type="submit">Submit</button>
          </form>}}
        </Mutation>
      </Fragment>
    )
  }
}

export default UserCity
