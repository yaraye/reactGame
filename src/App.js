import React, { Component } from 'react';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import sampleImage from './sampleImage';
import Horoscope from './Components/Horoscope';
import Row from "./Components/Row";
import Column from "./Components/Column";
import Container from './Components/Container';
import Header from './Components/Header';
import './App.css';


  
function shuffleHoroscope(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  
  // Set this.state
  state = {
    sampleImage,
    currentScore: 0,
    topScore: 0,
  message: "",
    clicked: [],
  };

  handleHoroscope = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({currentScore: newScore,
       message:"You guessed correctly!",
    });
   

    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
     
    }
    else if (newScore === 12) {
      this.setState({ message: "You win!"});
    }
  
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      message: "You guessed incorrectly!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    const shuffledHoroscope = shuffleHoroscope(sampleImage);
    this.setState({ horoscope: shuffledHoroscope });
  };


  render () {
    return (
      <div>   
        <Router>
            <div>
            <Nav score={this.state.currentScore}
                topScore={this.state.topScore}
                message={this.state.message}
                />
            </div>
          </Router>
       
  <Container>
  <Header/>
   <Row className="container"> 
   {this.state.sampleImage.map(horoscope => (
              <Column size="md-3 sm-6">
                <Horoscope
                  key={horoscope.id}
                  handleHoroscope={this.handleHoroscope}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={horoscope.id}
                  image={horoscope.image} 
                  name ={horoscope.name}
                   />
              </Column>
            ))}
          </Row>
     
  </Container>     
  
      </div>

    );
    
  }
}

export default App;


