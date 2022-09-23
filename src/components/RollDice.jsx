import './RollDice.css';
import React from 'react';
import Die from './Die';

class RollDice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstDice : 'one', secondDice: 'five'}
        this.changeDieNum = this.changeDieNum.bind(this);
    }

    changeDieNum() {
        const numbers = ['one','two','three','four','five','six'];
        this.setState({firstDice: numbers[Math.floor((Math.random() * 6))], secondDice: numbers[Math.floor((Math.random() * 6))]})

    }
    render() {

        return (
            <div className="RollDice">
                <div className="RollDice-dices">
                < Die diceNum={this.state.firstDice} />
                < Die diceNum={this.state.secondDice} />

                </div>
    
                <button onClick={this.changeDieNum} className="RollDice-btn">Roll Dice!</button>

            </div>
        )
    }
}

export default RollDice;