"use client";
import CountUp from "./CountUp";
import { useActionConfig } from "@/context/useActionConfig";

const Header = () => {
  const { rows, columns, lifeCells, dieCells, totalCells } = useActionConfig();

  return (
    <header className="w-screen h-[4rem] px-10 flex justify-between items-center bg-[#ee7752] text-gray-900 z-10">
      <div className="w-1/3">
        <h1 className="text-4xl">Life-Game</h1>
      </div>
      <div className="w-1/3 text-center">
        <CountUp />
      </div>
      <div className="w-1/3 flex flex-nowrap justify-end items-center space-x-4 text-2xl">
        <p className="flex">
          Rows:{" "}
          <span className="min-w-[2rem] text-slate-600">&nbsp;{rows}</span>
        </p>
        <p className="flex">
          Columns:{" "}
          <span className="min-w-[2rem] text-slate-600">&nbsp;{columns}</span>
        </p>
        <p className="flex">
          Life:{" "}
          <span className="min-w-[3rem] text-red-600">&nbsp;{lifeCells}</span>
        </p>
        <p className="flex">
          Die:{" "}
          <span className="min-w-[3rem] text-blue-600">&nbsp;{dieCells}</span>
        </p>
        <p className="flex">
          Total:{" "}
          <span className="min-w-[3rem] text-green-600">
            &nbsp;{totalCells}
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
