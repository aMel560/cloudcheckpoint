import facebook from "../public/facebook-logo-16.png";
import instagram from "../public/OIP.jpg";
import google from "../public/review-google.png";
import Login from "./Login";

import SocialMediaBtn from "./socialMediaBtn";
const socialMediaBtn = [
  {
    Image: facebook,
    href: "https://www.facebook.com",
  },
  { Image: instagram, href: "https://instagram.com" },
  { Image: google, href: "https://google.com" },
];

function App() {
  return (
    <div id="main">
      <div className="first">
        <h1>Travelista tour</h1>
        <p>
          Travelis the only purchase that enriches you in ways <br />
          beyond material wealth
        </p>
      </div>
      <div className="second">
        <img id="img4" src="/" alt="" />
        <h1>Welcome</h1>
        <p id="p1">Login with Email</p>
        <div id="form">
          <Login content="Email" Name="E-mail" type="text" />
          <Login content="password" Name="Password" type="password" />

          {/* <form className="form1">
            <label htmlFor="Email id">Email id</label>
            <br />
            <input type="text" />
          </form> */}
          {/* <form className="form2">
            <label htmlFor="Password">Password</label>
            <br></br>
            <input type="number" />
            <br></br>
          </form> */}
          <a>Forget your password?</a>
        </div>

        <div id="btn">
          <button>
            <p id="p2">LOGIN</p>
          </button>
          <p id="p3">OR</p>
        </div>

        <div className="logos">
          {socialMediaBtn.map((elem) => (
            <SocialMediaBtn
              key={elem.Image}
              href={elem.href}
              Image={elem.Image}
            />
          ))}
        </div>
        <p id="p4">Dont have account? Register now</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.614483558218!2d3.0245175752903988!3d36.755823672259744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb33225490931%3A0xcfc19f0953b60033!2sGOMYCODE%20Algeria!5e0!3m2!1sfr!2sdz!4v1715189744315!5m2!1sfr!2sdz"
          width="500"
          height="50"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
