<<<<<<< HEAD
import React from 'react'
import { List } from '../../components'

const SideMenu = ({ localCategory, category }) => {
    const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"]
    return (
      <div className="col-sm-2 sidebar">
        <ul>
          {links.map((link, index) => <li className={category === index ? 'active' : undefined} onClick={() => localCategory(index)} key={index}>{link}</li>)}
        </ul>
      </div>
    )
}

export const Home = (props) => {
    const { category, localCategory, updateToCart, list, isFiltering, filtered  } = props;
    return(
        <div className="container">
            <div className="row">
              <SideMenu localCategory={localCategory} category={category}/>
              {/* <List data={ isFiltering ? filtered : list[category]} count={count} addToCart={addToCart}/> */}
              <List data={ isFiltering ? filtered : list[category]} updateToCart={updateToCart}/>
            </div>
        </div>
    )
}
=======
import React from 'react'
import { List } from '../../components'

const SideMenu = ({ localCategory, category }) => {
    const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"]
    return (
      <div className="col-sm-2 sidebar">
        <ul>
          {links.map((link, index) => <li className={category === index ? 'active' : undefined} onClick={() => localCategory(index)} key={index}>{link}</li>)}
        </ul>
      </div>
    )
}

export const Home = (props) => {
    const { category, localCategory, addToCart, updateToCart, list, isFiltering, filtered  } = props;
    return(
        <div className="container">
            <div className="row">
              <SideMenu localCategory={localCategory} category={category}/>
              {/* <List data={ isFiltering ? filtered : list[category]} count={count} addToCart={addToCart}/> */}
              <List data={ isFiltering ? filtered : list[category]} updateToCart={updateToCart}  addToCart={addToCart}/>
            </div>
        </div>
    )
}
>>>>>>> 5eeeb38d16e321d0ef0f0e9446ccaef68382ca0c
