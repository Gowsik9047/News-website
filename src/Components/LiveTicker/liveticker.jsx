import React from "react";

function LiveTicker() {
  return (
    <div className="live-header">
      <button className="live">LIVE</button>
      <marquee behavior="scroll" direction="left">
        உடனடி: மைல்கல் சிவில் உரிமைகள் வழக்கில் நீதிமன்ற தீர்ப்பு
      </marquee>
      <i className="fa-solid fa-close"></i>
    </div>
  );
}
export default LiveTicker;
