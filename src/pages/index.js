import { Header } from "../components/Header";
import styles from "/src/styles/Home.module.scss";
import { Fireworks } from "@fireworks-js/react";
import { Footer } from "../components/Footer";
import { Home as HomeComponent } from "/src/components/Home";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Fireworks options={options} style={style}></Fireworks>
      <HomeComponent />
      <Footer />
    </div>
  );
}

const options = {
  particles: 200,
  trace: 4,
  opacity: 0.5,
  traceSpeed: 10,
  acceleration: 1.02,
  friction: 0.97,
  hue: {
    min: 0,
    max: 360,
  },
  delay: {
    min: 30,
    max: 60,
  },
  rocketsPoint: {
    min: 50,
    max: 50,
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3,
    },
    trace: {
      min: 1,
      max: 2,
    },
  },
  mouse: {
    click: true,
    max: 1,
  },
  sound: {
    enabled: false,
    files: [
      "https://fireworks.js.org/sounds/explosion0.mp3",
      "https://fireworks.js.org/sounds/explosion1.mp3",
      "https://fireworks.js.org/sounds/explosion2.mp3",
    ],
    volume: {
      min: 1,
      max: 2,
    },
  },
};

const style = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: 50,
};
