import React, { Component } from "react";
import { Formik } from "formik";

export default class Auth extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={values.email}
                  onChange={handleChange}
                />
                <br />
                <input
                  name="password"
                  placeholder="password"
                  className="form-control"
                  value={values.password}
                  onChange={handleChange}
                />
                <br />
                <input
                  name="passwordConfirm"
                  placeholder="confirm password"
                  className="form-control"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                />
                <br />
                <button type="submit" className="btn btn-success">
                  Signup
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}
