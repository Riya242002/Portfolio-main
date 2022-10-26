import React from "react";
import classes from "./OnlineHandles.module.css";

const OnlineHandle = () => {
  return (
    <div className={classes.Skills}>
      <h1>Online Profiles</h1>
      <p style={{ lineHeight: "50px" }}>
        <i>Click to visit profiles</i>
      </p>
      <div className={classes.SkillsContent}>
        <div>
          <a>LeetCode</a>
        </div>
        <div>
          <a>Codeforces</a>
        </div>
      </div>
    </div>
  );
};

export default OnlineHandle;
