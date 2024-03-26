import classes from "./RoadMap.module.css";

import { Fade } from "react-reveal";

import FrontWave from "../../assets/Imgs/Backgrounds/roadMapFront.svg";
import BackWave from "../../assets/Imgs/Backgrounds/roadMapBack.svg";

import Hero from "./Hero-Card";
import Bosses from "./Bosses";
import Token from "./Token";
import Description from "./Description";

import Wizard from "../../assets/Imgs/Pictures/Wizard.jpg";
import Warrior from "../../assets/Imgs/Pictures/Warrior.jpg";
import Archer from "../../assets/Imgs/Pictures/Archer.jpg";

import Leaderboard from "../Leaderboard/Leaderboard";

const heros = [
  {
    hero: "Wizard",
    about:
      "Starts strong with a 10% boost on Boss 1, gradually decreasing by 0.5% per subsequent boss. Ideal for early game challenges.",
    img: Wizard,
  },
  {
    hero: "Warrior",
    about:
      "Consistently gains a 3% boost on every boss, offering a well-balanced advantage throughout the game.",
    img: Warrior,
  },
  {
    hero: "Archer",
    about:
      "Starts with a 0.5% boost at Level 1, but its boost grows gradually by an additional 0.5% for subsequent bosses.",
    img: Archer,
  },
];

const RoadMap = () => {
  return (
    <div id="map" className={classes.roadMap}>
      <img id={classes.back} className={classes.wave} src={BackWave} />
      <img id={classes.front} className={classes.wave} src={FrontWave} />
      <div className={classes.content}>
        <Fade>
          <h4>Buy $RPG!</h4>
          <h2>Begin Your Epic Conquest</h2>
        </Fade>
        <div className={classes.heros}>
          <Fade left>
            <h5 className={classes["small-title"]}>Begin your conquest with</h5>
            <h3 className={classes["big-title"]}>RPG Heroes</h3>
          </Fade>
          <Fade bottom>
            <div className="row">
              {heros.map((hero, index) => {
                return (
                  <Hero hero={hero.hero} about={hero.about} img={hero.img} />
                );
              })}
            </div>
          </Fade>
          <Fade bottom>
            <p className={classes.about}>
              Select Your Hero Class: <span>Warrior</span>, <span>Archer</span>,
              or <span>Wizard</span>. Unleash their unique powers and conquer
              the RPG realm!
            </p>
          </Fade>
        </div>
        <div className={classes.bosses}>
          <Fade bottom>
            <h5 className={classes["small-title"]}>Unleash Heroes to Attack</h5>
            <h3 className={classes["big-title"]}>RPG Bosses</h3>
          </Fade>
          <Fade>
            <Bosses />
          </Fade>
          <Fade bottom>
            <p className={classes.about}>
              Lead a <span>RPG Hero</span> in RPG's epic battles. Plan strategic
              attacks, utilize unique abilities, and conquer formidable{" "}
              <span>RPG Bosses</span>. With each victorious encounter, earn{" "}
              <span>$RPG</span> rewards, and ascend through the ranks. Can you
              lead your RPG Heroes to triumph against{" "}
              <span>the ultimate challenge</span> of defeating all 20 bosses and
              claiming over 100k in RPG tokens?
            </p>
          </Fade>
        </div>
        {/* <div>
          <Fade bottom>
            <h5 className={classes["small-title"]}>MAX BOSS LEVEL</h5>
            <h3 className={classes["big-title"]}>LEADERBOARD</h3>
          </Fade>
          <Leaderboard />
        </div> */}
        <div id="token" className={classes.enhancement}>
          <Fade right>
            {" "}
            <h5 className={classes["small-title"]}>
              Treasures behind every cavern:
            </h5>
            <h3 className={classes["big-title"]}>RPG Token</h3>
          </Fade>

          <Fade bottom>
            <Token />
          </Fade>
        </div>
        {/* <div className={classes.description}>
          <Fade bottom>
            <Description />
          </Fade>
        </div> */}
      </div>
    </div>
  );
};

export default RoadMap;
