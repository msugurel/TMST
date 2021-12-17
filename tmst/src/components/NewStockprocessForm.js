import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, Input, Message, Header, Dropdown } from 'semantic-ui-react'
import { Redirect, useParams } from "react-router-dom";
import { fetchMaterials } from '../actions/materialActions';
import { fetchUsers } from '../actions/userActions';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


const NewStockprocessForm = ({ formTitle, addNewStockprocess, updateStockprocess, loading, errorText, done, stockprocess, gotStockprocess }) => {
  const params = useParams()
  const _id = stockprocess ? stockprocess.id : params.id;
  const [stockId, setStockId] = useState(stockprocess ? stockprocess.StockId : '');
  const [quantity, setQuantity] = useState(stockprocess ? stockprocess.Quantity : '');
  const [userId, setUserId] = useState(stockprocess ? stockprocess.UserId : '');
  const [processDate, setProcessDate] = useState(stockprocess ? stockprocess.ProcessDate : '');

  const [title, setTitle] = useState('Yeni ' + formTitle + ' Ekle');
  const [error, setError] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);


  const materialReducer = useSelector(state => state.materialReducer);
  const userReducer = useSelector(state => state.userReducer);
  const dispatch = useDispatch()



  useEffect(() => {
    if (!stockprocess && gotStockprocess && gotStockprocess.StockId) {
      setStockId(gotStockprocess.StockId);
      setQuantity(gotStockprocess.Quantity);
      setUserId(gotStockprocess.UserId);
      setProcessDate(gotStockprocess.ProcessDate);

      setTitle(formTitle + ' Güncelle')
    }
    if (!_id) //Eğer url de ID yoksa bu bir yeni ekleme işlemidir.
    {
      setStockId(null);
      setQuantity(0);
      setUserId(null);
      setProcessDate(null);
      setTitle(formTitle + ' Ekle')
    }
  }, [gotStockprocess, _id]);

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
        addNewStockprocess({ stockId, quantity, userId, processDate });
      }
      else {
        updateStockprocess({ _id, stockId, quantity, userId, processDate });
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
  const onProcessTimeChange = (event, data) => setProcessDate(data.value);

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
      label="Kullanım Adedi"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      placeholder="Kullanım Adedi"
      error={error.name && { content: error.name }}
    />
    <br />
    <label>İşlemi Yapan Kullanıcıyı Seçiniz</label>
    <Dropdown
      placeholder='Kullanıcı Seçiniz'
      fluid
      search
      selection
      options={userOptions}
      onChange={onUserSlcChange}
    /><br />
    <label>İşlemi Tarihini Seçiniz</label><br />
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
      {done && submitStatus ? <Redirect to="/islemler" /> : formData}
    </div>


  );
}

export default NewStockprocessForm