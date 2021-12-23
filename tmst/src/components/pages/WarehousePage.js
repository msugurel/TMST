
import { Container, Segment, Button, Icon, Header } from "semantic-ui-react";
import React, { useEffect } from 'react'
import { fetchWarehouses, deleteWarehouse } from '../../actions/warehouseActions';
import { useSelector, useDispatch } from 'react-redux'
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

export const WarehousePage = () => {

    const warehouseReducer = useSelector(state => state.warehouseReducer);
    const dispatch = useDispatch()

    const deleteRow = (id) => {
        dispatch(deleteWarehouse(id))
    };
    useEffect(() => {
        dispatch(fetchWarehouses())
    }, [])

    let columns = [
        {
            name: 'Depo Adı',
            selector: row => row.Name, sortable: true,
        },
        {
            name: 'İşlem', width: '250px',
            cell: (row) => <>
              
                <a className="ui mini button" href={`/depo/${row._id}`}><Icon name='edit' />  Düzenle</a>
            </>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    return (
        <div>
            <Container fluid>
                <Segment clearing>
                    <Header as='h2' floated='left'>
                        Malzemeler
                    </Header>
                    <Header as='h2' floated='right'>

                        <Button size='mini' primary as={Link} to="/depo/yeni" exact="true"><Icon name='add' /> Yeni Ekle</Button>
                    </Header>
                </Segment>
                {warehouseReducer.loading && "Veriler Yükleniyor..."}
                <Segment loading={warehouseReducer.loading}>
                    <DataTable
                        columns={columns}
                        data={warehouseReducer.warehouse} pagination
                    />
                </Segment>

            </Container>
        </div>
    )
}

export default WarehousePage



