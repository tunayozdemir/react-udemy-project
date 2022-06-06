import React, { useState, useEffect } from 'react'
import { MainContext } from './context';
import { Container, Row, Col } from 'reactstrap'
import { Navi, CategoryList, ProductList } from './components'
import './App.scss';


function App() {
  const [theme, setTheme] = useState('light')
  const [methods, setMethods] = useState({})

  // ncaptulation (Kapsülleme)
  const categorytInfo = {title: 'Category List'}
  const productInfo = {title:'Product List'}

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

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <MainContext.Provider value={data} className="container">
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs='3'>
            <CategoryList info={categorytInfo}/>
          </Col>
          <Col xs='9'>
            <ProductList info={productInfo}/>
          </Col>
        </Row>
      </Container>

    </MainContext.Provider>
  );
}

export default App;
