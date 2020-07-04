import React, { Fragment, useState } from 'react';
import { Navbar, List } from './components'
import './styles/App.css'
import { list } from  "./data.js"

const SideMenu = ({ localCategory }) => {
  const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"]
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => <li onClick={() => localCategory(index)} key={index}>{link}</li>)}
      </ul>
    </div>
  )
}

const App = () => {
  const [category, setCategory] = useState(0)
  const localCategory = (i) => {
    setCategory(i)
  }
  return (
    <Fragment>
      <Navbar/>
      <div className="container">
        <div className="row">
          <SideMenu localCategory={localCategory}/>
          <List data={list} category={category}/>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
