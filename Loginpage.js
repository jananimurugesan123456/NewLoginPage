import React from "react";
// import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Loginpage = () => {
  return (
    <div className="fullScreen">
      <div className="container">
        <div className="div1">
          <img
            src="https://t4.ftcdn.net/jpg/05/18/34/87/360_F_518348794_aBZCCWDKIc4xbF1YEGMB4OAyP6yHomUw.jpg"
            height={80}
            width={80}
          />

          <h3>
            A platform to build and <br></br>discover games that have
          </h3>
          <h1 className="bluecontent">
            a Positive impact <br></br>on mental health<br></br> and well being
          </h1>
        </div>
        <div className="div22">
          <h2 className="signinheading">Sign in</h2>
          <hr></hr>
          <div className="div2">
            <div>
              {/* <i class="bx bxs-user-circle"></i> */}
              <input type="email" placeholder="Email" />
              {/* <img
                src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
                height="20px"
                width="20px"
              /> */}

              <div class="icon">
                <FontAwesomeIcon icon="fa-solid fa-user" />
              </div>
            </div>
            <div>
              <i class="bx bxs-lock-alt"></i>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="forgot1">
            <a>Forgot password?</a>
          </div>

          <button className="signinbutton">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
