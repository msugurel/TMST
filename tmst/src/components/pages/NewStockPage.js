//Created by [rcredux] snippet
import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewStockForm from '../NewStockForm'
import { addNewStock,getStock,updateStock } from '../../actions/stockActions';
import { Container } from 'semantic-ui-react';

export class NewStockPage extends Component {
    componentDidMount() {
       const {match} = this.props;
       //console.log("bruası",!this.props.stock , match.params.id)
       if (!this.props.stock && match.params.id) {
           this.props.getStock(match.params.id);
       } 
    }
    
    
    render() {
        return (
          <Container text>
            <NewStockForm
              formTitle={"Malzeme"}
              done={this.props.stockReducer.done}
              errorText={this.props.stockReducer.error}
              loading={this.props.stockReducer.loading}
              addNewStock={this.props.addNewStock}
              updateStock={this.props.updateStock}
              stock={this.props.stock}
              gotStock={this.props.stockReducer.gotStock}
            />
          </Container>
        );
    }
}
const mapStateToProps = ({stockReducer},props) => {
  //console.log("ddd",stockReducer)
return {
    stockReducer:stockReducer,
    stock:stockReducer.stock.data
    /*TODO:::
.find(item=>item._id === props.match.params.id)*/}
}

const mapDispatchToProps = {
        addNewStock,getStock,updateStock
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStockPage)