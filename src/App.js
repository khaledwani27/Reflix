import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Header from './components/Header';
import Landing from './components/Landing';
import { Catalog } from './components/Catalog ';
import MovieDetail from './components/MovieDetail';
import hisoka from '../src/imgs/hisoka-1.jpg'
import killua from '../src/imgs/killua-2.jpg'
import madara from '../src/imgs/madara.jpg'
import sasuke from '../src/imgs/sasuke.jpg'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      activeUser: 0,
      users: [
      { id: 1, name: "Killua", budget: 1000, rentedMovies: [] ,img:killua},
      { id: 2, name: "Hisoka", budget: 1000, rentedMovies: [] ,img: hisoka},
      { id: 3, name: "Sasuke", budget: 1000, rentedMovies: [] ,img:sasuke},
      { id: 4, name: "Madara", budget: 1000, rentedMovies: [] ,img: madara},
      ],
      movies: [
        { id: 1, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 2, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 3, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 4, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 5, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      rentingPrice: 300,

    }
  }

  updateActiveUser = (id) => {
    this.setState({ activeUser: id })
  }

  updateRanted = (movie, user) => {
    let users = [...this.state.users]
    let newUser = users.find(u => u.id === user.id)

    let rented = [...user.rentedMovies]

    if (!rented.find(m => m.id === movie.id)) {
      if (user.budget - this.state.rentingPrice > 0) {
        rented.push(movie)
        newUser.budget -= this.state.rentingPrice
      }
    } else {
      rented = rented.filter(m => m.id !== movie.id)
      newUser.budget += this.state.rentingPrice
    }
    newUser.rentedMovies = rented
    this.setState({ users: users, rentedMovies: rented })
  }


  render() {
    return (
      <Router>
        <Header updateActiveUser={this.updateActiveUser} />
        <Routes>
          <Route path="/" element={<Landing updateUser={this.updateActiveUser} users={this.state.users} />} />
          <Route path="/catalog" element={<Catalog users={this.state.users}
            rent={this.updateRanted}
            isActive={this.state.activeUser}
            movies={this.state.movies}
          />} />
          <Route path='/movies/:id' element={<MovieDetail movies={this.state.movies} />} />
        </Routes>
      </Router>

    )
  }
}

export default App
