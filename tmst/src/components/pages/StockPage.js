
import { Container, Segment, Button, Icon, Header } from "semantic-ui-react";
import React, { useEffect } from 'react'
import { fetchStocks, deleteStock } from '../../actions/stockActions';
import { useSelector, useDispatch } from 'react-redux'
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

export const StockPage = () => {

    const stockReducer = useSelector(state => state.stockReducer);
    const dispatch = useDispatch()

    const deleteRow = (id) => {
        dispatch(deleteStock(id))
    };
    useEffect(() => {
        dispatch(fetchStocks())
    }, [])

    let columns = [
        {
            name: 'Malzeme Adı',
            selector: row => row.Name, sortable: true,
        },
        {
            name: 'İşlem', width: '250px',
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
            <Container fluid>
                <Segment clearing>
                    <Header as='h2' floated='left'>
                        Malzemeler
                    </Header>
                    <Header as='h2' floated='right'>

                        <Button size='mini' primary as={Link} to="/malzeme/yeni" exact="true"><Icon name='add' /> Yeni Ekle</Button>
                    </Header>
                </Segment>
                {stockReducer.loading && "Veriler Yükleniyor..."}
                <Segment loading={stockReducer.loading}>
                    <DataTable
                        columns={columns}
                        data={stockReducer.stock} pagination
                    />
                </Segment>

            </Container>
        </div>
    )
}

export default StockPage



