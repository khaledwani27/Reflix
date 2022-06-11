import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class User extends Component {
  updateUser = () => {
    this.props.updateUser(this.props.user.id)
  }
  render() {
    return (
      <div onClick={this.updateUser} className="profile">
        <Link to={`/catalog`} className='link'>
           <img className="image" src={this.props.user.img} alt='' />
          <div>
            <span className="username">{this.props.user.name}</span>
          </div>
        </Link>
      </div>
    )
  }
}

export default User

