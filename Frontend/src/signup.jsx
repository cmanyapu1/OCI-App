import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Alert from "../common/Alert";
import InternalApi from "../api";


function SignupForm({ signup }) {
    const history = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);
  
    console.debug(
        "SignupForm",
        "signup=", typeof signup,
          "formData=", formData,
        "formErrors", formErrors,
    );
  
    /** Handle form submit:
     *
     * Calls login func prop and, if successful, redirect to /companies.
     */
  
    async function handleSubmit(evt) {
      evt.preventDefault();
      console.log('inside login component\'s handleSubmit')
      let result = await signup(formData); //what is signup here
      if (result.success) {
        console.log('before redirection');
        history("/");
        console.log('this should not show up')
      } else {
        setFormErrors(result.errors);
      }
    }
  
    /** Update form data field */
    function handleChange(evt) {
      const { name, value } = evt.target;
      setFormData(l => ({ ...l, [name]: value }));
    }
  
    return (
        <div className="SignupForm">
          <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h3 className="mb-3">Sign Up</h3>
  
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                  <label>username</label>
                    <input
                        type='text'
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="username"
                        required
                    />
                    <label>email</label>
                    <input
                        type='email'
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="username"
                        required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                    />
                  </div>
                 
                  {formErrors.length
                      ? <div type="danger" messages={formErrors} />
                      : null}
  
                  <button
                      className="btn btn-primary float-right"
                      onSubmit={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
  
  export default SignupForm;
