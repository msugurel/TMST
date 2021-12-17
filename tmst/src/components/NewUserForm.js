import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Form, Input, Message,Header } from 'semantic-ui-react'
import { Redirect, useParams } from "react-router-dom";

const NewUserForm = ({ formTitle,addNewUser, updateUser, loading, errorText, done, user, gotUser }) => {
  const params = useParams()
  const _id = user ? user.id : params.id;
  const [name, setName] = useState(user ? user.Name : '');
  const [surname, setSurname] = useState(user ? user.Surname : '');
  const [username, setUsername] = useState(user ? user.Username : '');
  const [job, setJob] = useState(user ? user.Job : '');
  const [title, setTitle] = useState('Yeni '+formTitle+' Ekle');
  const [error, setError] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  useEffect(() => {
    if (!user && gotUser && gotUser.Name) {
      setName(gotUser.Name);
      setSurname(gotUser.Surname);
      setUsername(gotUser.Username);
      setJob(gotUser.Job);
      setTitle(formTitle + ' Güncelle')
    }
    if (!_id) //Eğer url de ID yoksa bu bir yeni ekleme işlemidir.
    {
      setName("");
      setSurname("");
      setUsername("");
      setJob("");
      setTitle(formTitle + ' Ekle')
    }
  }, [gotUser,_id]);
  

  const onFormSubmit = () => {
    const errMessages = {};
    if (!name) {
      errMessages.name = "Name can't be blank.";
    }

    setError(errMessages);
    if (Object.keys(errMessages).length === 0) {
      if (!_id) {
        addNewUser({ name,surname,job,username });
      }
      else {
        updateUser({ _id, name,surname,job,username});
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
      label="Ad"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Ad"
      error={error.name && { content: error.name }}
    />
    <Form.Field
      control={Input}
      label="Soyad"
      value={surname}
      onChange={(e) => setSurname(e.target.value)}
      placeholder="Soyad"
      error={error.name && { content: error.name }}
    />

<Form.Field
      control={Input}
      label="Kullanıcı  Adı"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Kullanıcı  Adı"
      error={error.name && { content: error.name }}
    />

<Form.Field
      control={Input}
      label="Meslek"
      value={job}
      onChange={(e) => setJob(e.target.value)}
      placeholder="Meslek"
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
      {done && submitStatus ? <Redirect to="/kullanicilar" /> : formData}
    </div>


  );
}

export default NewUserForm