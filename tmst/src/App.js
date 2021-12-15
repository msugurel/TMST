import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { Container } from 'semantic-ui-react'
import Footer from './components/Footer'
import Header from './components/Header'

import HomePage from './components/pages/HomePage'
import MaterialPage from './components/pages/MaterialPage'
import NewMaterialPage from './components/pages/NewMaterialPage'
export default class App extends Component {
  
  
  render() {
    return (
      <div>
       <Header/>
       <Container text style={{ minHeight: 300 }}>
           <Switch>
           <Route exact path="/" component={HomePage}></Route>
           <Route exact path="/malzemeler" component={MaterialPage}></Route>
           <Route exact path="/malzeme/yeni" component={NewMaterialPage}></Route>
           <Route exact path="/malzeme/:id" component={NewMaterialPage}></Route>
           </Switch>
       </Container>
       <Footer/>
      </div>
    )
  }
}
