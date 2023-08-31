import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import LineGraph from "../components/LineGraph";
import CovidMap from "../components/CovidMap";

interface CasesData {
  [date: string]: number;
}

interface Data {
  cases: CasesData;
}


const Dashboard = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Data>(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="bg-gray-50" >
      <Navbar />
      <div className="flex flex-col  w-full items-center justify-center py-4 ">
        {data && <LineGraph data={data.cases} />}
        <CovidMap />
      </div>
    </div>
  );
};

export default Dashboard;
