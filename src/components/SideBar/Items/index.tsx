import { Collapse } from "./Collapse";

type ItemsProps = {
  data: {
    title: string;
    type: "button" | "collapse";
    data: {
      href: string;
      text: string;
    }[];
  }[];
};

export const Items = ({ data }: ItemsProps) => {
  return (
    <>
      {data.map((item, index) => (
        <Collapse
          key={`${item.title}-${index}`}
          title={item.title}
          data={item.data}
        />
      ))}
    </>
  );
};
