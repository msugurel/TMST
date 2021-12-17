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
  const [name, setName] = useState(stockprocess ? stockprocess.Name : '');
  const [quantity, setQuantity] = useState(stockprocess ? stockprocess.Quantity : '');
  const [title, setTitle] = useState('Yeni ' + formTitle + ' Ekle');
  const [error, setError] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);


  const materialReducer = useSelector(state => state.materialReducer);
  const userReducer = useSelector(state => state.userReducer);
  const dispatch = useDispatch()


  const [currentRange, setNewRange] = useState([]);
  const onChange = (event, data) => setNewRange(data.value);

  useEffect(() => {
    if (!stockprocess && gotStockprocess && gotStockprocess.Name) {
      setName(gotStockprocess.Name);
      setTitle(formTitle + ' Güncelle')
    }
    if (!_id) //Eğer url de ID yoksa bu bir yeni ekleme işlemidir.
    {
      setName("");
      setTitle(formTitle + ' Ekle')
    }
  }, [gotStockprocess, _id]);

  useEffect(() => {
    dispatch(fetchMaterials())
    dispatch(fetchUsers())

  }, [])
  const onFormSubmit = () => {
    const errMessages = {};
    if (!name) {
      errMessages.name = "Name can't be blank.";
    }

    setError(errMessages);
    if (Object.keys(errMessages).length === 0) {
      if (!_id) {
        addNewStockprocess({ name });
      }
      else {
        updateStockprocess({ _id, name });
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
    "text": d.Name + " " + d.Surname +" ( "+d.Job+" )"
  }))
  const formData = <Form onSubmit={onFormSubmit} loading={loading}>
    <Header as='h3' block>
      {title}
    </Header><br/>
    <label>Malzeme Seçiniz</label>
    <Dropdown
      placeholder='Malzeme Seçiniz'
      fluid
      search
      selection
      options={materialOptions}
    /><br/>
    <Form.Field
      control={Input} type='number' max={50}
      label="Kullanım Adedi"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      placeholder="Kullanım Adedi"
      error={error.name && { content: error.name }}
    />
<br/>
<label>İşlemi Yapan Kullanıcıyı Seçiniz</label>
    <Dropdown
      placeholder='Kullanıcı Seçiniz'
      fluid
      search
      selection
      options={userOptions}
    /><br/>
    <label>İşlemi Tarihini Seçiniz</label><br/>
    <SemanticDatepicker locale="tr-TR" format="DD.MM.YYYY" onChange={onChange} />
    <br/>


    <Button primary type="submit">
      Kaydet
    </Button>
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