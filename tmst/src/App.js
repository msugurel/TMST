import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { Container } from 'semantic-ui-react'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/pages/HomePage'
import MaterialPage from './components/pages/MaterialPage'
import NewMaterialPage from './components/pages/NewMaterialPage'
import UserPage from './components/pages/UserPage'
import NewUserPage from './components/pages/NewUserPage'
import WarehousePage from './components/pages/WarehousePage'
import NewWarehousePage from './components/pages/NewWarehousePage'
import StockprocessPage from './components/pages/StockprocessPage'
import NewStockprocessPage from './components/pages/NewStockprocessPage'
import StockPage from './components/pages/StockPage'
import NewStockPage from './components/pages/NewStockPage'
import ReportPage from './components/pages/ReportPage'
import LoginForm from './components/pages/user/LoginForm'

export default class App extends Component {  
  render() {
    return (
      <div>
       <Header/>
       <Container style={{ minHeight: 300,padding: '25px', }} fluid>
           <Switch>
           <Route exact path="/loginPage" component={LoginForm}></Route>
           <Route exact path="/" component={LoginForm}></Route>
           <Route exact path="/panel" component={HomePage}></Route>
           <Route exact path="/malzemeler" component={MaterialPage}></Route>
           <Route exact path="/malzeme/yeni" component={NewMaterialPage}></Route>
           <Route exact path="/malzeme/:id" component={NewMaterialPage}></Route>
           <Route exact path="/kullanicilar" component={UserPage}></Route>
           <Route exact path="/kullanici/yeni" component={NewUserPage}></Route>
           <Route exact path="/kullanici/:id" component={NewUserPage}></Route>
           <Route exact path="/depolar" component={WarehousePage}></Route>
           <Route exact path="/depo/yeni" component={NewWarehousePage}></Route>
           <Route exact path="/depo/:id" component={NewWarehousePage}></Route>
           <Route exact path="/islemler" component={StockprocessPage}></Route>
           <Route exact path="/islem/yeni" component={NewStockprocessPage}></Route>
           <Route exact path="/islem/:id" component={NewStockprocessPage}></Route>
           <Route exact path="/stoklar" component={StockPage}></Route>
           <Route exact path="/stok/yeni" component={NewStockPage}></Route>
           <Route exact path="/stok/:id" component={NewStockPage}></Route>
           <Route exact path="/raporlar" component={ReportPage}></Route>
           </Switch>
       </Container>
       <Footer/>
      </div>
    )
  }
}
