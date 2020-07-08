import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, List } from './components'
import './styles/App.css'
import { list } from  "./data.js"

const SideMenu = ({ localCategory, category }) => {
  const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"]
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => <li className={category == index ? 'active' : undefined} onClick={() => localCategory(index)} key={index}>{link}</li>)}
      </ul>
    </div>
  )
}

const App = () => {
  const [category, setCategory] = useState(0)
  const [isFiltering, setFiltering] = useState(false)
  const [filtered, setFiltered] = useState()
  const localCategory = (i) => {
    setCategory(i)
  }
  const filterResults = (input) => { 
    let fullList = list.flat() // chuyen list(gom 5 mang con) thanh tap hon 38 phan tu trong 1 mang duy nhat
    let results = fullList.filter(item => {
      const name = item.name.toLowerCase();
      // console.log(name);
      const term = input.toLowerCase();
      return name.indexOf(term) != -1 
    })
    setFiltered(results)
  }

  useEffect(() => {
    console.log(isFiltering);
    // setFiltering(!isFiltering)
  })

  console.log(filtered);

  return (
    <Fragment>
      <Navbar filter={filterResults} setFiltering={setFiltering}/>
      <div className="container">
          <div className="row">
            <SideMenu localCategory={localCategory} category={category}/>
            <List data={ isFiltering ? filtered : list[category]} category={category}/>
          </div>
      </div>
    </Fragment>
  );
}
export default App;
