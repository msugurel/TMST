import React,{useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default function LoginForm() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='https://react.semantic-ui.com/logo.png' /> TMST Giriş
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Kullanıcı Adı' 
          value={userName}
            onChange={(e) => setUsername(e.target.value)}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Parola'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" disabled={!validateForm()} block color='teal' fluid size='large'>
            Giriş Yap
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)
  }
