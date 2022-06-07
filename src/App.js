import React, { useState, useEffect } from 'react'
import { MainContext } from './context';
import { Input } from 'antd';
import { Container, Row, Col } from 'reactstrap'
import { Navi, CategoryList, MovieList } from './components'
import './App.scss';


function App() {
  const [theme, setTheme] = useState('light')
  const [methods, setMethods] = useState({})
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')


  // ncaptulation (Kapsülleme)
  const categorytInfo = { title: 'Category List' }
  const productInfo = { title: 'Movie List' }

  const appendMethods = newMethotds => {
    setMethods({
      ...methods,
      ...newMethotds
    })
  }

  const data = {
    theme,
    setTheme,
    ...methods,
    appendMethods
  }

  const getMovierequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=2319ff36&s=${searchValue}`
    const response = await fetch(url)
    const responseJson = await response.json()

    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  }


  useEffect(() => {
    document.body.className = theme
    getMovierequest(searchValue)
  }, [theme, searchValue])

  return (
    <MainContext.Provider value={data} className="container">
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs='3'>
            <CategoryList info={categorytInfo} />
          </Col>
          <Col xs='9'>
            <Row >
              <Col xs='12'>
              <Input onChange={(e)=>
                setSearchValue(e.target.value)} 
                value={searchValue}
                />
              </Col>
              <Col xs='12'>
                <MovieList info={productInfo} movies={movies} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </MainContext.Provider>
  );
}

export default App;
