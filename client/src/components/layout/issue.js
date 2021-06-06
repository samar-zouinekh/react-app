import { Component } from 'react'
import axios from 'axios'
import React from 'react';
import 'devextreme/dist/css/dx.light.css'

import 'devextreme/data/odata/store';
import { Column, DataGrid, FilterRow, HeaderFilter, GroupPanel, Scrolling, Editing, Grouping, Lookup, MasterDetail, Summary, RangeRule, RequiredRule, StringLengthRule, GroupItem, TotalItem, ValueFormat } from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import MasterDetailGridIssue from './MasterDetailGridIssue.js';

const url = 'http://localhost:5000';

const dataSource = createStore({
    key: "key",
    loadUrl: `/project`,

    onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = { withCredentials: true };
    }
});


class Issue extends Component {


    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    render() {
        const { projects } = this.state
        return (
            <div class='container'>
                <DataGrid
                    dataSource={dataSource}
                    showBorders={true}
                    height={600}
                    remoteOperations={true}
                >
                    <MasterDetail enabled={true} component={MasterDetailGridIssue} props={dataSource.name}/>
                    

                    <FilterRow visible={true} />
                    <HeaderFilter visible={true} />
                    <GroupPanel visible={true} />
                    <Scrolling mode="virtual" />
                    
                    <Grouping autoExpandAll={false} />
                    
                    <Column dataField="name">
                    </Column>
                    


                </DataGrid>
            </div>

        )
    }
}

export default Issue
