import React from "react";
import axios from "axios";

class FriendInput extends React.Component {
  state = {
    name: this.props.location.state.name || "",
    age: this.props.location.state.age || "",
    email: this.props.location.state.email || "",
  };

  componentDidMount() {

  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    const { age, name, email } = this.state;
    const newFriend = { age, name, email };
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

   updateHandler = () => {
    const { age, name, email } = this.state;
    const { id } = this.props.location.state;
    const updateFriend = { age, name, email };
    axios
      .put(`http://localhost:5000/friends/${id}`, updateFriend)
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err)
      })
   };
    


  render() {
    const { updateType } = this.props.location.state;
    return (
      <div className="friend-input">
        <div>{updateType === "add" ? "Add Friend" : "Update Friend" }</div>
        <form>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name..."
            onChange={this.inputHandler}
          />
          <input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Age..."
            onChange={this.inputHandler}
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email..."
            onChange={this.inputHandler}
          />
        </form>
        <button
          onClick={
            updateType === "add" ? this.submitHandler : this.updateHandler
          }
        >
          {updateType === "add" ? "Add" : "Update" }
        </button>
      </div>
    );
  }
}

export default FriendInput;
