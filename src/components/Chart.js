import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
const Chart = () => {
  return (
    <div className="container chartCon">
      <div className="inputBorder">
        <i class="fas fa-search cstmSer"></i>
        <input
          class=" inputSec"
          name="search"
          autocomplete="off"
          placeholder="Type here to search and the table will appear"
        />
      </div>
      <div className="chartSection">
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Chart;
