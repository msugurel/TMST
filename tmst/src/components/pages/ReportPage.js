import { Container, Segment, Button, Icon, Header, Grid, Item, Form, Input, Select ,Message} from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_BASE } from '../../config/env';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { PdfDocument } from "./report/Report";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


//https://dev.to/finallynero/generating-pdf-documents-in-react-using-react-pdf-4ka7

export default function ReportPage() {
  const [movieDetails, setDetails] = useState([]);
  const [show, setHide] = useState(false)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const fetchMovie = async e => {
    setHide(false)
    try {
      let res = await Axios(`${API_BASE}/stockprocess/all`);
      setDetails(res.data);
      setHide(true)
    } catch (error) {
      console.log(error);
    }
  };

  const onStartTimeChange = (event, data) => {setHide(false);setStartDate(data.value)};
  const onEndTimeChange = (event, data) => {setHide(false);setEndDate(data.value)};

  const errorMsg =  <Message negative>
  <Message.Header>Rapor!</Message.Header>
  <p>Lütfen rapor oluşturmak için başlangıç ve bitiş tarihlerini seçiniz.</p>
</Message>

  return (
    <>
      <Segment clearing>
        <Header as='h3' textAlign='center'>
          Malzeme Kullanım Raporu
        </Header>
      </Segment>
      <Form>
        <Form.Group widths='equal'>
          <SemanticDatepicker
            label='Başlangıç Tarihi'
            locale="tr-TR"
            format="DD.MM.YYYY"
            onChange={onStartTimeChange} />

          <SemanticDatepicker
            label='Bitiş Tarihi'
            locale="tr-TR"
            format="DD.MM.YYYY"
            onChange={onEndTimeChange} />

          <Form.Field
            id='form-button-control-public'
            control={Button} primary
            onClick={fetchMovie}
            content='Rapor Oluştur'
            label='İşlem'
          />
        </Form.Group>
      </Form>
      {(!startDate || !endDate )&& errorMsg      }
      {(startDate || endDate ) && show &&
      <Segment>
      <PDFViewer width="100%" height="400">
        <PdfDocument data={movieDetails} />
      </PDFViewer>
    </Segment>}
    </>
  );
}
