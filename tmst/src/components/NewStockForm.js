import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, Input, Message, Header, Dropdown } from 'semantic-ui-react'
import { Redirect, useParams } from "react-router-dom";
import { fetchMaterials } from '../actions/materialActions';
import { fetchUsers } from '../actions/userActions';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


const NewStockForm = ({ formTitle, addNewStock, updateStock, loading, errorText, done, stock, gotStock }) => {
  const params = useParams()
  const _id = stock ? stock.id : params.id;
  const [stockId, setStockId] = useState(stock ? stock.StockId : '');
  const [quantity, setQuantity] = useState(stock ? stock.Quantity : '');
  const [userId, setUserId] = useState(stock ? stock.UserId : '');
  const [createdAt, setCreatedAt] = useState(stock ? stock.CreatedAt : '');

  const [title, setTitle] = useState('Yeni ' + formTitle + ' Ekle');
  const [error, setError] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);


  const materialReducer = useSelector(state => state.materialReducer);
  const userReducer = useSelector(state => state.userReducer);
  const dispatch = useDispatch()



  useEffect(() => {
    if (!stock && gotStock && gotStock.StockId) {
      setStockId(gotStock.StockId);
      setQuantity(gotStock.Quantity);
      setUserId(gotStock.UserId);
      setCreatedAt(gotStock.CreatedAt);

      setTitle(formTitle + ' Güncelle')
    }
    if (!_id) //Eğer url de ID yoksa bu bir yeni ekleme işlemidir.
    {
      setStockId(null);
      setQuantity(0);
      setUserId(null);
      setCreatedAt(null);
      setTitle(formTitle + ' Ekle')
    }
  }, [gotStock, _id]);

  useEffect(() => {
    dispatch(fetchMaterials())
    dispatch(fetchUsers())

  }, [])
  const onFormSubmit = () => {
    const errMessages = {};
    if (!stockId) {
      errMessages.stockId = "Stok can't be blank.";
    }

    setError(errMessages);
    if (Object.keys(errMessages).length === 0) {
      if (!_id) {
        addNewStock({ stockId, quantity, userId, createdAt });
      }
      else {
        updateStock({ _id, stockId, quantity, userId, createdAt });
      }
      setSubmitStatus(true);
    }
  };

  const materialOptions = materialReducer.material.map(d => ({
    "key": d._id,
    "value": d._id,
    "text": d.Name
  }))
  const userOptions = userReducer.user.map(d => ({
    "key": d._id,
    "value": d._id,
    "text": d.Name + " " + d.Surname + " ( " + d.Job + " )"
  }))

  const onMaterialSlcChange = (e, data) => { setStockId(data.value) }
  const onUserSlcChange = (e, data) => { setUserId(data.value) }
  const onProcessTimeChange = (event, data) => setCreatedAt(data.value);

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
      onChange={onMaterialSlcChange}
    /><br />
    <Form.Field
      control={Input} type='number' max={50}
      label="Stok Adedi"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      placeholder="Stok Adedi"
      error={error.name && { content: error.name }}
    />
    <br />
    <label>Stoğa Alan Kullanıcıyı Seçiniz</label>
    <Dropdown
      placeholder='Kullanıcı Seçiniz'
      fluid
      search
      selection
      options={userOptions}
      onChange={onUserSlcChange}
    /><br />
    <label>Stoklama Tarihini Seçiniz</label><br />
    <SemanticDatepicker locale="tr-TR" format="DD.MM.YYYY" onChange={onProcessTimeChange} />
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