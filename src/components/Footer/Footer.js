import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="row">
        <ul
          className={
            classes.links + " col-lg-4 col-12 d-flex justify-content-center"
          }
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#token">Token</a>
          </li>
          <li>
            <a href="https://rpg-3.gitbook.io/rpg/">Whitepaper</a>
          </li>
        </ul>
        <div
          className={
            classes.container + " col-lg-4 col-12 d-flex justify-content-center"
          }
        >
          <p>&copy; COPYRIGHT - 2024 RPG</p>
        </div>
        <ul
          className={
            classes.links + " col-lg-4 col-12 d-flex justify-content-center"
          }
        >
          <li className={classes.icon + " me-3"}>
            <a target="_blank" href=" https://twitter.com/RPGonSolana">
              <i class="bi bi-twitter-x"></i>
            </a>
          </li>
          <li className={classes.icon}>
            <a target="_blank" href=" https://telegram.me/RPGonSolanaBot">
              <i class="bi bi-telegram"></i>
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
