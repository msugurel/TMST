//Created by [rcredux] snippet
import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewWarehouseForm from '../NewWarehouseForm'
import { addNewWarehouse,getWarehouse,updateWarehouse } from '../../actions/warehouseActions';
import { Container } from 'semantic-ui-react';

export class NewWarehousePage extends Component {
    componentDidMount() {
       const {match} = this.props;
       //console.log("bruası",!this.props.warehouse , match.params.id)
       if (!this.props.warehouse && match.params.id) {
           this.props.getWarehouse(match.params.id);
       } 
    }
    
    
    render() {
        return (
          <Container text>
            <NewWarehouseForm
              formTitle={"Depo"}
              done={this.props.warehouseReducer.done}
              errorText={this.props.warehouseReducer.error}
              loading={this.props.warehouseReducer.loading}
              addNewWarehouse={this.props.addNewWarehouse}
              updateWarehouse={this.props.updateWarehouse}
              warehouse={this.props.warehouse}
              gotWarehouse={this.props.warehouseReducer.gotWarehouse}
            />
          </Container>
        );
    }
}
const mapStateToProps = ({warehouseReducer},props) => {
  //console.log("ddd",warehouseReducer)
return {
    warehouseReducer:warehouseReducer,
    warehouse:warehouseReducer.warehouse.data
    /*TODO:::
.find(item=>item._id === props.match.params.id)*/}
}

const mapDispatchToProps = {
        addNewWarehouse,getWarehouse,updateWarehouse
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWarehousePage)