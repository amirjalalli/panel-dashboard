import React from "react";
import Chart from "../../components/Chart/Chart";
import Features from "../../components/Features/Features";
import { xAxisData } from "../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month sale" data={xAxisData} dataKey="Sale" />

      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
