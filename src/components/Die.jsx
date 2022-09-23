import './Die.css';
import React from 'react';

class Die extends React.Component {
    render() {

        return (
            <div className='Die'>
                  <i className={`fas fa-dice-${this.props.diceNum}`}></i>

            </div>
        )
    }
}

export default Die;