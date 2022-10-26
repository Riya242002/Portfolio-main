import React from "react";
import classes from "./Certifications.module.css";
import { connect } from "react-redux";

const Certifications = (props) => {
  const show = (link, type) => {
    if (type === "pdf") props.showPdf(link);
    if (type === "img") props.showImg([link]);
  };

  return (
    <div className={classes.Certifications}>
      <h1>Certifications</h1>
      <p style={{ lineHeight: "50px" }}>
        <i>Click to view certificates</i>
      </p>
      <div className={classes.Certificate}>
        <div
          onClick={() =>
            show("images/Introduction to Algorthms and Analysis.jpg", "img")
          }
        >
          Algorithms | NPTEL
        </div>
        <div onClick={() => show("Pdfs/github.pdf", "pf")}>
          Git and Github | Coursera
        </div>
        <div onClick={() => show("Pdfs/gfgcertiicate.pdf", "pdf")}>
          Data Structures and Algorithms | GeeksforGeeks
        </div>
      </div>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => {
  return {
    showPdf: (pdf) =>
      dispatch({
        type: "PDF_VISIBLE",
        pdf: pdf,
      }),
    showImg: (images) =>
      dispatch({
        type: "IMG_VISIBLE",
        images: images ? images : [],
      }),
  };
};
export default connect(null, mapDispatchToprops)(Certifications);
