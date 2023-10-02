"use client";
import { useActionAnimation } from "@/context/useActionAnimation";
import Button from "./Button";
const Footer = () => {
  const { stateAnimations, setAnimation } = useActionAnimation(); 
  return (
    <footer className="fixed bottom-0 w-screen h-16 text-gray-900 bg-yellow-100 z-10">
      <div className="h-full flex justify-center items-center space-x-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={stateAnimations} onChange={e => setAnimation()} />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium">
            Toggle Animation
          </span>
        </label>
        <Button text="Reset">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
