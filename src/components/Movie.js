import React, { Component } from 'react'
import addIcon from '../add-icon.svg'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Link } from 'react-router-dom';

export class Movie extends Component {

  rant = () => {
    this.props.updateRanted(this.props.movie)
  }
  setIcon = () => {
    let icon = <img src={addIcon} className='icon' alt='' onClick={this.rant} />
    if (this.props.user.rentedMovies.find(m => m.id === this.props.movie.id )) {
      icon = <DeleteRoundedIcon onClick={this.rant} className="icon" />
    }
    return icon
  }
  showDetails
  render() {
    return (
      <div className='movie'>
        <Link to={`/movies/${this.props.movie.id}`} className="link">
          <div>
            <img src={this.props.movie.img} className='movie-img' alt='' />
            <div className='movie-text'>{this.props.movie.title}</div>
          </div>
        </Link>
        {this.props.isActive ? this.setIcon() : ""}
      </div>
    )
  }
}

export default Movie