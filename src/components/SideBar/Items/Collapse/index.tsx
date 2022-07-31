import { useState } from "react";
import { Details } from "./styles";
import Link from "next/link";

type CollapseProps = {
  title: string;
  data: {
    href: string;
    text: string;
  }[];
};

export const Collapse = ({ title, data }: CollapseProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setExpanded((e) => !e);
  };

  return (
    <Details aria-expanded={expanded}>
      <summary onClick={handleClick}>{title}</summary>
      <ul
        className={
          expanded
            ? "active-animation-details-summary"
            : "hidden-animation-details-summary"
        }
      >
        {data.map((item, index) => (
          <li key={`${item.text}-${index}`}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </Details>
  );
};
