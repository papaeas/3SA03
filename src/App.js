import React from 'react';
import Event from './Event';
import Check from './Check';
import './App.css';
import Start from './Start'
import _ from 'lodash';
import profile from './leopard.jpg'

const message = 'LEOPARD'
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    counter: 1,
    guess: [],
    completed: false,
    check: 0
  }
}

class App extends React.Component {
  state = {
    show: false,
    give_up: false
  }

  state = prepareStateFromWord(message);
  click = (value) => {
    let guess = [...this.state.guess, value]
    this.setState({ guess })
    if (guess.length === this.state.chars.length) {
      if (guess.join('').toString() === this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], counter: this.state.counter + 1 })
      }
    }
  }

  show_name = () => {
    this.setState({
      show: !this.state.show
    })
    console.log(this.state.show) // check
  }
  reset = () => {
    this.setState({ check: this.state.check + 1, completed: false })
  }
  give_ups = () => {
    this.setState({
      give_up: !this.state.give_up
    })
  }

  render() {
    let check = this.state.completed === false ? '' : <button className="poppp" onClick={this.reset}><h1> _ Play Again _</h1></button>;
    let ans = this.state.completed === false ? '' : <h3> </h3>;
    let checks = this.state.completed === false ? '' : <h1 className="gooss">. . WINNER . .</h1>;
    //let count_end = this.state.counter > 3 ? "Game Over" : "Counter : " + this.state.counter;

    return (
      <div className="pim">
     
        <div className="first">
          <div className="second">
          <h1 className="pae">{this.state.show === true ? '6035512004' : 'Can you tell me?'}</h1>
          <div className="playCard"><img className="animal" src={profile}></img></div>
            <div className="center-box">
              <div className="center-text">
                <div className="activeCard"><h1 className="text">Lab : 3SA03 " React Web Application "</h1></div>
                <div className="click">
                  <div className="button-a">
                  </div>
                  <div className="box-myname">
                    <div></div>
                    <h3 className="pim">{this.state.show === true ? '6035512004' : 'Make By : Phimwadi Kanjanopas'}</h3>
                    <h3 className="pim">{this.state.show === true ? '6035512004' : 'No : 6035512004'}</h3>
                    <h1 className="pae">{this.state.show === true ? '6035512004' : 'Please spell it *0*'}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {
                Array.from(this.state.chars).map((x, y) => (
                  <Event
                    value={x}
                    key={y}
                    click={this.click}
                    number={this.state.counter}
                    check={this.state.check}
                  />
                ))
              }
              <div className="pim">
                <h1 className="pim">You can play 3 round</h1>
                {
                  Array.from(this.state.guess).map((x, y) => (
                    <Event
                      value={x}
                      key={y}
                      click={this.click}
                    />
                  ))
                }
                <div>

                  <Check check_count={this.state.counter} />
                </div>
                <div className="exam">
                  {check}
                  {ans}
                  {checks}
                </div>
              </div>
            </div>
            <div className="exam">
              <button className="exam" onClick={this.give_ups}> -> HINT</button>
              <h3>{this.state.give_up === true ? '  :   Wild animals ' : ''}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;