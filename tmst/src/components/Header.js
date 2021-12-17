import React, { Component } from 'react'
import {  Container,  Image,  Menu, Visibility,} from "semantic-ui-react";

import { Link,NavLink } from 'react-router-dom';

export const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '1em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
    // backgroundColor:'#F6F6F6',
    borderBottom: '1px solid #f6f6f6'
  }
  
  export const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }
export default class Header extends Component {

    state = {
        menuFixed: false,
        overlayFixed: false,
      }
    
    
      stickOverlay = () => this.setState({ overlayFixed: true })
    
      stickTopMenu = () => this.setState({ menuFixed: true })
    
      unStickOverlay = () => this.setState({ overlayFixed: false })
    
      unStickTopMenu = () => this.setState({ menuFixed: false })


    render() {
        const { menuFixed} = this.state
        return (
            <div>
                        
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
              </Menu.Item>
              <Menu.Item header as={NavLink} to="/" exact={true}>Panel</Menu.Item>
              <Menu.Item as={NavLink} to="/malzemeler" exact={true}>Malzemeler</Menu.Item>
              {/* <Menu.Item as={NavLink} to="/malzeme/yeni" exact={true}>Yeni Ekle</Menu.Item>  */}
              <Menu.Item as={NavLink} to="/kullanicilar" exact={true}>Kullanıcılar</Menu.Item>           
              <Menu.Item as={NavLink} to="/depolar" exact={true}>Depolar</Menu.Item>               
              <Menu.Item as={NavLink} to="/raporlar" exact={true}>Raporlar</Menu.Item>                  
            </Container>
          </Menu>
        </Visibility>
    
            </div>
        )
    }
}