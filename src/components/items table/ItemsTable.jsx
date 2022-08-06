import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "./styledComponent";
import { Link } from "react-router-dom";

export function ItemsTable({ resource_items, onResourceItemSeleted }) {
  const [selectedRow, setSelectedRow] = useState({});

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader></TableHeader>
          <TableHeader>TITLE</TableHeader>
          <TableHeader>DESCRIPTION</TableHeader>
          <TableHeader>LINK</TableHeader>
        </TableRow>
      </TableHead>

      <TableBody>
        {resource_items.length === 0 && (
          <TableRow>
            <TableData></TableData>
            <TableData></TableData>
            <TableData>no items</TableData>
            <TableData></TableData>
          </TableRow>
        )}
        {resource_items.length > 0 &&
          resource_items.map(({ createdAt, id, description, link, title }) => (
            <TableRow key={id} isActive={selectedRow[id] ? "true" : "false"}>
              <TableData>
                <input
                  type="checkbox"
                  onChange={() => {
                    setSelectedRow((oldSelectedRow) => {
                      if (oldSelectedRow[id])
                        return { ...oldSelectedRow, [id]: undefined };
                      else return { ...oldSelectedRow, [id]: id };
                    });
                    onResourceItemSeleted({
                      resource_item_id: id,
                    });
                  }}
                />
              </TableData>
              <TableData>{title}</TableData>
              <TableData>{description}</TableData>
              <TableData>
                <Link
                  target="_blank"
                  to={link}
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-blue)", textDecoration: "none" }}
                >
                  {link}
                </Link>
              </TableData>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
