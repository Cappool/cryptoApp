import React from "react";

const DailyStats = () => {
  return (
    <div className="daily-stats-container gradient-border">
      {/* <div className="metric-container">
        <span className="metric-title">DEDpool Price</span>
        <span className="metric-value">$0.11 USD</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Supported</span>
        <span className="metric-value">9 Chains</span>
      </div> */}
      <div className="metric-container">
        <span className="metric-title">Token Supply</span>
        <span className="metric-value">400,000,000,000,000</span>
      </div>
      {/* <div className="metric-container">
        <span className="metric-title">Total Trades</span>
        <span className="metric-value">$9.123M</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Daily Active Users</span>
        <span className="metric-value">100.k+</span>
      </div> */}
    </div>
  );
};

export default DailyStats;
