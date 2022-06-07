import React from 'react'
import PropTypes from 'prop-types'

import './MovieList.scss'

function MovieList(props) {
  const { info, movies } = props;

  return (
    <div>
      <div>{info.title}</div>
      {movies.map((items, index)=> {
        return(
          <div key={index}>
            <img src={items.Poster} alt='movie'></img>
          </div>
        )
      })}
    </div>
  )
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired
}
MovieList.defaultProps = {
  title: 'Default Title'
}


export default MovieList