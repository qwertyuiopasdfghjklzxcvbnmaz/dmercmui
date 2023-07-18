"use client"
import React, { Component } from 'react';
import "datatables.net-bs5";
import $ from "jquery";
import Link from "next/link";

const DEFAULT_CONFIG = {
  "dom": 'rtip'
}

class DataTable extends Component {
  state = {
    table: null
  }
  _type(data, item, classObj) {
    let returnJsx = "";
    switch (data.type) {
      case "button":
        returnJsx = this._action(data.property, item, classObj);
        break;
      case "link":
        let linkURL = (data?.linkUrl) ? `${data.linkUrl}/${item[data?.data]}` : '';
        returnJsx = <Link href={linkURL}>{item[data.name]}</Link>;
        break;
      case "linkPopUpWindow":
        if (globalThis?.window?.open !== 'undefined') {
          // if( typeOf window !== undefined) {
          returnJsx = <Link onClick={() => window.open(data.linkUrl, 'linkPopUpWindow', 'height=550, width=1050,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')} href="#">{item[data.name]}</Link>
        }
        break;
      case "checkbox":
        returnJsx = <input type="checkbox" name={item[data.name]} />;
        break;
      case "customRow":
        returnJsx =
          !!data.functionName &&
          typeof classObj[data.functionName] === "function" &&
          classObj[data.functionName]({ ...item });
        break;
      default:
        returnJsx = item[data.name];
    }
    return returnJsx;
  };
  _button(postDate, item, classObj) {
    let jsx = "";
    let linkAttr = { href: "#", className: "btn btn-sm btn-Info" };
    if (!!postDate.functionName && typeof classObj[postDate.functionName] === 'function') {
      linkAttr = { ...linkAttr, onClick: () => classObj[postDate.functionName](item[postDate.params]) }
    }

    switch (postDate.icon) {
      case "view":
        jsx = (
          <Link {...linkAttr}>
            <i class="bi bi-front text-success"></i>
          </Link>
        );
        break;
      case "edit":
        jsx = (
          <Link {...linkAttr}>
            <i class="bi bi-pencil-fill"></i>
          </Link>
        );
        break;
      case "del":
        jsx = (
          <Link {...linkAttr}>
            <i class="bi bi-trash-fill text-danger"></i>
          </Link>
        );
        break;
      default:
    }
    return jsx;
  };
  _action(property, item, classObj) {
    return property.map((data, index) => {
      return this._button(data, item, classObj);
    });
  };
  returnResetTable(groupIndex = null, exportVisibility = false, orderIndex = 1, orderSequence = 'desc', headers = [], tableClass = 'sun-datatable') {
    // this.returnResetTable(null, true, 1, 'desc', [], customTableClass);
    $("." + tableClass).DataTable();
  }
  //Destroy DataTable...
  returnDestroyTable(tableClass = 'sun-datatable') {
    let table = $('.' + tableClass).DataTable();
    var allPages = table.rows({ 'search': 'applied' }).nodes();
    $('input[type="checkbox"]', allPages).prop('checked', false);
    $('input#select-all[type="checkbox"]').prop('checked', false);
    $('.' + tableClass).DataTable().destroy();
  }
  returnTable(tableColumns, tableRows, classObj, customTableClass = 'sun-datatable') {
    return <table className={"table " + customTableClass}>
      <thead>
        <tr>
          {!!tableColumns &&
            tableColumns.map((item, index) => (
              <th key={index} scope="col">
                {item.fieldName}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {!!tableRows &&
          tableRows.map((item, index) => (
            <tr key={index} scope="col">
              {tableColumns.map((tableRows, index) => {
                return <td>{this._type(tableRows, item, classObj)}</td>;
              })}
            </tr>
          ))}
      </tbody>
    </table>
  }
}

export default DataTable;