
import { Container, Segment, Button, Icon } from "semantic-ui-react";
import React, { useEffect} from 'react'
import { fetchMaterials, deleteMaterial } from '../../actions/materialActions';
import { useSelector, useDispatch } from 'react-redux'
import DataTable from 'react-data-table-component';

export const MaterialPage = () => {

    const materialReducer = useSelector(state => state.materialReducer);
    const dispatch = useDispatch()

    const deleteRow = (id) => {
        dispatch(deleteMaterial(id))
    };
    useEffect(() => {
        dispatch(fetchMaterials())
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

export default MaterialPage



