import './RollDice.css';
import React from 'react';
import Die from './Die';

class RollDice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstDice : 'one', secondDice: 'five', isAnimate: false}
        this.changeDieNum = this.changeDieNum.bind(this);

    }

    randomNum() {
        return [Math.floor((Math.random() * 6))];
    }

    changeDieNum() {
        const numbers = ['one','two','three','four','five','six'];
        this.setState({firstDice: numbers[this.randomNum()], secondDice: numbers[this.randomNum()], isAnimate: true})
        

        setTimeout(() => {
            this.setState({isAnimate: false});
        }, 1000)
    }


    render() {

        return (
            <div className="RollDice">
                <div className="RollDice-dices">
                < Die diceNum={this.state.firstDice} isAnimate={this.state.isAnimate} />
                < Die diceNum={this.state.secondDice} isAnimate={this.state.isAnimate} />
                </div>

                <button  onClick={this.changeDieNum}  disabled={this.state.isAnimate}
                className={`RollDice-btn ${this.state.isAnimate ? 'animate' : ''}`}>
                    {this.state.isAnimate ? 'Rolling...' : 'Roll Dice'}
                </button>

            </div>
        )
    }
}

export default RollDice;