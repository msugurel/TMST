import { Container, Segment, Button, Icon, Header } from "semantic-ui-react";
import React, { useState } from "react";
import Axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./Report";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
//https://dev.to/finallynero/generating-pdf-documents-in-react-using-react-pdf-4ka7
const years = [
  { value: "2010", text: "2010" },
  { value: "2011", text: "2011" },
  { value: "2012", text: "2012" },
  { value: "2013", text: "2013" },
  { value: "2014", text: "2014" },
  { value: "2015", text: "2015" },
  { value: "2016", text: "2016" },
  { value: "2017", text: "2017" },
  { value: "2018", text: "2018" },
  { value: "2019", text: "2019" }
];

export default function ReportPage() {
  const [year, setYear] = useState("");
  const [movieDetails, setDetails] = useState([]);
  const [show, setHide] = useState(false)
  const [processDate, setProcessDate] = useState('');

  const fetchMovie = async e => {
    setYear(e.target.value);
    try {
      let res = await Axios(
        `http://localhost:5000/materials`
      );
      setDetails(res.data.results);
      setHide(true)
    } catch (error) {
      console.log(error);
    }
  };

  const onProcessTimeChange = (event, data) => setProcessDate(data.value);
  return (
    <div className="container">
      <Segment clearing>
        <Header as='h3' textAlign='center'>
          Malzeme Kullanım Raporu
        </Header>
      </Segment>

      <label>Başlangıç Tarihini Seçiniz</label><br /><br />
    <SemanticDatepicker locale="tr-TR" format="DD.MM.YYYY" onChange={onProcessTimeChange} />
    <br /><br />
    <label>Bitiş Tarihini Seçiniz</label><br /><br />
    <SemanticDatepicker locale="tr-TR" format="DD.MM.YYYY" onChange={onProcessTimeChange} />
    <br /><br />
    <Button primary>Rapor Oluştur</Button>
      {/* <label htmlFor="movies">Select Year</label>
      <select id="movies" className="select" onChange={fetchMovie}>
        <option defaultValue="" disabled>
          Select your option
        </option>
        {years.map((year, index) => {
          return (
            <option key={index} value={year.value}>
              {year.text}
            </option>
          );
        })}
      </select> */}
      {show && <PDFDownloadLink
        document={<PdfDocument data={movieDetails} />}
        fileName="movielist.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>}
    </div>
  );
}
