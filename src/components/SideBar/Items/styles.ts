import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  scrollItems: {
    width: "100%",
    minHeight: "100vh",
    direction: "ltr",
    scrollbarColor: "##ccc #e4e4e4",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#e4e4e4",
      borderRadius: "100px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ccc",
      borderRadius: "10px",
      transition: "background 0.2s",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      borderRadius: "100px",
      background: "linear-gradient(180deg, #ccc 0%, ##ccccccaa 99%)",
      boxShadow: "inset 2px 2px 5px 0 rgba(#fff, 0.5)",
    },
    overflowY: "scroll",
    overflowX: "hidden",
  },
  drawer: {
    width: "240px !important",
    flexShrink: 0,
    minWidth: "240px !important",
    maxWidth: "240px !important",
    zIndex: 1,
  },
  drawerPaper: {
    width: "240px !important",
  },
  drawerContainer: {
    width: "100%",
    overflow: "auto",
    // custom scrollbar
    direction: "ltr",
    scrollbarColor: "#ccccccaa #e4e4e4aa",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#e4e4e4",
      borderRadius: "100px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ccccccaa",
      borderRadius: "10px",
      transition: "background 0.2s",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      borderRadius: "100px",
      background: "linear-gradient(180deg, #ccccccaa 0%, #ccccccaa 99%)",
      boxShadow: "inset 2px 2px 5px 0 rgba(#fff, 0.5)",
    },
  },
}));
