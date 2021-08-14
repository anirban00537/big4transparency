import React from "react";
import Chart from "../components/Chart";
import Cover from "../components/Cover";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div data-appid="86edf168-f0d6-40a3-b607-2968eae433fb" className="content">
      <Navbar />
      <Cover />
      <Form />
      <Chart />
    </div>
  );
};

export default Home;
