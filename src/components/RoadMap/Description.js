import classes from "./Description.module.css";

import Img from "../../assets/Imgs/Pictures/Bg.jpg";

const Description = () => {
  return (
    <div className={classes.discription}>
      <div className={classes.img}>
        <div
          style={{
            backgroundImage: ` url(${Img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
      {/* <div className={classes.text}>
        <h3>Description :</h3>
        <p>
          You can earn XP by either inviting friends who create characters OR by
          finishing off vile bosses in the RPG realm. You can only fight a boss
          once every few hours so it would be in your best interest to invite as
          many friends as you can and get a jump on the race to finishing off
          the level 20 boss. Especially considering whoever defeats him first
          will recieve the whole rewards pool!!
        </p>
      </div> */}
    </div>
  );
};

export default Description;
