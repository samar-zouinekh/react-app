import React from 'react';
import{DataGrid, Editing, Column} from 'devextreme-react/data-grid';

import { createStore } from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';

class MasterDetailGrid extends React.Component {
  constructor(props) {
    super(props);
    
    this.dataSource = getMasterDetailGridDataSource(props.data.key, props.data.data.id);
    
   
  }
  render() {
    return (
      <DataGrid
        dataSource={this.dataSource}
        showBorders={true}
    
    >


        <Editing allowAdding={true} allowUpdating={true} allowDeleting ={true} mode="popup"/>
     
    </DataGrid>
    );
  }
}

const  getMasterDetailGridDataSource=(name, id)=> {
  return{
   store: createStore({
      loadUrl: `/getIssuesByProject/${name}`,
      insertUrl:'/createIssue' ,
      updateUrl: '/updateissue' ,
      deleteUrl: `/deleteissue/PM-32`,
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = { withCredentials: true };
      }
    })
  }
}

export default MasterDetailGrid;