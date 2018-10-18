import React, { Component, Fragment, } from 'react'
import gql from 'graphql-tag'
import { Query, } from 'react-apollo'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'

const USER_QUERY = gql `
  query getUser($id: Int!) {
    user(id: $id) {
      id
      name
      age
      city
      knowledge {
        language
        frameworks
      }
    }
  }
`;

class User extends Component {
  render() {
    let { match } = this.props;

    return (
      <Fragment>
        <Link to="/" className="back_link">
          <img alt="" className="back_link-image" src="/back.png"></img> Back
        </Link>
        <Query query={USER_QUERY} variables={{id: match.params.id}}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            let { user } = data
            return <UserInfo user={user} fullinfo/>
          }}
        </Query>
      </Fragment>
    )
  }
}

export default User
