import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import Link from "next/link";

type ItemsProps = {
  data: {
    label: string;
    path: string;
  }[];
};

export const Items = ({ data }: ItemsProps) => {
  return (
    <List style={{ width: 240, overflowX: "hidden" }}>
      {data.map((item, index) => (
        <Link href={item.path} key={index} passHref>
          <ListItem button>
            <ListItemText primary={item.label} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
