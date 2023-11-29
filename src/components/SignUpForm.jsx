import React from "react";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be less than 15 chars";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be less than 15 chars";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 special character, and be at least 8 characters long";
  }

  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });
  return (
    <div className="LogIn-form-container">
      <h1>Register</h1>
      <p>Please fill in the following fields to create an account.</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.firstName ? (
          <div style={{ color: "red" }}>{formik.errors.firstName}</div>
        ) : null}
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.lastName ? (
          <div style={{ color: "red" }}>{formik.errors.lastName}</div>
        ) : null}
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email} </div>
        ) : null}
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.password ? (
          <div className="pass-error" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <br />
        <Link to={"/"}>
          <button type="submit">Sign Up</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
