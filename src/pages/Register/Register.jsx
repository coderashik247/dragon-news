import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const { createUser, updateUser, setUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
      return;
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);

    // reset handle
    setSuccess(false);

    createUser(email, password)
      .then((result) => {
        const user = result.user
        setSuccess(true);
        updateUser({displayName:name, photoURL: photo})
        .then(() =>{
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        })
        .catch((error) =>{
          console.log(error)
          setUser(user);
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        // console.log(errorCode);
        
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
          {success && <p className="text-green-400">Register successful</p>}
          {
            error && <p className="text-red-400"> {error} </p>
          }
        </form>
      </div>
    </div>
  );
};

export default Register;
