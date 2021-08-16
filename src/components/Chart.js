import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const Chart = ({ loader }) => {
  const [info, setinfo] = useState([]);
  const [Loader, setLoader] = useState(false);
  const getAllInfo = async () => {
    const { data } = await axios.get("https://big4transparancy.herokuapp.com/");
    setinfo(data);
  };
  const searchInfo = async (keyword) => {
    const { data } = await axios.get(
      `https://big4transparancy.herokuapp.com/search/${keyword}`
    );
    setinfo(data);
  };
  useEffect(() => {
    getAllInfo();
  }, [loader]);
  return (
    <div className="container chartCon">
      <div className="inputBorder">
        <i class="fas fa-search cstmSer"></i>
        <input
          class=" inputSec"
          name="search"
          autocomplete="off"
          placeholder="Check out contributed data below!"
          onChange={(e) => searchInfo(e.target.value)}
        />
      </div>
      <div className="chartSection">
        <Table variant="striped" w={3256} colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Firm Name</Th>
              <Th>Position</Th>
              <Th>Experience</Th>
              <Th>Main practice area</Th>
              <Th>Plaintiff, Defense or Other </Th>
              <Th>City </Th>
              <Th>State </Th>
              <Th>Salary </Th>
              <Th>Annual bonus </Th>
              <Th>Annual billing requirement </Th>
              <Th>Ethnicity</Th>
              <Th>Gender</Th>
            </Tr>
          </Thead>
          <Tbody>
            {info.map((i) => (
              <Tr>
                <Td>{i?.FirmName}</Td>
                <Td>{i?.Position}</Td>
                <Td>{i?.Experience}</Td>
                <Td>{i?.Mainpracticearea}</Td>
                <Td>{i?.Plaintiff}</Td>
                <Td>{i?.City}</Td>
                <Td>{i?.State}</Td>
                <Td>{i?.Salary}</Td>
                <Td>{i?.Annualbonus}</Td>
                <Td>{i?.Annualbillingrequiremen}</Td>
                <Td>{i?.Ethnicity}</Td>
                <Td>{i?.Gender}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Chart;
