import './EmployeeList.css';
import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, customStylesForTable } from "../../assets/Ressources"
import { useSelector } from 'react-redux';
import { employeeSelector } from '../../store/employeeSlice';
import { Menu } from '../../components/menu/Menu';


export default function EmployeeList() {

    const selector = useSelector(employeeSelector);
    var data = selector.employees
    const tableData = {
        columns,
        data
      };

    return (
        <div className="employee-list">
            <main>
                <div className="header">
                    <Menu section=""></Menu>
                    <h1>Current Employees</h1>
                </div>
                <section className="employee-list-table">
                    <div className="main">
                        <DataTableExtensions 
                        {...tableData}
                        export={false}
                        print={false}>
                            <DataTable
                            columns={columns}
                            data={data}
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                            noDataComponent="There is no employees to display right now" 
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                            customStyles={customStylesForTable}
                            />
                        </DataTableExtensions>
                    </div>
                </section>
            </main>
        </div>
    )
}