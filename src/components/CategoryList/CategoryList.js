import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap';

import './CategoryList.scss'

function CategoryList(props) {
  const { info } = props;

  const [categories, ] = useState([
    { categoryId: 1, categoryName: 'Beverages' },
    { categoryId: 2, categoryName: 'Condiments' },
  ])
  const [selected, setSelected] = useState('')

  const changeCategory = (item)=> {
    setSelected(item)
  }


  return (
    <div>
      <div>{info.title}</div>
      <ListGroup>
        {
          categories.map((item) => {
            return (
              <ListGroupItem onClick={()=>changeCategory(item.categoryName)} key={item.categoryId}>{item.categoryName}</ListGroupItem>
            )
          })
        }
      
      </ListGroup>
      <h3>{selected}</h3>
    </div>
  )
}

CategoryList.propTypes = {
  title: PropTypes.string.isRequired
}
CategoryList.defaultProps = {
  title: 'Default Title'
}

export default CategoryList