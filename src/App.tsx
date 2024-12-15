import React from "react";
import "./index.css";
import Simulator from "pages/Simulator";
import { DataProvider } from "components/context/useDataContext";

export default function App() {
  return (
    <DataProvider>
      <>
        <div className="w-screen h-24 flex items-center px-8 md:px-20 bg-gray-100 border-box drop-shadow-sm border">
          <span className="text-gray-700 font-bold text-4xl">Simulator</span>
        </div>
        <div className="bg-white font-sans h-screen text-gray-700 w-screen py-16 px-8 md:py-28 md:px-20 md:p-20 ">
          <Simulator />
        </div>
      </>
    </DataProvider>
  );
}
