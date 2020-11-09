import React from "react";
import EmployeeForm from "./EmployeeForm";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

function Employee(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.pageContent}>
      <EmployeeForm />
    </Paper>
  );
}

export default Employee;
