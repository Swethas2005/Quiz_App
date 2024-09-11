import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

export default function ResultTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      (res) => {
        setData(res);
      }
    );
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td> {/* Fixed typo from "Attemps" to "Attempts" */}
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? ( // Conditional rendering corrected
            <tr>
              <td colSpan="4">No Data Found</td>
            </tr>
          ) : (
            data.map((v, i) => (
              <tr className="table-body" key={i}>
                <td>{v?.username || ""}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achieved || ""}</td>{" "}
                {/* Fixed typo from "achived" to "achieved" */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
