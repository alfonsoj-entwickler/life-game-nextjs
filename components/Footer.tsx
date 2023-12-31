"use client";
import { ChangeEvent } from "react";
import Button from "./Button";
import Switch from "./Switch";
import Select from "./Select";
import useWindowSize from "@/hooks/useWindowSize";
import { useActionConfig } from "@/context/useActionConfig";
import { useLayerConfig } from "@/context/useLayerConfig";
import { valuesModels, valuesSize } from "@/helpers/valuesSelects";

const Footer = () => {
  const { sizeCell, setSizeCells, modelCell, setModelCells, resetCells, loading } = useActionConfig();
  const {
    stateAnimations,
    stateLayer,
    stateWorld,
    stateIndex,
    setAnimation,
    setLayer,
    setWorld,
    setIndex,
    resetClock,
  } = useLayerConfig();

  const windowSize = useWindowSize();

  const handlerSelectModel = (e: ChangeEvent<HTMLSelectElement>) => {
    setModelCells(e.target.value);
  };
  const handlerSelectSize = (e: ChangeEvent<HTMLSelectElement>) => {
    setSizeCells(Number(e.target.value));
    //ToDo: delete reset layer and update cells
    if(e.target.value === "20") {
      setModelCells("c");
    }
    resetCells(windowSize.width, windowSize.height);
  };


  return (
    <footer className="w-screen h-[4rem] text-gray-900 bg-[#23d5ab] z-10">
      <div className="h-full flex items-center space-x-6 px-10">
        <div
          className={`flex items-center w-2/5 space-x-6 ${
            (stateWorld || loading) && "pointer-events-none"
          }`}
        >
          <Select
            id={"size-cell"}
            name={"size"}
            title="Size"
            value={sizeCell}
            options={valuesSize}
            handlerChange={handlerSelectSize}
          />
          <Select
            id={"model-cell"}
            name={"models"}
            title="Model"
            value={modelCell}
            options={valuesModels}
            handlerChange={handlerSelectModel}
          />
          
          <Button
            text="Reset"
            onClick={(e) => {
              resetCells(windowSize.width, windowSize.height);
              resetClock();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </Button>
        </div>
        <div className="flex w-1/5 justify-center">
          <div
            className={`flex w-2/5 justify-end space-x-6 ${
              loading && "pointer-events-none"
            }`}
          >
            {!stateWorld ? (
              <Button
                text="Play"
                onClick={(e) => {
                  setWorld(true);
                  setLayer(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            ) : (
              <Button
                text="Pause"
                onClick={(e) => {
                  setWorld(false);
                  setLayer(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            )}
            </div>
        </div>
        <div
          className={`flex w-2/5 justify-end space-x-6 ${
            (stateWorld || loading) && "pointer-events-none"
          }`}
        >
          <Switch
            onText="On Map"
            offText="Off Map"
            statusChecked={stateIndex}
            handlerChange={setIndex}
          />
          <Switch
            onText="On Animation"
            offText="Off Animation"
            statusChecked={stateAnimations}
            handlerChange={setAnimation}
          />
          <Switch
            onText="Off Layer"
            offText="On Layer"
            statusChecked={stateLayer}
            handlerChange={setLayer}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
