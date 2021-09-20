import React from 'react'

class Entry extends React.Component {
    renderItems = () => {
        const entries = this.props.data
        console.log(this.props.data.message);
        return entries.reverse().map(entry => (
        <li key={entry.id}>
        <div className="entry">{entry.message}</div>
        </li>
        
    ))
    }
    render() {
        return (            
            this.renderItems()
        )
    }
}

export default Entry;