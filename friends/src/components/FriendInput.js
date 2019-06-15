import React from "react";
import axios from "axios";

class FriendInput extends React.Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  submitHandler = () => {
      const { age, name, email } = this.state
      const newFriend = { age, name, email };
      axios.post("http://localhost:5000/friends", newFriend)
        .then( res => {
            this.props.history.push('/');
        })
        .catch(err => {
            console.log(err);
        });
  };

  render() {
    return (
      <div className="friend-input">
        <div>Add Friend</div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={this.inputHandler}
          />
          <input
            type="number"
            name="age"
            placeholder="Age..."
            onChange={this.inputHandler}
          />
          <input
            type="text"
            name="email"
            placeholder="Email..."
            onChange={this.inputHandler}
          />
        </form>
        <button onClick={this.submitHandler}>Add</button>
      </div>
    );
  }
}

export default FriendInput;
