import React from 'react'
import PropTypes from 'prop-types'

import './ProductList.scss'

function ProductList(props) {
  const { info } = props;
  return (
    <div>
      <div>{info.title}</div>
    </div>
  )
}

ProductList.propTypes={
  title:PropTypes.string.isRequired
}
ProductList.defaultProps = {
  title:'Default Title'
}


export default ProductList