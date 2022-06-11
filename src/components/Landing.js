import React, { Component } from 'react'
import { User } from './User';

export class Landing extends Component {

  render() {
    return (
      <div className="profiles-container">
        <span className="title">Who's watching?</span>
        <div className="profiles">
          {this.props.users.map(user =>
            <User key={user.id} user={user} updateUser={this.props.updateUser} />)}
        </div>
      </div>
    )
  }
}

export default Landing
