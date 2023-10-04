"use client";
import { useActionAnimation } from "@/context/useActionAnimation";
import Button from "./Button";
import Switch from "./Switch";

const Footer = () => {
  const { stateAnimations, setAnimation } = useActionAnimation(); 
  return (
    <footer className="fixed bottom-0 w-screen h-16 text-gray-900 bg-yellow-100 z-10">
      <div className="h-full flex justify-center items-center space-x-4">
        <Switch text="Toggle Animation" statusChecked={stateAnimations} handlerChange={setAnimation} />
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
