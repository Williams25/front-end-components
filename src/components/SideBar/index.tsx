import { useState, ReactNode } from "react";
import { useStyles } from "./styles";
import {
  useTheme,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import { Close, Menu } from "@material-ui/icons";
import { Items } from "./Items";

type SideBarProps = {
  children: ReactNode;
  data: {
    label: string;
    path: string;
  }[];
};

export const SideBar = ({ children, data }: SideBarProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpenAndClose = (): void => {
    setOpen((open) => !open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        classes={{
          root: classes.appBar,
        }}
        style={{ zIndex: 9999 }}
      >
        <Toolbar>
          {!open && (
            <IconButton
              onClick={handleDrawerOpenAndClose}
              style={{ marginRight: "0.5rem" }}
            >
              <Menu style={{ color: "#fff" }} />
            </IconButton>
          )}

          <Typography variant="h6" noWrap>
            Front-end components
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid
        container
        direction="row"
        wrap="nowrap"
        style={{ zIndex: 1, minHeight: "100vh" }}
      >
        {open && (
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            style={{ zIndex: 1 }}
          >
            <Toolbar style={{ zIndex: 1 }} />

            <div
              className={classes.drawerContainer}
              style={{ zIndex: 1, minHeight: "100vh" }}
            >
              <div
                className={classes.drawerContainerButton}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  width: "100%",
                  margin: "0.5rem 0",
                  zIndex: 1,
                }}
              >
                <IconButton
                  className={classes.menuButton}
                  onClick={handleDrawerOpenAndClose}
                >
                  <Close style={{ color: "#000" }} />
                </IconButton>
              </div>
              <Items data={data} />
            </div>
          </Drawer>
        )}
        <Toolbar />

        <main style={{ flexGrow: 1, minHeight: "100vh" }}>
          <Toolbar />
          <div className={classes.drawerHeader} />
          {children}
        </main>
      </Grid>
    </div>
  );
};
