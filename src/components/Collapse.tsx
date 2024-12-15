import React, { useState } from "react";
import DirectionIcon from "assets/direction.png";

interface PCollapse {
  title: string;
  defaultOpen?: boolean;
}

const Collapse = ({
  children,
  defaultOpen = false,
  title,
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
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } bg-white px-8 text-base font-normal `}
      >
        <div className="pt-4">{children}</div>
      </div>
    </section>
  );
};

export default Collapse;
