import React from "react";

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