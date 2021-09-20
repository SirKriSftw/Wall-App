import React from 'react'
import axios from 'axios'
import Entry from './Entry'

class EntryLists extends React.Component {

    state = {
        entries: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/wall/')
            .then(res => {
                this.setState({
                    entries: res.data
                });
                console.log(res.data);
                console.log(this.state.entries);
            })
    }

    render() {
        return (
            <Entry data={this.state.entries}/>
        )
    }
}

export default EntryLists;