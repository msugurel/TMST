import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, Input, Message, Header, Dropdown } from 'semantic-ui-react'
import { Redirect, useParams } from "react-router-dom";
import { fetchMaterials } from '../actions/materialActions';
import { fetchWarehouses } from '../actions/warehouseActions';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import moment from 'moment';


const NewStockForm = ({ formTitle, addNewStock, updateStock, loading, errorText, done, stock, gotStock }) => {
  const params = useParams()
  const _id = stock ? stock.id : params.id;
  const [materialId, setMaterialId] = useState(stock ? stock.MaterialId : '');
  const [quantity, setQuantity] = useState(stock ? stock.Quantity : '');
  const [warehouseId, setWarehouseId] = useState(stock ? stock.WarehouseId : '');
  const [SKT, setSKT] = useState(stock ? stock.SKT : '');
  const [createdAt, setCreatedAt] = useState(stock ? stock.CreatedAt : '');

  const [title, setTitle] = useState('Yeni ' + formTitle + ' Ekle');
  const [error, setError] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);


  const materialReducer = useSelector(state => state.materialReducer);
  
  const warehouseReducer = useSelector(state => state.warehouseReducer);
  const dispatch = useDispatch()



  useEffect(() => {
    if (!stock && gotStock && gotStock.MaterialId) {
      setMaterialId(gotStock.MaterialId);
      setQuantity(gotStock.Quantity);
      setWarehouseId(gotStock.WarehouseId);
      setSKT(gotStock.SKT);
      setCreatedAt(gotStock.CreatedAt);

      setTitle(formTitle + ' Güncelle')
    }
    if (!_id) //Eğer url de ID yoksa bu bir yeni ekleme işlemidir.
    {
      setMaterialId(null);
      setQuantity(0);
      setWarehouseId(null);
      setSKT(null);
      setCreatedAt(null);

      setTitle(formTitle + ' Ekle')
    }
  }, [gotStock, _id]);

  useEffect(() => {
    dispatch(fetchMaterials())
    dispatch(fetchWarehouses())
    console.log(warehouseReducer,2222)

  }, [])
  const onFormSubmit = () => {
    const errMessages = {};
    if (!materialId) {
      errMessages.materialId = "Stok can't be blank.";
    }

    setError(errMessages);
    if (Object.keys(errMessages).length === 0) {
      if (!_id) {
        addNewStock({ materialId, quantity, warehouseId,SKT, createdAt });
      }
      else {
        updateStock({ _id, materialId, quantity, warehouseId,SKT, createdAt });
      }
      setSubmitStatus(true);
    }
  };

  const materialOptions = materialReducer.material.map(d => ({
    "key": d._id,
    "value": d._id,
    "text": d.Name
  }))
  
  const warehouseOptions = warehouseReducer.warehouse.map(d => ({
    "key": d._id,
    "value": d._id,
    "text": d.Name
  }))

  const onMaterialSlcChange = (e, data) => { setMaterialId(data.value) }
  const onWarehouseSlcChange = (e, data) => { setWarehouseId(data.value) }
  const onSKTTimeChange = (event, data) => setSKT(data.value);

  const formData = <Form onSubmit={onFormSubmit} loading={loading}>
    <Header as='h3' block>
      {title} 
    </Header><br />
    <label>Malzeme Seçiniz</label>
    <Dropdown
      placeholder='Malzeme Seçiniz'
      fluid
      search
      selection
      options={materialOptions}
      value={materialId}
      onChange={onMaterialSlcChange}
    /><br />
    <Form.Field
      control={Input} type='number' max={500}
      label="Stoklanma Adedi"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      placeholder="Stoklanma Adedi"
      error={error.name && { content: error.name }}
    />
    <br />
    <label>Depo Seçiniz</label>
    <Dropdown
      placeholder='Depo Seçiniz'
      fluid
      search
      selection
      value={warehouseId}
      options={warehouseOptions}
      onChange={onWarehouseSlcChange}
    /><br />
    
    
{SKT!=null && <><label>Seçilen Tarih </label><br /> <label>{moment(SKT).format("DD.MM.YYYY")}</label><br /><br /></>}

<label>Son Kullanım Tarihini Seçiniz </label><br />
<SemanticDatepicker showToday={true} locale="tr-TR" format="DD.MM.YYYY" onChange={onSKTTimeChange} />
    <br />


    <Button primary type="submit">Kaydet</Button>
    {
      errorText && errorText.response &&
      <Message negative>
        <Message.Header>
          {errorText.response.statusText}
        </Message.Header>
      </Message>
    }

  </Form>

  //console.log("kkk", done, submitStatus)
  return (

    <div>
      {done && submitStatus ? <Redirect to="/stoklar" /> : formData}
    </div>


  );
}

export default NewStockForm