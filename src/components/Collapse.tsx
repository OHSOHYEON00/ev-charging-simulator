import React, { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  const toggleCollapse = () => {
    setIsOpen((pre) => !pre);
  };

  return (
    <section>
      <div onClick={toggleCollapse}>
        <img
          className={` inline ${isOpen ? "rotate-0" : "rotate-180"}`}
          src={DirectionIcon}
          alt={"collapse"}
          width={30}
          height={30}
        />
        {title}
      </div>

      <div className={`hidden`}>{children}</div>
    </section>
  );
};

export default Collapse;
