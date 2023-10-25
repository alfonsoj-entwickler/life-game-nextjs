"use client";
import { useActionConfig } from "@/context/useActionConfig";

const Header = () => {
  const { rows, columns, lifeCells, dieCells, totalCells } = useActionConfig();

  return (
    <header className="w-screen h-[4rem] px-10 flex justify-between items-center bg-[#ee7752] text-gray-900 z-10">
      <div className="w-1/3">
        <h1 className="text-4xl">Life-Game</h1>
      </div>
      <div className="w-1/3 text-center">
        <p className="text-2xl">{rows} x {columns}</p>
      </div>
      <div className="w-1/3 flex flex-nowrap justify-end items-center space-x-4 text-2xl">
        <p className="min-w-[3rem]">
          Life: <span className="text-red-600">{lifeCells}</span>
        </p>
        <p>
          Die: <span className="text-blue-600">{dieCells}</span>
        </p>
        <p>
          Total: <span className="text-green-600">{totalCells}</span>
        </p>
      </div>
    </header>
  );
};

export default Header;