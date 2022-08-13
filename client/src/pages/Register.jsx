import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please Create An Account</p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              className="form-control"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your Email"
              className="form-control"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              className="form-control"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm Password"
              className="form-control"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block" y>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
