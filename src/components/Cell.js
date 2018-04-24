import React from 'react';

class Cell extends React.Component {
    assignCell = (event) => {
        if (!event.currentTarget.classList.contains('empty')) return
       
        this.props.updateCell(this.props.id)
    }
    render() {
        const cellClass=this.props.cellValue==='empty'? 'empty': this.props.cellValue==='Player-1'?'p1':'p2';
        return <li className={`cell ${cellClass}`} onClick={cellClass==='empty'? this.assignCell: undefined} />;
    }
}

export default Cell