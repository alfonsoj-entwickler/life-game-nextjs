"use client";
import { useActionConfig } from "@/context/useActionConfig";
import Button from "./Button";
import Switch from "./Switch";
import SelectModel from "./SelectModel";
import useWindowSize from "@/hooks/useWindowSize";

const Footer = () => {
  const { stateAnimations, stateLayer, setAnimation, setLayer, resetCells } = useActionConfig();
  const windowSize = useWindowSize();

  return (
    <footer className="fixed bottom-0 w-screen h-16 text-gray-900 bg-[#23d5ab] z-10">
      <div className="h-full flex justify-between items-center space-x-6 px-10">
        <div>
          <SelectModel />
        </div>
        <div className="flex space-x-6">
        <Button text="Reset" onClick={ e => resetCells(windowSize.width, windowSize.height)}>
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
        <Button text="Play">
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
        <Button text="Pause">
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
        </div>
        <div className="flex space-x-6">
        <Switch
          onText="On Animation"
          offText="Off Animation"
          statusChecked={stateAnimations}
          handlerChange={setAnimation}
        />
        
        <Switch
          onText="Disable Layer"
          offText="Enable Layer"
          statusChecked={stateLayer}
          handlerChange={setLayer}
        />
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;
