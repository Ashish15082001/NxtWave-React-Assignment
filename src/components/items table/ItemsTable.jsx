import React from "react";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "./styledComponent";

export function ItemsTable({ resource_items, onResourceItemSeleted }) {
  // console.log(resource_items);
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
        {resource_items.map(({ createdAt, id, description, link, title }) => (
          <TableRow key={id}>
            <TableData>
              <input
                type="checkbox"
                onChange={onResourceItemSeleted.bind(null, {
                  resource_item_id: id,
                })}
              />
            </TableData>
            <TableData>{title}</TableData>
            <TableData>{description}</TableData>
            <TableData>{link}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
