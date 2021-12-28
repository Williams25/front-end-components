import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: 1900,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    overflowX: "hidden",
    zIndex: 1,
  },
  drawerPaper: {
    width: drawerWidth,
    overflowX: "hidden",
    position: "relative",
    zIndex: 10,
  },
  drawerContainer: {
    overflow: "auto",
    overflowX: "hidden",
    zIndex: 1,
  },
  drawerContainerButton: {
    "& svg": {
      color: "#000 !important",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    "& svg": {
      color: "#fff",
    },
  },
  hide: {
    display: "none",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  iconWhile: {
    color: "#fff",
  },
  iconDark: {
    color: "#000",
  },
}));
