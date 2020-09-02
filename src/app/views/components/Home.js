import React from 'react'
import { List } from '../../components'

const SideMenu = ({ setCategory, category }) => {
    const links = ["Légumes", "Fruits", "Produits Frais", "Epicerie", "Boissons"]
    return (
      <div className="col-sm-2 sidebar">
        <ul>
          {
             links.map((link, index) => {
               return <li className={category === index ? 'active' : undefined} onClick={() => setCategory(index)} key={index}>{link}</li>
             })
          }
        </ul>
      </div>
    )
}

export const Home = (props) => {
    const { category, setCategory, list, isFiltering, filtered  } = props;
    return(
   <div className="container">
            <div className="row">
              <SideMenu setCategory={setCategory} category={category}/>
              <List data={ isFiltering ? filtered : list[category]}/>
            </div>
        </div>
    )
}
