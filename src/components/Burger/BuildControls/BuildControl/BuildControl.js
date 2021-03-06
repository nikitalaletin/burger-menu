import React from "react";
import classes from "./BuildControl.css";

const buildCoontrol = props => (
  <div lassName={classes.buildCoontrol}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);

export default buildCoontrol;
