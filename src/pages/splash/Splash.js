import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import AnimatedSplash from "../../components/Loader/AnimatedSplash.jsx"; // ✅ imported video splash

// ⬇️ Renamed this from AnimatedSplash → SplashScreen
function SplashScreen(props) {
  return (
    <div className="logo_wrapper">
      <div
        className="screen"
        style={{
          backgroundColor: "#3c0a19",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <AnimatedSplash onFinish={props.onFinish} />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <SplashScreen
        theme={this.props.theme}
        onFinish={() => this.setState({ redirect: true })}
      />
    );
  }
}

export default Splash;
