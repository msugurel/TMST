
import { Container, Segment, Button, Icon, Header } from "semantic-ui-react";
import React, { useEffect } from 'react'
import { fetchUsers, deleteUser } from '../../actions/userActions';
import { useSelector, useDispatch } from 'react-redux'
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

export const UserPage = () => {

    const userReducer = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    const deleteRow = (id) => {
        dispatch(deleteUser(id))
    };
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    let columns = [
        {
            name: 'Adı',
            selector: row => row.Name, sortable: true,
        },
        {
            name: 'Soyadı',
            selector: row => row.Surname, sortable: true,
        },
        {
            name: 'Kullanıcı Adı',
            selector: row => row.Username, sortable: true,
        },
        {
            name: 'Meslek',
            selector: row => row.Job, sortable: true,
        },
        {
            name: 'İşlem', width: '250px',
            cell: (row) => <>
                <Button inverted color='red' size='mini'
                    data-toggle="modal"
                    data-target="#DeleteModal"
                    id={row._id}
                    onClick={() => { deleteRow(row._id); }}><Icon name='trash' /> Sil </Button>
                <a className="ui mini button" href={`/kullanici/${row._id}`}><Icon name='edit' />  Düzenle</a>
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
                        Kullanıcılar
                    </Header>
                    <Header as='h2' floated='right'>

                        <Button size='mini' primary as={Link} to="/kullanici/yeni" exact="true"><Icon name='add' /> Yeni Ekle</Button>
                    </Header>
                </Segment>
                {userReducer.loading && "Veriler Yükleniyor..."}
                <Segment loading={userReducer.loading}>
                    <DataTable
                        columns={columns}
                        data={userReducer.user} pagination
                    />
                </Segment>

            </Container>
        </div>
    )
}

export default UserPage



