import React from 'react';
import axios from 'axios';

const LoginForm = () => {
  
  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    // store the states in the form data
    let formdata = new FormData()
    formdata.append('email', formValue.email)
    formdata.append('username', formValue.email)
    formdata.append('secret', formValue.password)

    try {
      // make axios post request
      axios.post(
        'https://api.chatengine.io/users/',
        formdata,
        { headers: { "private-key": "015c9875-80f1-4d12-91a1-66388f883692" }}
      )
      .then(console.log(formdata))
      .catch(e => console.log('e', e.response))
    } catch(error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Login Form</p>
      <input
        type="email"
        name="email"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="enter a password"
        value={formValue.password}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Login
      </button>
    </form>
  )
};

export default LoginForm;