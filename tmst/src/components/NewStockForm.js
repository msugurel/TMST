import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Form, Input, Message,Header } from 'semantic-ui-react'
import { Redirect, useParams } from "react-router-dom";

const NewStockForm = ({ formTitle,addNewStock, updateStock, loading, errorText, done, stock, gotStock }) => {
  const params = useParams()
  const _id = stock ? stock.id : params.id;
  const [name, setName] = useState(stock ? stock.Name : '');
  const [title, setTitle] = useState('Yeni '+formTitle+' Ekle');
  const [error, setError] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  useEffect(() => {
    if (!stock && gotStock && gotStock.Name) {
      setName(gotStock.Name);
      setTitle(formTitle + ' Güncelle')
    }
    if (!_id) //Eğer url de ID yoksa bu bir yeni ekleme işlemidir.
    {
      setName("");
      setTitle(formTitle + ' Ekle')
    }
  }, [gotStock,_id]);
  

  const onFormSubmit = () => {
    const errMessages = {};
    if (!name) {
      errMessages.name = "Name can't be blank.";
    }

    setError(errMessages);
    if (Object.keys(errMessages).length === 0) {
      if (!_id) {
        addNewStock({ name });
      }
      else {
        updateStock({ _id, name });
      }
      setSubmitStatus(true);
    }
  };

  const formData = <Form onSubmit={onFormSubmit} loading={loading}>
     <Header as='h3' block>
     {title}
  </Header>
    <Form.Field
      control={Input}
      label="Malzeme Adı"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Malzeme Adı"
      error={error.name && { content: error.name }}
    />


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
      {done && submitStatus ? <Redirect to="/malzemeler" /> : formData}
    </div>


  );
}

export default NewStockForm