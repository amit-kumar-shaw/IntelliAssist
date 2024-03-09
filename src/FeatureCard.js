import React from "react";
import { Container, Table } from "react-bootstrap";
import { COLORS, OPTION } from "./colors";

let textColor = COLORS[OPTION].text;
let backgroundColor = COLORS[OPTION].back;
let primaryColor = COLORS[OPTION].primary;
let secondaryColor = COLORS[OPTION].secondary;
let accentColor = COLORS[OPTION].accent;

function FeatureCard({ title, description, boxHeight }) {
  return (
    <>
      <div
        style={{
          padding: "8px",
          width: "100%",
          height: boxHeight,
          backgroundColor: lightenColor(primaryColor, 0.8),
          borderRadius: "8px",
          margin: "8px",
        }}
      >
        <div>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {title}
        </h4>
        <div  style={{
          height: "2px",
          backgroundColor: accentColor,
          borderRadius: "8px",
          margin: "8px",
        }}></div>
        </div>
        <h5
          style={{
            display: "flex",
            padding: "16px",
          }}
        >
          {description}
        </h5>
      </div>
    </>
  );
}

function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    // 3 digits
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    // 6 digits
    else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return [r, g, b];
}

function lightenColor(hex, percent) {
    const [r, g, b] = hexToRgb(hex);
    const newR = Math.round(r + (255 - r) * percent);
    const newG = Math.round(g + (255 - g) * percent);
    const newB = Math.round(b + (255 - b) * percent);
    return `rgb(${newR}, ${newG}, ${newB})`;
}



export default FeatureCard;
