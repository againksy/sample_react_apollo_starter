import React, { Component, } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'

const ALL_USERS_QUERY = gql `{
  allUsers {
    id
    name
    age
    knowledge {
      language
      frameworks
    }
  }
}`;
class Users extends Component {

  render() {
    return (
      <Query query={ALL_USERS_QUERY}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const { allUsers } = data
          return (
            <div className="users_info">
              {allUsers.map((user, index) => {
                return <Link key={index} to={`/user/${user.id}`} className="link_to_user">
                    <UserInfo user={user} />
                  </Link>
              })}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Users
