import React, { useState } from "react";

export const Navbar = ({filter, setFiltering, count}) => {
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
      <a href="" className="navbar-brand crimson">
        <i className="fas fa-shopping-cart"></i> Mes Courses en Ligne
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search" 
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  // console.log(e.target.value.length)
                  setFiltering(e.target.value.length > 0)
                  filter(e.target.value)
                }}  
              />
            </form>
          </div>
          <div className="menu-right">
            {/* cart */}
            <i className="fas fa-shopping-bag fa-2x"></i> 
              <span className="badge badge-pill badge-success">{count}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
};

export const Card = (props) => {
  const { item, addToCart, count } = props
  // console.log(item)
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={`/assets/${item.category}/${item.image}`}
          alt={item.name}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{item.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                €{item.price}/{item.unit}
              </p>
              <button className="btn btn-warning btn-sm" data-toggle="modal" data-target={`#${item.ref}`}>view product</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <Modal item={item} count={count} addToCart={addToCart}/>
    </div>
  );
};

export const List = (props) => {
  const { data, category, addToCart, count } = props;
  console.log(data)
  return (
    <div className="col-sm">
      <div className="row">
        {data.map((item) => <Card key={item.ref} count={count} addToCart={addToCart} item={item}/>)}
      </div>
    </div>
  );
};

export const Modal = ({item, addToCart, count}) => {
  const [qty, setQty] = useState(1)
  return (
    <div
    className="modal fade "
      id={item.ref}
      data-backdrop="static"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{item.name}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src={
                    `/assets/${item.category}/${item.image}`
                  }
                  alt="Citron"
                />
              </div>

              <div className="col-sm">
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h3 className="price">€{item.price}/{item.unit}</h3> <br />
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
                    type="button"
                    className="btn btn-secondary">
                    -
                  </button>
                <span className="btn btn-light qty">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    type="button"
                    className="btn btn-secondary">
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={() => addToCart(count + 1)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};