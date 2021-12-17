
import { Container, Segment, Button, Icon, Header } from "semantic-ui-react";
import React, { useEffect } from 'react'
import { fetchStockprocesss, deleteStockprocess } from '../../actions/stockprocessActions';
import { useSelector, useDispatch } from 'react-redux'
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

export const StockprocessPage = () => {

    const stockprocessReducer = useSelector(state => state.stockprocessReducer);
    const dispatch = useDispatch()

    const deleteRow = (id) => {
        dispatch(deleteStockprocess(id))
    };
    useEffect(() => {
        dispatch(fetchStockprocesss())
    }, [])

    let columns = [
        {
            name: 'Depo Adı',
            selector: row => row._Id, sortable: true,
        },
        {
            name: 'İşlem', width: '250px',
            cell: (row) => <>
                <Button inverted color='red' size='mini'
                    data-toggle="modal"
                    data-target="#DeleteModal"
                    id={row._id}
                    onClick={() => { deleteRow(row._id); }}><Icon name='trash' /> Sil </Button>
                <a className="ui mini button" href={`/islem/${row._id}`}><Icon name='edit' />  Düzenle</a>
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
                        Yapılan Stok İşlemleri
                    </Header>
                    <Header as='h2' floated='right'>

                        <Button size='mini' primary as={Link} to="/islem/yeni" exact="true"><Icon name='add' /> Yeni Ekle</Button>
                    </Header>
                </Segment>
                {stockprocessReducer.loading && "Veriler Yükleniyor..."}
                <Segment loading={stockprocessReducer.loading}>
                    <DataTable
                        columns={columns}
                        data={stockprocessReducer.stockprocess} pagination
                    />
                </Segment>

            </Container>
        </div>
    )
}

export default StockprocessPage



