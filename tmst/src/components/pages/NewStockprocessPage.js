//Created by [rcredux] snippet
import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewStockprocessForm from '../NewStockprocessForm'
import { addNewStockprocess,getStockprocess,updateStockprocess } from '../../actions/stockprocessActions';
import { Container } from 'semantic-ui-react';

export class NewStockprocessPage extends Component {
    componentDidMount() {
       const {match} = this.props;
       //console.log("bruası",!this.props.stockprocess , match.params.id)
       if (!this.props.stockprocess && match.params.id) {
           this.props.getStockprocess(match.params.id);
       } 
    }
    
    
    render() {
        return (
          <Container text>
            <NewStockprocessForm
              formTitle={"Stok İşlemi"}
              done={this.props.stockprocessReducer.done}
              errorText={this.props.stockprocessReducer.error}
              loading={this.props.stockprocessReducer.loading}
              addNewStockprocess={this.props.addNewStockprocess}
              updateStockprocess={this.props.updateStockprocess}
              stockprocess={this.props.stockprocess}
              gotStockprocess={this.props.stockprocessReducer.gotStockprocess}
            />
          </Container>
        );
    }
}
const mapStateToProps = ({stockprocessReducer},props) => {
  console.log("ddd",stockprocessReducer)
return {
    stockprocessReducer:stockprocessReducer,
    stockprocess:stockprocessReducer.stockprocess?.data
    /*TODO:::
.find(item=>item._id === props.match.params.id)*/}
}

const mapDispatchToProps = {
        addNewStockprocess,getStockprocess,updateStockprocess
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStockprocessPage)