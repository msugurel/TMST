import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link,NavLink,Router } from 'react-router-dom';
import { Button,Icon } from 'semantic-ui-react'

const $ = require("jquery");
$.DataTable = require("datatables.net");
const columns = [
    { title: "Malzeme Adı", data: 'Name' },
    { title: "İşlem",data:null},
];
class DataTables extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.DataTable({
            dom: '<"data-table-wrapper"t>',
            data: this.props.data,
            columns: columns,
            ordering: false,
            columnDefs: [
                {
                    targets: [1],
                    className: 'center',
                    createdCell: (td, cellData, rowData) =>
                        ReactDOM.render(
                            <div style={{"float":"right"}}>
                                <Button inverted color='red' 
                                data-toggle="modal"
                                data-target="#DeleteModal"
                                id={rowData._id}
                                onClick={() => { this.props.deleteRow(rowData._id); }}><Icon name='trash' /> Sil </Button>
                                {/* <Button as={Link} to={`/malzeme/${rowData._id}`} icon labelPosition='right' color='orange'><Icon name='edit' /> Düzenle</Button> */}
                            </div>
                            ,
                            td
                        ),
                },
            ],
        });
    }
    componentWillUnmount() {
        $(".data-table-wrapper").find("table").DataTable().destroy(true);
    }

    reloadTableData = (data) => {
        const table = $('.data-table-wrapper').find('table').DataTable();
        table.clear();
        table.rows.add(data);
        table.draw();
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.data.length !== this.props.data.length) {
            this.reloadTableData(nextProps.data);
        }
        return false;
    }

    render() {
        console.log(this.el)
        return (
            <div>
                <table
                    className="table table-borderless display"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                    ref={(el) => (this.el = el)}
                />
            </div>
        );
    }
}
export default DataTables;