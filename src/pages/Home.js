import React, { useState } from "react";
import Chart from "../components/Chart";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Gsheet from "../components/Gsheet";
import Navbar from "../components/Navbar";

const Home = () => {
  const [loader, setloader] = useState("");
  return (
    <div data-appid="86edf168-f0d6-40a3-b607-2968eae433fb" className="content">
      <Navbar />
      <Cover />
      <Form setloader={setloader} />
      <Chart loader={loader} />
      {/* <Gsheet /> */}
      <Footer />
    </div>
  );
};

export default Home;
