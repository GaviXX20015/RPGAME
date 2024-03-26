import classes from "./Token.module.css";

import Img1 from "../../assets/Imgs/Pictures/Enhancement.jpg";
import Img2 from "../../assets/Imgs/Pictures/Dragon.jpg";

const Token = () => {
  return (
    <div className="row ">
      <div className="col-lg-6">
        <div id={classes.img1} className={classes.img}>
          <div
            style={{
              backgroundImage: `linear-gradient( rgba(21, 0, 80, 1), rgba(0, 0, 0, 0.5) ) , url(${Img1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <p>
              $RPG is the lifeblood Token of the ecosystem! Use it to buy
              new heroes across three distinct classes and unleash their power
              in your adventures. This token will also be the treasure you seek
              in your adventures!
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div id={classes.img2} className={classes.img}>
          <div
            style={{
              backgroundImage: `linear-gradient( rgba(21, 0, 80, 1), rgba(0, 0, 0, 0.5) ) , url(${Img2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <p>
              Every Boss will offer an $RPG reward claim the first time they are
              defeated. Every consecutive boss will offer an increased amount of
              $RPG to the Boss prior to them. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
