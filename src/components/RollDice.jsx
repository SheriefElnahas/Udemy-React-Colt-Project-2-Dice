import './RollDice.css';
import React from 'react';
import Die from './Die';

class RollDice extends React.Component {
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-dices">
                < Die />
                < Die />
                </div>
    
                <button className="RollDice-btn">Roll Dice!</button>

            </div>
        )
    }
}

export default RollDice;