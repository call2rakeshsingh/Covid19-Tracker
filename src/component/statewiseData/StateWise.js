import React, { useEffect, useState } from "react";

function StateWise() {
  const [datas, setDatas] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    setDatas(actualData.statewise);
    console.log(datas);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid container mt-5">
        <div className="main-heading">
          <h1 className="mt-5 text-center">
            <span className="fw-bolder">India</span> Covid-19 Tracker
          </h1>
        </div>

        <div className="table-responsive mt-5">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated Time</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((val, index) => {
                return (
                  <tr>
                    <td>{val.state}</td>
                    <td>{val.confirmed}</td>
                    <td>{val.recovered}</td>
                    <td>{val.deaths}</td>
                    <td>{val.active}</td>
                    <td>{val.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StateWise;
