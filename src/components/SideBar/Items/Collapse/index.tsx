/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useEffect, useCallback } from "react";
import { Typography } from "@material-ui/core";
import { useState, ReactNode } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useStyles
} from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

type SideBarHref = {
  href: string;
  text: string;

  paths: {
    path: string;
    type: "dynamic" | "static";
  }[];
};

type CollapseProps = {
  title: string;
  sideBar: Array<SideBarHref>;
  isLocal: string;
  children: ReactNode;
  icon?: () => JSX.Element;
};

export const Collapse = ({
  isLocal,
  sideBar,
  title,
  children,
  icon
}: CollapseProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const classes = useStyles();

  const handleClick = () => {
    setExpanded((e) => !e);
  };

  const verificationPath = useCallback(() => {
    const paths = sideBar.map((sideBar) => {
      const isPathExists = sideBar.paths.filter((path) => {
        if (path.type === "dynamic") {
          const newPath = isLocal.split("/");
          return path.path === isLocal.replace(newPath[newPath.length - 1], "");
        }
        if (path.type === "static") {
          return path.path === isLocal;
        }
        return null;
      }).length;
      return isPathExists;
    });

    const newPath = paths.filter((path) => path > 0).length;

    if (newPath > 0) {
      setExpanded(true);
    }
  }, [isLocal]);

  useEffect(() => {
    verificationPath();
  }, [isLocal]);

  return (
    <Accordion
      square
      expanded={expanded}
      onChange={handleClick}
      // TransitionComponent={() => <>{expanded ? children : null}</>}
      className={classes.accordion}
    >
      <AccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header"
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography
          style={{
            fontSize: "0.75rem",
            lineHeight: "2.5",
            fontWeight: 700,
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center"
          }}
        >
          {icon && <>{icon}</>}
          <span style={{ marginLeft: icon && "0.5rem" }}>{title}</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ padding: "0 !important" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
