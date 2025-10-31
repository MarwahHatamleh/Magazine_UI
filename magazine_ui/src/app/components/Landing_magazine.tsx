const Landing_magazine = () => {
  return (
    <>
      <div className="slider">
        <div className="slides">
          <div className="slide s1">
            <div className="wrapper">
              <div className="one">
                {" "}
                <img src="one.jpg" alt="" />
              </div>
              <div className="two">
                {" "}
                <img src="two.jpg" alt="" />
              </div>
              <div className="three">
                {" "}
                <img src="three.jpg" alt="" />
              </div>
              <div className="four">
                {" "}
                <img src="four.jpg" alt="" />
              </div>
              <div className="five">
                {" "}
                <p>
                  YOU'LL NEVER FEEL READY.<span className="do_it">DO IT</span>{" "}
                  <span>ANYWAY</span>
                </p>
              </div>
            </div>
          </div>
          <div className="slide s2">
            <div className="wrapperSlideTwo">
              <div className="oneSlide_2">
                {" "}
                <img src="slide2.jpg" alt="" />
              </div>
              <div className="twoSlide_2">
                {" "}
                <p>
                  LETS DO <span className="str">SOMETHING</span> AMAZING{" "}
                  <span className="str">TOGATHER</span>
                </p>
              </div>
            </div>
          </div>
          <div className="slide s3">
            <div className="wrapperSlideThree">
              <div className="oneSlide_3">
                {" "}
                <p className="think">Think</p>
              </div>
              <div className="twoSlide_3">
                {" "}
                <img src="five.jpg" alt="" />
              </div>

              <div className="threeSlide_3">
                {" "}
                <p className="bigger">BIGGER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing_magazine;
