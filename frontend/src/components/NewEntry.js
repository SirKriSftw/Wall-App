import React from 'react'
import axios from 'axios';

class NewEntry extends React.Component {

    state = {
        message: ""
    };

    handleChange = e => {
        this.setState({message: e.target.value});
        console.log(this.state);
    }

    onPost = e => {

        const entry = {
            message: this.state.message
        }

        if (entry.id) {
            axios
              .put(`http://localhost:8000/api/wall/${entry.id}/`, entry)
            return;  
          }
          axios
            .post("http://localhost:8000/api/wall/", entry).then(res => {
                console.log(res);
                console.log(res.data);
              })

        console.log("POSTING")
        console.log(entry)

        }

    render() {
        return (            
            <div className="entry_box">
        <form>
            <label for="message">Make a new wall entry</label>
            <textarea rows='5' cols='60' name='text'  onChange={this.handleChange}/>
          <button className="post" onClick={this.onPost}>Post</button>
        </form>
        
      </div>
        )
    }
}

export default NewEntry;