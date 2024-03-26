import classes from "./More.module.css";

import { Fade } from "react-reveal";

import Logo from "../../assets/Imgs/Pictures/Logo2.png";
import BackWave from "../../assets/Imgs/Backgrounds/moreBack.svg";
import FrontWave from "../../assets/Imgs/Backgrounds/moreFront.svg";
import Background from "../../assets/Imgs/Backgrounds/FooterBackground.jpg";

const More = () => {
  return (
    <div id="more" className={classes.more}>
      <img id={classes.back} className={classes.wave} src={BackWave} />
      <img id={classes.front} className={classes.wave} src={FrontWave} />
      <div className={classes.img}>
        <div
          style={{
            backgroundImage: `linear-gradient( rgba(21, 0, 80, 1), rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 0.35) ) ,url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div className={classes["card-container"]}>
            <Fade bottom>
              <div className={classes.card}>
                <div className={classes["card-header"]}>Learn More</div>
                <div className={classes["card-body"]}>
                  <h2>Get in the Telegram!</h2>
                  <p>
                    Do you want to join us and start your own adventure? Press
                    the button if you are sure you are ready to defeat the
                    bosses.
                  </p>
                  <button>
                    <a target="_blank" href="https://telegram.me/RPGonSolanaBot">
                      GO!
                    </a>
                  </button>
                </div>
                <img className={classes.logo} src={Logo} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
