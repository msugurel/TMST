//Created by [rcredux] snippet
import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewUserForm from '../NewUserForm'
import { addNewUser,getUser,updateUser } from '../../actions/userActions';
import { Container } from 'semantic-ui-react';

export class NewUserPage extends Component {
    componentDidMount() {
       const {match} = this.props;
       //console.log("bruası",!this.props.user , match.params.id)
       if (!this.props.user && match.params.id) {
           this.props.getUser(match.params.id);
       } 
    }
    
    
    render() {
        return (
          <Container text>
            <NewUserForm
              formTitle={"Kullanıcı"}
              done={this.props.userReducer.done}
              errorText={this.props.userReducer.error}
              loading={this.props.userReducer.loading}
              addNewUser={this.props.addNewUser}
              updateUser={this.props.updateUser}
              user={this.props.user}
              gotUser={this.props.userReducer.gotUser}
            />
          </Container>
        );
    }
}
const mapStateToProps = ({userReducer},props) => {
  //console.log("ddd",userReducer)
return {
    userReducer:userReducer,
    user:userReducer.user.data
    /*TODO:::
.find(item=>item._id === props.match.params.id)*/}
}

const mapDispatchToProps = {
        addNewUser,getUser,updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserPage)