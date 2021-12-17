import React from 'react'
import {  Container,  Divider, Grid,  Header,  Image,
    List,  Segment} from "semantic-ui-react";

function Footer() {
    return (
        <div>
        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
          <Container textAlign='center'>
            <Grid columns={5} divided stackable inverted>
              <Grid.Row>
              <Grid.Column>
                  <Header inverted as='h4' content='' />
                  <List link inverted>
                    <List.Item as='a' href='/'>Panel</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Malzemeler' />
                  <List link inverted>
                    <List.Item as='a' href='/Malzemeler'>Listele</List.Item>
                    <List.Item as='a' href='/Malzeme/Yeni'>Yeni Ekle</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Kullanıcılar' />
                  <List link inverted>
                    <List.Item as='a' href='/Kullanicilar'>Listele</List.Item>
                    <List.Item as='a' href='/Kullanici/Yeni'>Yeni Ekle</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Depolar' />
                  <List link inverted>
                    <List.Item as='a' href='/Depolar'>Listele</List.Item>
                    <List.Item as='a' href='/Depo/Yeni'>Yeni Ekle</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='TMST' />
                  <p>
                    Tıbbi Malzeme Stok Takip Sistemi
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Haritası
              </List.Item>
              <List.Item as='a' href='#'>
                Bize Ulaşın
              </List.Item>
              <List.Item as='a' href='#'>
                Kullanım Koşulları
              </List.Item>
              <List.Item as='a' href='https://github.com/msugurel/'>
                by msugurel
              </List.Item>
            </List>
          </Container>
        </Segment>
     
        </div>
    )
}

export default Footer