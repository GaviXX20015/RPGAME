import classes from "./Leaderboard.module.css";
import { useState, useEffect, useCallback } from "react";

import { Fade } from "react-reveal";

// const data = [
//   {
//     _id: "65e88af16970115b6b1f6eec",
//     user_id: 488223248,
//     user_name: "m_kevin",
//     max_boss_level: 10,
//   },
//   {
//     _id: "65e88b486970115b6b1f6eee",
//     user_id: 6924178674,
//     user_name: "gojosaturo131",
//     max_boss_level: 3,
//   },
// ];

const Leaderboard = (props) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://rpgleaderboard-2s6wmpgs3q-uc.a.run.app/rpgLeaderBoard",
        {
          headers: {
            Authorization: "Bearer 33524e73a1437568a5c3b5f2d1745207d4cbd9f8",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const RespData = await response.json();
      console.log(RespData);
      setData(RespData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.leaderboard}>
      <Fade>
        <h1 className={classes.title}>LEADERBOARD</h1>
      </Fade>
      <div className={classes.leaderboardList}>
        <Fade>
          <div className={classes.header}>
            <div>RANK</div>
            <div>USERNAME</div>
            <div>LEVEL</div>
          </div>
        </Fade>
        <div>
          {data.map((item, i) => {
            if (i < 10) {
              return (
                <Fade>
                  <div
                    key={i}
                    className={
                      classes.item + " " + (i % 2 != 0 && classes.coloredItem)
                    }
                  >
                    <div>{i + 1}</div>
                    <div>{item.user_name}</div>
                    <div>{item.max_boss_level}</div>
                  </div>
                </Fade>
              );
            }
          })}
        </div>
      </div>
      <Fade>
        {" "}
        <button
          onClick={() => {
            props.OnChangePageHandler("Home");
          }}
          className={classes["home-button"]}
        >
          HOME
        </button>
      </Fade>
    </div>
  );
};

export default Leaderboard;
