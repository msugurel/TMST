
import { Container } from "semantic-ui-react";
import DataTablesComp from "../DataTables";
import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function MaterialPage() {
    const [tableData, setTableData] = useState(null)
    const deleteRow = (id) => {
        const filteredData = this.state.data.filter((i) => i.id !== id);
        this.setState({ data: filteredData });
    };

    const getDataFromApi = () => {
        axios.get('http://localhost:5000/materials')
            .then(function (response) {
                // handle success
                var newData = [];
                response.data.map((item, index) => {
                    var newItem = {
                        name: item.Name, id: item._id,
                        position: "System Architect",
                        office: "Edinburgh",
                        ext: 5421,
                        date: "2011/04/25",
                        salary: "$320,800",
                    }
                    newData.push(newItem);
                })
                console.log("data", newData)
                setTableData(newData)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    useEffect(() => {
        getDataFromApi();
    }, [])
    return (

        <div>
            <Container>
{
    tableData == null ? "Veri yok" :
    <DataTablesComp columns={5} data={tableData} deleteRow={deleteRow}  />

}
            </Container>

        </div>
    )
}
