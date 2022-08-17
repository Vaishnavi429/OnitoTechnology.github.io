import React, { Component } from 'react'
const $ = require('jquery');
$.DataTable = require('datatables.net');

export default class DataTableExample extends Component {
     componentDidMount(){
      this.$tableRef = $(this.tableRef)
      this.$tableRef.DataTable(
        {
          dom:"<'.data-table-wrapper'>",
          data: DataToShow,
          columns:[
            {title:"Name", width:"120px"},
            {title:"Position" , width:"180px"},
            {title:"Office" , width:"150px"},
            {title:"Age" , width:"50px"},
            {title:"Start Date" , width:"150px"},
          ]
        }
      )
     }
     componentWillUnmount(){
      $('.data-table-wrapper')
      .find('table')
      .DataTable()
      .destroy(true);
    
      
   }
   shouldComponentUpdate() {
    return false;
}

  render() {
    return (
      <div>
       <h1>DataTable</h1>
       <input onClick={(name, nickname) => {
                    this.onAddClick(name, nickname);
                }} />
      <table className="display" width="100%" ref ={tableRef=>this.tableRef=tableRef}>

      </table>

      </div>
    )
  }
}

let DataToShow = [
  ["Airi Satou"	,"Accountant",	"Tokyo"	,33,	"11/28/2008"],
  ["Angelica Ramos"	,"Chief Executive Officer (CEO)",	"London",	47	,"10/9/2009"],
  ["Ashton Cox","Junior Technical Author",	"San Francisco",	66,"1/12/2009"],
  ["Bradley Greer",	"Software Engineer",	"London",	41,	"10/13/2012"],
  ["Brenden Wagner",	"Software Engineer",	"San Francisco",	28,	"6/7/2011"],
  ["Brielle Williamson",	"Integration Specialist",	"New York",	61 ,	"12/2/2012"],
  ["Bruno Nash",	"Software Engineer",	"London",	38	,"5/3/2011"],
  ["Caesar Vance",	"Pre-Sales Support",	"New York",	21,	"12/12/2011"],
  ["Cara Stevens",	"Sales Assistant",	"New York",	46,	"12/6/2011"],
  ["Cedric Kelly",	"Senior Javascript Developer",	"Edinburgh",	22,	"3/29/2012"],
  ]
