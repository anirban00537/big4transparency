import React, { useState } from "react";
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
        <Table variant="striped" w={3256} colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Firm Name</Th>
              <Th>Stream</Th>
              <Th>Sub-Stream</Th>
              <Th>Level</Th>
              <Th>Years of experience </Th>
              <Th>Certification </Th>
              <Th>City </Th>
              <Th>Salary (Include partner draws) </Th>
              <Th>Last bonus received</Th>
              <Th>Annual equity grant</Th>
              <Th>Internal promotion / External hire</Th>
              <Th>Average weekly hours</Th>
              <Th>Ethnicity </Th>
              <Th>Gender </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Chart;
