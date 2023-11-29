import React from "react";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";

const validate = (values) => {
  const errors = {};

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

const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="LogIn-form-container">
      <h1>Log In</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.password ? (
          <div className="pass-error">{formik.errors.password}</div>
        ) : null}
        <br />
        <Link to={"/ "}>
          <button type="submit">Submit</button>
        </Link>
        <br />
        <button
          style={{
            color: "black",
            marginTop: "10px",
          }}
        >
          <Link to={"/signUp"}>Register Here!</Link>
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
