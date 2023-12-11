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
      <div className="w-1/3 flex flex-nowrap justify-end items-center space-x-4 text-3xl">
        <p className="flex items-end space-x-2">
          <span className="block mb-1 text-sm underline">Rows:</span>
          <span className="min-w-[2rem] text-slate-600">{rows}</span>
        </p>
        <p className="flex items-end space-x-2">
          <span className="block mb-1 text-sm underline">Columns:</span>
          <span className="min-w-[2rem] text-slate-600">{columns}</span>
        </p>
        <p className="flex items-end space-x-2">
          <span className="block mb-1 text-sm underline">Life:</span>
          <span className="min-w-[3rem] text-red-600">{lifeCells}</span>
        </p>
        <p className="flex items-end space-x-2">
          <span className="block mb-1 text-sm underline">Die:</span>
          <span className="min-w-[3rem] text-blue-600">{dieCells}</span>
        </p>
        <p className="flex items-end space-x-2">
          <span className="block mb-1 text-sm underline">Total:</span>
          <span className="min-w-[3rem] text-green-600">{totalCells}</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
