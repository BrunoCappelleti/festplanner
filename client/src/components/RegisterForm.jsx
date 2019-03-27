import React from 'react';

const RegisterForm = (props) => {
  return(
    <div>
      <h1>Create new account</h1>

       <form onSubmit={props.onSubmit}>

        <div>
        <label>First Name</label>
        <input
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="first_name"
        name="user_first_name"
        value={props.first_name} />
        </div>

        <div>
        <label>Last Name</label>
        <input
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="last_name"
        name="user_last_name"
        value={props.last_name} />
        </div>

        <div>
        <label>Email</label>
        <input
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="email"
        name="user_email"
        value={props.email} />
        </div>

        <div>
        <label>Password</label>
        <input
        autoComplete="off"
        type="password"
        onChange={props.handleChange}
        id="password"
        name="password"
        value={props.password} />
        </div>

        <button
        onClick={props.handleSubmit}
        type="submit">
        Sign Up
        </button>

       </form>
    </div>
  )
};

export default RegisterForm;
