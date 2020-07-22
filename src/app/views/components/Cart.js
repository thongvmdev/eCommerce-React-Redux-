import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { updateCart, removeFromCart } from '../../lib/actions'
import "../../styles/App.css";

const Row = (props) => {
  const { quantity, details } = props.item
  const item = details
  const [ qty, setQty ] = useState(quantity);
  const dispatch = useDispatch()
  const update = (item, quantity) => {
    dispatch(updateCart(item, quantity))
  }

  const remove = (item) => {
    dispatch(removeFromCart(item))
  }
  
  
    return (
      <tr>
        <td>
          <img
            width="70"
            height="70"
            src={`/assets/${item.category}/${item.image}`}
            alt={item.name}  
          />
        </td>
        <td>{item.ref}</td>
        <td>€{item.price}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                if (qty > 1) {
                  setQty(qty => qty - 1)
                  update(props.item, qty)
                }
              }}  
            >
              -
            </button>
              <span className="btn btn-light">{qty}</span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setQty(qty + 1)
                update(props.item, qty)
              }}
            >
              +
            </button>
          </div>
        </td>
          <td>€{ (quantity * item.price).toFixed(2) }</td>
        <td>
          <button
            type="button"
            className="btn btn-danger remove"
            onClick={() => { remove(props.item) }}
          >
            X
          </button>
        </td>
      </tr>
    );
}

const Table = () => {
  const items = useSelector(state => state.items);
  useEffect(() => {
    // console.log(`You have ${items.length} in your cart`)
  })
    return (
      <table>
        <tr>
          <th width="200">Product</th>
          <th width="80">Reference</th>
          <th width="150">Price</th>
          <th width="150">Quantity</th>
          <th width="200">Total</th>
        </tr>
        {
          items.map((item, i) => <Row i={i} item={item}/>)
        }
      </table>
    );
}

export const CartPage = () => {
    return (
      <Fragment>
        <div className="container">
            <div className="row">
            <div className="col-sm cart">
                <Table/>
            </div>
            <div className="col-sm-3 order-summary">
                <ul className="list-group">
                <li className="list-group-item">Order Summary</li>

                <li className="list-group-item">
                    <ul className="list-group flex">
                    <li className="text-left">Subtotal</li>
                    <li className="text-right">€0.00</li>
                    </ul>
                    <ul>
                    <li className="text-left">shipping</li>
                    <li className="text-right">€0.00</li>
                    </ul>
                    <ul className="list-group flex">
                    <li className="coupon crimson">
                        <small> >> Add Coupon Code</small>
                    </li>
                    </ul>
                </li>

                <li className="list-group-item ">
                    <ul className="list-group flex">
                    <li className="text-left">Total</li>
                    <li className="text-right">€0.00</li>
                    </ul>
                </li>
                </ul>
                <button
                type="button"
                className="btn btn-light btn-lg btn-block checkout bg-crimson"
                disabled="true"
                >
                <a href="#" className="white">
                    Checkout
                </a>
                </button>
            </div>
            </div>
        </div>
      </Fragment>
    );
}
