import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../styles/App.css";

export const Checkout = () => {
    const [isValid, setValid] = useState(false);
    const validate = () => {
      let errors = []
      const inputs = document.querySelectorAll('.form-control')
      inputs.forEach(input => {
        console.log()
        !input.value ? errors.push(input) : errors.length && errors.pop()
      })
      console.log(errors)
      setValid(!errors.length)
    }

    useEffect(() => {
      validate()
    })

    return (
      <Fragment>
        <div className="col-sm-6 offset-3">
          <h2>Checkout</h2>
          <br />
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  property=""
                  defaultValue="" />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  property=""
                  defaultValue=""/>
              </div>
            </div>
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email address"
                property=""
                defaultValue=""/>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Address"
                property=""
                defaultValue="" />
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  property=""
                  defaultValue="" />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  property=""
                  defaultValue="" />
              </div>
            </div>
            <br />
              <a href="#" className={`${!isValid && 'disabled'} white btn btn-light btn-lg btn-block checkout bg-crimson`}>
                Confirm
              </a>
          </form>
        </div>
      </Fragment>
    );
}