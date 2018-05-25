import React from "react";
import { connect } from "react-redux";

const TableItem = ({
    id,
    done,
    title,
    description,
}) => (
        <tr>
            <td>{id}</td>
            <td>
                {}
            </td>
            <td title={description}>{title}</td>
        </tr>
    );

export default TableItem