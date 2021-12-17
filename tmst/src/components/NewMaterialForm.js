import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Form, Input, Message,Header } from 'semantic-ui-react'
import { Redirect, useParams } from "react-router-dom";

const NewMaterialForm = ({ formTitle,addNewMaterial, updateMaterial, loading, errorText, done, material, gotMaterial }) => {
  const params = useParams()
  const _id = material ? material.id : params.id;
  const [name, setName] = useState(material ? material.Name : '');
  const [title, setTitle] = useState('Yeni '+formTitle+' Ekle');
  const [error, setError] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  useEffect(() => {
    if (!material && gotMaterial && gotMaterial.Name) {
      setName(gotMaterial.Name);
      setTitle(formTitle + ' Güncelle')
    }
    if (!_id) //Eğer url de ID yoksa bu bir yeni ekleme işlemidir.
    {
      setName("");
      setTitle(formTitle + ' Ekle')
    }
  }, [gotMaterial,_id]);
  

  const onFormSubmit = () => {
    const errMessages = {};
    if (!name) {
      errMessages.name = "Name can't be blank.";
    }

    setError(errMessages);
    if (Object.keys(errMessages).length === 0) {
      if (!_id) {
        addNewMaterial({ name });
      }
      else {
        updateMaterial({ _id, name });
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
      label="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Name"
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

export default NewMaterialForm