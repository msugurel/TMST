
import { Container, Segment, Button, Icon } from "semantic-ui-react";
import DataTablesComp from "../DataTables";
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { fetchMaterials, deleteMaterial } from '../../actions/materialActions';
import { connect } from 'react-redux'
import DataTable from 'react-data-table-component';

export const MaterialPage = ({ deleteMaterial, fetchMaterials, materialReducer }) => {
    const [tableData, setTableData] = useState(null)
    const deleteRow = (id) => {
        deleteMaterial(id)
        setTimeout(() => {
            fetchMaterials();
        }, 500);

        console.log(materialReducer)
    };

    useEffect(() => {
        fetchMaterials();
    }, [])

    const columns = [
        {
            name: 'Malzeme Adı',
            selector: row => row.Name,sortable: true,
        },
        {
            name: 'İşlem',width:'250px',
            cell: (row) => <>
                <Button inverted color='red' size='mini'
                data-toggle="modal"
                data-target="#DeleteModal"
                id={row._id}
                onClick={() => { deleteRow(row._id); }}><Icon name='trash' /> Sil </Button>
                <a className="ui mini button" href={`/malzeme/${row._id}`}><Icon name='edit' />  Düzenle</a>
            </>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];


    return (
        <div>

            <Container >
                {materialReducer.loading && "Veriler Yükleniyor..."}
                <Segment loading={materialReducer.loading}>
                    <DataTable
                        columns={columns}
                        data={materialReducer.material} pagination
                    />
                </Segment>
            </Container>
        </div>
    )
}




const mapStateToProps = ({ materialReducer }) => ({
    materialReducer
})


const mapDispatchToProps = {
    fetchMaterials, deleteMaterial
}

export default connect(mapStateToProps, mapDispatchToProps)(MaterialPage)



