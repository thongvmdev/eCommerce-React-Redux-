import React, { Fragment, useState, useEffect } from 'react';
import { Navbar } from '../../components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CartPage } from './Cart'
import { Home } from './Home'
import '../../styles/App.css'
import { list } from  "../../data"

const App = props => {
  const { items, onUpdateCart } = props;

  const [category, setCategory] = useState(0)
  const [isFiltering, setFiltering] = useState(false) 
  const [filtered, setFiltered] = useState(null)
  const [count, setCount] = useState(1)
  const localCategory = (i) => {
    setCategory(i)
  }
  const filterResults = (input) => { 
    let fullList = list.flat() // chuyen list(gom 5 mang con) thanh tap hon 38 phan tu trong 1 mang duy nhat
    let results = fullList.filter(item => {
      const name = item.name.toLowerCase();
      console.log(name);
      const term = input.toLowerCase();
      return name.indexOf(term) !== -1 
    })
    setFiltered(results)
  }

  useEffect(() => {
    // console.log(isFiltering);
    // setFiltering(!isFiltering)
  })

  const update = () => {
    onUpdateCart()
  }


  // console.log(filtered);
  return (
    <Fragment>
      <Router>
        <Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>
         {/* Routes */}
         <Route exact path="/" component={() => <Home
                                                category={category}
                                                localCategory={localCategory}
                                                 updateToCart={update}
                                                 list={list}
                                                isFiltering={isFiltering}
                                                filtered={filtered}/>
                                                }/>
         <Route exact  path="/cart" component={CartPage}/>
      </Router>
    </Fragment>
  );
}
export default App;

