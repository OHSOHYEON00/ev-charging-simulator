import React, { useState } from "react";
import DirectionIcon from "assets/direction.png";

interface PCollapse {
  title: string;
  defaultOpen?: boolean;
  maxH?: "max-h-96" | "max-h-screen";
}

const Collapse = ({
  children,
  defaultOpen = false,
  title,
  maxH = "max-h-screen",
}: React.PropsWithChildren<PCollapse>) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex flex-col pt-4 text-lg font-semibold mb-8">
      {/* Header */}
      <div
        onClick={toggleCollapse}
        className="cursor-pointer flex items-center bg-zinc-100 drop-shadow-sm p-4"
      >
        <img
          className={`transition-transform duration-300 mr-4 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
          src={DirectionIcon}
          alt="collapse"
          width={20}
          height={20}
        />
        {title}
      </div>

      {/* Collapsible Content */}
      <div
        className={` transition-[max-height] duration-500 ease-in-out ${
          isOpen ? `${maxH} overflow-auto` : "max-h-0 overflow-hidden"
        } bg-white px-8 text-base font-normal `}
      >
        <div className="pt-4">{children}</div>
      </div>
    </section>
  );
};

export default Collapse;
