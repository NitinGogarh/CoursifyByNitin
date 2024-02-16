import React, { useState, useEffect } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import RegisterHandle from "../store/Thunks/RegisterHandle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { emptyState } from "../store/Slices/RegisterSlice";
const SignIn = () => {

  //Dispatching Reducer
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Fetching from store
  const { user, msg, loading } = useSelector((state) => state.RegisterSlice);

  //useState Hook  for storing formData
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //setting the input data in states
  const updateForm = (e) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };
  //onSubmit function for submitting the data
  const submitRegister = (e) => {

    dispatch(RegisterHandle(registerForm));
    e.preventDefault();
  };

  //Navigating to Login route after successfull registration
  useEffect(() => {
    function delayed() {
      dispatch(emptyState())
      if (user) navigate("/login");
    }
    const timeoutId = setTimeout(delayed, 500);
    return () => clearTimeout(timeoutId);
  }, [user, msg]);
    
   //Destructuring of  form password
  const { password, confirmPassword } = registerForm;
  return (
    // popup for validating Registration
    <div className="Container">
      {user ? (
        <div className="alert alert-success founded" role="alert">
          {msg}
        </div>
      ) : null}
      {!user && !loading ? (
        <div className="alert alert-danger founded" role="alert">
          {msg}
        </div>
      ) : null}
        
        {/* displaying our form Container */}

      <div className="formContainer">
        <form action="" onSubmit={submitRegister}>
          <h1>Register</h1>
          <input
            type="text"
            name="name"
            placeholder="Fullname"
            onChange={updateForm}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateForm}
            className="input"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={updateForm}
            className="input"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={updateForm}
            style={{ color: password !== confirmPassword ? "red" : "initial" }}
            className="input"
          />

          {/* validating both confirm password and password are same or not */}
          <button
            type="submit"
            disabled={!password.length || password !== confirmPassword}
            style={{
              opacity:
                !password.length || password !== confirmPassword
                  ? "50%"
                  : "initial",
            }}
            className="button"
          >
            Sign up
          </button>
          <Link to={"/login"} className="link">
            Already have a Account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
