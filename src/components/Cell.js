import React from 'react';

class Cell extends React.Component {
    assignCell = (event) => {
        if (!event.currentTarget.classList.contains('empty')) return
       
        this.props.updateCell(this.props.id)
    }
    render() {
        const cellClass=this.props.cellValue==='empty'? 'empty': this.props.cellValue==='Player 1'?'p1':'p2';
        const gameover=this.props.gameOver !=='' && !this.props.winningCells.includes(this.props.id)?'game-over':'';
        return <li className={`cell ${cellClass} ${gameover}`} onClick={this.props.gameOver !== ''? undefined: cellClass==='empty'? this.assignCell: undefined} />
    }
};

export default Cell;