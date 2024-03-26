import classes from "./Header.module.css";

import Fade from "react-reveal/Fade";

import Logo from "../../assets/Imgs/Pictures/logo.png";
import ParallaxBg from "../../assets/Imgs/Backgrounds/HeaderBanner.jpg";
import WaveFront from "../../assets/Imgs/Backgrounds/waveFront.svg";
import WaveBack from "../../assets/Imgs/Backgrounds/waveBack.svg";

const Header = (props) => {
  return (
    <header className={classes.parallax}>
      <nav className={classes["primary-header"]}>
        <Fade>
          <div className={classes["nav"]}>
            <img id={classes.logo} src={Logo} alt="" />
            <ul className={classes.navbar}>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#token">TOKEN</a>
              </li>
              <li>
                <a target="_blank" href="https://rpg-3.gitbook.io/rpg/">
                  WHITEPAPER
                </a>
              </li>
              <li className="d-md-block d-none">
                <a
                  href="#"
                  onClick={() => {
                    props.OnChangePageHandler();
                  }}
                >
                  LEADERBOARD
                </a>
              </li>
            </ul>
            <ul className={classes.icons}>
              <li>
                <a target="_blank" href="https://twitter.com/RPGonSolana">
                  <i class="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://telegram.me/RPGonSolanaBot">
                  <i class="bi bi-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
        </Fade>
      </nav>
      <div className={classes.header}>
        <Fade>
          <h1 className={classes["header-title"]}>
            <span>UNLEASH THE ADVENTURE!</span>
            <br /> MONSTER HUNT <br /> FOR EVERYONE!
          </h1>
          <a
            id={classes["btn-1"]}
            className={classes.button}
            target="_blank"
            href="https://telegram.me/RPGonSolanaBot"
          >
            START RAIDING
          </a>
          <a
            id={classes["btn-2"]}
            className={classes.button + " d-md-none d-block mt-4"}
            href="#"
            onClick={() => {
              props.OnChangePageHandler();
            }}
          >
            LEADERBOARD
          </a>
        </Fade>
      </div>
      <div className={classes["parallax-bg"]}>
        <div
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 0.35) ) , url(${ParallaxBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "70% 30%",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
      <img
        className={
          classes["parallax-foreground-back"] + " " + classes["parallax-imgs"]
        }
        src={WaveBack}
      />
      <img
        className={
          classes["parallax-foreground-front"] + " " + classes["parallax-imgs"]
        }
        src={WaveFront}
      />
      {/* <a href="#about" className={classes["down-container"]}>
        <input type="checkbox" checked="checked" />
        <svg
          className={classes["chevron-right"]}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
        </svg>
        <svg
          className={classes["chevron-down"]}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </a> */}
    </header>
  );
};

export default Header;
