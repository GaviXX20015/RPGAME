import classes from "./Bosses.module.css";

import B1 from "../../assets/Imgs/Pictures/B1.png";
import B2 from "../../assets/Imgs/Pictures/B2.png";
import B3 from "../../assets/Imgs/Pictures/B3.png";


const Bosses = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <div className={classes.img}>
          <div
            style={{
              backgroundImage: `url(${B1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
      <div className={classes.background2}>
        <div className={classes.img}>
          <div
            style={{
              backgroundImage: `url(${B2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
      <div className={classes.background3}>
        <div className={classes.img}>
          <div
            style={{
              backgroundImage: `url(${B3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Bosses;
