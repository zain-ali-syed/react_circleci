import React, { Component } from 'react';

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => ({ users })));
  }

  render() {
    const { users } = this.state;

    if (users.length === 0) return <div data-testid="loading">Loading..</div>;
    return (
      <div>
        <h3 data-testid="title">Users List</h3>
        {users.map(user => (
          <div key={user.email}>
            <div data-testid="first_name">{user.name}</div>
            <div data-testid="email">{user.email}</div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
