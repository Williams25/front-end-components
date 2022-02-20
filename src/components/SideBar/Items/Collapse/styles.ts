/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { withStyles, makeStyles, Theme } from "@material-ui/core";
import {
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Accordion as MuiAccordion
} from "@material-ui/core";

export const Accordion = withStyles({
  root: {
    overflow: "hidden",
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    },
    backgroundColor: "#fff"
  },
  expanded: {}
})(MuiAccordion);

export const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#fff",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    },
    transition: "filter 0.2s",
    "&:hover": {
      filter: "brightness(96%)"
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme: Theme) => ({
  root: {
    padding: "0 !important",
    display: "flex",
    flexDirection: "column"
  }
}))(MuiAccordionDetails);

export const useStyles = makeStyles((theme: Theme) => ({
  accordionDark: {
    backgroundColor: "#212121",
    "& svg": {
      color: "#fafafa"
    }
  },
  accordion: {}
}));
