//Created by [rcredux] snippet
import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewMaterialForm from '../NewMaterialForm'
import { addNewMaterial,getMaterial,updateMaterial } from '../../actions/materialActions';
import { Container } from 'semantic-ui-react';

export class NewMaterialPage extends Component {
    componentDidMount() {
       const {match} = this.props;
       //console.log("bruası",!this.props.material , match.params.id)
       if (!this.props.material && match.params.id) {
           this.props.getMaterial(match.params.id);
       } 
    }
    
    
    render() {
        return (
          <Container text>
            <NewMaterialForm
              formTitle={"Malzeme"}
              done={this.props.materialReducer.done}
              errorText={this.props.materialReducer.error}
              loading={this.props.materialReducer.loading}
              addNewMaterial={this.props.addNewMaterial}
              updateMaterial={this.props.updateMaterial}
              material={this.props.material}
              gotMaterial={this.props.materialReducer.gotMaterial}
            />
          </Container>
        );
    }
}
const mapStateToProps = ({materialReducer},props) => {
  //console.log("ddd",materialReducer)
return {
    materialReducer:materialReducer,
    material:materialReducer.material.data
    /*TODO:::
.find(item=>item._id === props.match.params.id)*/}
}

const mapDispatchToProps = {
        addNewMaterial,getMaterial,updateMaterial
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMaterialPage)