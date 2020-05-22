import React from 'react';
import './App.css';
import ListItem from './ListItem';

class App extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            text: '',
            tasks: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addListItem = this.addListItem.bind(this);
        this.addListItemEnter = this.addListItemEnter.bind(this);
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    addListItem() {
        if (this.state.text) {
            this.setState({
                text: '',
                tasks: [...this.state.tasks, this.state.text]
            })
        }
    }
    addListItemEnter(e) {
        if (e.key === "Enter") {
            if (this.state.text) {
                this.setState({
                    text: '',
                    tasks: [...this.state.tasks, this.state.text]
                })
            }
        }
    }
    render() {
        let task = this.state.tasks;

        return (
            <div className="todo">
                <div className="wrap">
                    <input className="inp-val"
                        placeholder="enter task"
                        onChange={this.handleChange}
                        onKeyPress={this.addListItemEnter}
                        value={this.state.text} />
                    <button className="button" onClick={this.addListItem} >Add</button>
                </div>
                 <div className="list">
                    {task.length > 0 ? task.map((item, index) => <ListItem key={index} text={item} />) : null}
                </div>

            </div>
        );
    }
}

export default App;
