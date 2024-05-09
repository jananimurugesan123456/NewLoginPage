import React from "react";

const Bootstrap = () => {
  return (
    <div class="fullScreen">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <img
              src="https://t4.ftcdn.net/jpg/05/18/34/87/360_F_518348794_aBZCCWDKIc4xbF1YEGMB4OAyP6yHomUw.jpg"
              height={80}
              width={80}
            />
            <h3>
              A platform to build and <br></br>discover games that have
            </h3>
            <h1 className="bluecontent">
              a Positive impact <br></br>on mental health<br></br> and well
              being
            </h1>
          </div>
          <div class="col">
            <h2 className="signinheading">Sign in</h2>
            <div>
              {/* <i class="bx bxs-user-circle"></i> */}
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <i class="bx bxs-lock-alt"></i>
              <input type="password" placeholder="Password" />
            </div>
            <h4 className="forgot1">Forgot password?</h4>
            <button className="signinbutton">Sign in</button>
          </div>
          {/* <div className="div1"> */}
          {/* <img
            src="https://t4.ftcdn.net/jpg/05/18/34/87/360_F_518348794_aBZCCWDKIc4xbF1YEGMB4OAyP6yHomUw.jpg"
            height={80}
            width={80}
          /> */}

          {/* <h3>
            A platform to build and <br></br>discover games that have
          </h3> */}
          {/* <h1 className="bluecontent">
            a Positive impact <br></br>on mental health<br></br> and well being
          </h1> */}
          {/* </div> */}
          {/* <div>
          <h2 className="signinheading">Sign in</h2> */}
          {/* <hr></hr> */}
          {/* <div className="div2">
            <div>
              <i class="bx bxs-user-circle"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <i class="bx bxs-lock-alt"></i>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <h4>Forgot password?</h4>

          <button className="signinbutton">Sign in</button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Bootstrap;
