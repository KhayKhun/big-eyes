import "./style.css";

const skyLight = "#6BB8FF";
const skyDark = "#291F3D";

const groundLight = "#B1A745";
const groundDark = "#4C4824";

const mountain1Light = "#488333";
const mountain2Light = "#57A83A";
const mountain3Light = "#346722";
const mountain1Dark = "#18310F";
const mountain2Dark = "#244419";
const mountain3Dark = "#0E2307";

const btn = document.getElementById("btn");
const starGroup = document.getElementById("star-group");
const sun = document.getElementById("sun");
const frame = document.getElementById("frame");
const ground = document.getElementById("ground");
const mountain1 = document.getElementById("mountain1");
const mountain2 = document.getElementById("mountain2");
const mountain3 = document.getElementById("mountain3");
const sky = document.getElementById("sky");
const moon = document.getElementById("moon");
const cloud = document.getElementById("cloud");

let isDay = true;

function DayNightToggle() {
  if (isDay) { //night
    sun.style.transform = "translate(0,300px)";
    cloud.style.transform = "translate(-500px,0)";
    moon.style.transform = "translate(0,0)";
    sky.style.fill = skyDark;
    mountain1.style.fill = mountain1Dark;
    mountain2.style.fill = mountain2Dark;
    mountain3.style.fill = mountain3Dark;
    ground.style.fill = groundDark;

    frame.style.stroke = '#aaa';
    starGroup.style.opacity = 100;

  } else { //day
    sun.style.transform = "translate(0,0)";
    cloud.style.transform = "translate(0,0)";
    moon.style.transform = "translate(0,300px)";
    sky.style.fill = skyLight;
    mountain1.style.fill = mountain1Light;
    mountain2.style.fill = mountain2Light;
    mountain3.style.fill = mountain3Light;
    ground.style.fill = groundLight;

    frame.style.stroke = "#fff";
    starGroup.style.opacity = 0;
  }
  isDay = !isDay;
}

btn.addEventListener("click", DayNightToggle);
