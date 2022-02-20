import { makeStyles, Theme } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: 9999
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflowY: "auto",
    overflowX: "hidden"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
