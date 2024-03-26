import classes from "./About.module.css";

import Fade from "react-reveal/Fade";

import Img1 from "../../assets/Imgs/Backgrounds/HeaderBanner1.jpg";
import Gold from "../../assets/Imgs/Pictures/Gold.jpg";

const About = () => {
  return (
    <div id="about" className={classes.About}>
      <div className="row m-0">
        <Fade bottom>
          <div className="col-lg-6 mb-lg-5">
            <div className={classes.img + " " + classes.left}>
              <div
                style={{
                  backgroundImage: `url(${Img1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="col-lg-6 mb-lg-5">
            <div className={classes.Text + " " + classes.right}>
              <h2>Ready for Glory?</h2>
              <h3>Dive into RPG adventure Now!</h3>
              <p>
                Race to conquer the level 20 boss in RPG, the Telegram-based
                quest! Pick your hero, strategize your battles, and vie for
                triumph to seize the entire $RPG reward pool. Are you prepared
                to ascend and become the ultimate champion?
              </p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="col-lg-6 mt-lg-5">
            <div className={classes.Text + " " + classes.left}>
              <h2>Defeat Bosses</h2>
              <h3>Earn $RPG!</h3>
              <p>
                You can earn XP by either inviting friends who create characters
                OR by finishing off vile bosses in the RPG realm.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-5">
            <div className={classes.img + " " + classes.right}>
              <div
                style={{
                  backgroundImage: `url(${Gold})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
