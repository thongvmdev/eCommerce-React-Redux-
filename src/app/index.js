import React, { Fragment } from 'react';
import { Navbar, List } from './components'
import './styles/App.css'
import { list } from  "./data.js"

const SideMenu = () => {
  const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"]
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map(link => <li>{link}</li>)}
      </ul>
    </div>
  )
}

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <div className="container">
        <div className="row">
          <SideMenu/>
          <List data={list}/>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
