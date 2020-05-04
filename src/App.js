import React, { Component } from 'react';
import Character from './Character/Character'
import Films from './Films/Films'
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      loading: false,
      characters: [],
      character: {},
      characterImg: '',
      species: '',
      planet: '',
      filmsURL : [],
      films: [],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    
  }

  componentDidMount() {
    
    this.setState({
      loading: true
    })

    let randomNum = Math.floor(Math.random() * 82) +1;
    if(randomNum==17) randomNum = 1;

    fetch('https://swapi.dev/api/people/'+randomNum)
        .then(response => response.json())
        .then(data => {
            
            this.setState({
                character: data,
                planet: data.homeworld,
                filmsURL: data.films,
                // img: '../imgs/characters/'+randomNum+'.jpg',
                characterImg: require('./imgs/characters/'+randomNum+'.jpg'),
            })
            
            
            let planet = this.state.planet
            fetch(planet)
              .then(response => response.json())
              .then(data => {
                this.setState({
                  planet: data
                })
              })

            let [species] = this.state.character.species
            if(species){
              fetch(species)
                .then(response => response.json())
                .then(data => {
                  this.setState({species: data.name})
                })
            }

            let filmsURL = [...this.state.filmsURL]
            let arrFilms = []
            filmsURL.map(film => {
              fetch(film)
              .then(response => response.json())
              .then(data => {

                let [id] = data.url.match(/([0-9])+/g)
                let imgPath = require('./imgs/films/' + id + '.jpg')
                arrFilms.push({title: data.title, imgPath: imgPath})
                
                this.setState({
                  loading: false,
                  films: [...arrFilms],
                })
              }) 
            })

            
        })
  }
  

  render(){

    const text = this.state.loading ? "loading..." : null

    return (
      <div className="App">
        <header>
          <div className="logo"></div>
        <h1>Discover the Star Wars characters randomly</h1>
        </header>
        
        <Character 
                  characterImg={this.state.characterImg}
                  loading={this.state.loading} 
                  character={this.state.character} 
                  species={this.state.species} 
                  planet={this.state.planet} 
                  films={this.state.films}
        />
        <Films films={this.state.films}/>
        <button onClick={this.componentDidMount}>random</button>
        <p className="loading">{text}</p>
      </div>
    );
  }
}

export default App;
