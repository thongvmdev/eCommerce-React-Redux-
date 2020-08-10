import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { saveCart } from '../../lib/actions'

import { Navbar } from '../../components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CartPage } from './Cart'
import { Home } from './Home'
import '../../styles/App.css'
import { list } from  "../../data"
import { Checkout } from './Checkout';
import { Confirm } from './confirm'
import UserProfileContextProvider from '../../lib/UserProfileContext'

const App = props => {
  const { items, saveLocalStorage } = props; // Khi connect Redux -> state dc pass qua nhu props
  const [category, setCategory] = useState(0) // To view page theo list & active item is clicked
  const [isFiltering, setFiltering] = useState(false) // Purpose? dung de hien thi view in normal or filter
  const [filtered, setFiltered] = useState(null) // Lay ket qua filter, pass to List Component
  
  const filterResults = (input) => { 
    let fullList = list.flat() // chuyen list(gom 5 mang con) thanh tap hon 38 phan tu trong 1 mang duy nhat
    let results = fullList.filter(item => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) !== -1
    })
    setFiltered(results)
  }

  useEffect(() => {
    saveLocalStorage(items)
  }, [items])
  
  return (
    <Fragment>
      <Router> 
        <UserProfileContextProvider>
          <Navbar filter={filterResults} setFiltering={setFiltering}/>
          {/* Routes */}
          <Route exact path="/" component={() => <Home
                                                  category={category}
                                                  setCategory={setCategory}
                                                  list={list}
                                                  isFiltering={isFiltering}
                                                  filtered={filtered}/>
                                                  }/>
          <Route exact  path="/cart" component={CartPage}/>
          <Route exact  path="/checkout" component={Checkout}/>
          <Route exact  path="/delivery" component={Confirm}/>
         </UserProfileContextProvider>
      </Router>
    </Fragment>
  );
}

  const mapStateToProps = (state) => {
    return {
        items: state.items
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        saveLocalStorage:  items => { dispatch(saveCart(items)) }
    } 
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)
  /* Cach khac */
  // export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

