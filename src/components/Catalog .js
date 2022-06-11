import React, { useState } from 'react'
import Search from './Search';
import { Movie } from './Movie';

export function Catalog(props) {

    const [searchInput, setInput] = useState("")

    const handleSearch = (input) => {
        setInput(input)
    }

    const updateRanted = (movie) => {
        props.rent(movie, user)
    }

    const user = props.users.find(u => u.id === props.isActive)
    const searchResult = searchInput.trim() === "" ? props.movies :
        props.movies.filter(m => m.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))

    return (
        <div>
            <Search searchInput={searchInput} handleSearch={handleSearch} />
            <div>
                {props.isActive ?
                    <div>
                        <div id='main-user'>
                            <span className='user'>
                                user: {user.name}
                            </span>
                            <span className='user'>
                                budget: {user.budget}
                            </span>
                        </div>
                        <div>
                            {user.rentedMovies.length > 0 ?
                                <div>
                                    <div className='text'>Rented Movies:</div>
                                    <div className='movies'>
                                        {user.rentedMovies.map(movie =>
                                            <Movie key={movie.id} movie={movie}
                                                isActive={props.isActive}
                                                user={user}
                                                updateRanted={updateRanted} />)}
                                    </div>
                                </div>
                                : ""
                            }
                        </div>
                    </div>
                    :
                    <span className='user'>
                        User: guest
                    </span>
                }
            </div>
            <div className='text'>Catalog:</div>
            <div className='movies'>
                {searchResult.map(movie =>
                    <Movie key={movie.id} movie={movie}
                        isActive={props.isActive}
                        user={user}
                        updateRanted={updateRanted}
                    />)}
            </div>
        </div >
    )

}

export default Catalog

