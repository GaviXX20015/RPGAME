import classes from "./Hero-Card.module.css";

const Hero = (props) => {
  return (
    <div className="col-lg-4">
      <div id={classes.hero}>
        <div className={classes.background}>
          <div className={classes.img}>
            <div
              style={{
                backgroundImage: `url(${props.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>
          <div className={classes.text}>
            <h3>{props.hero}</h3>
            <p>{props.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
