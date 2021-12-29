import { useState, ReactNode } from "react";
import { useStyles } from "./styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Grid,
  Container,
  Typography,
  Drawer,
} from "@material-ui/core";
import { Items } from "./Items";

type SideBarProps = {
  children: ReactNode;
  data: {
    title: string;
    type: "button" | "collapse";
    data: [
      {
        href: string;
        text: string;
        paths: [{ path: string; type: "dynamic" | "static" }];
      }
    ];
  }[];
};

export const SideBar = ({ children, data }: SideBarProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);

  const handleDrawerOpenAndClose = (): void => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
          style={{ zIndex: 9999 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Front-end components
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <Items data={data} />
            </div>
          </Drawer>
          <Container
            style={{ maxWidth: "1280px", marginRight: 0, marginTop: "2rem" }}
          >
            <main className={classes.content}>
              <Toolbar />
              {children}
            </main>
          </Container>
        </Grid>
      </div>
    </>
  );
};
