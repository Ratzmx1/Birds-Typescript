var React = require("react-native"),
  Dimensions = React.Dimensions,
  { width, height } = Dimensions.get("window");

const vwa = width / 100;

const vha = height / 100;

var units = {
  vw: vwa / 100,
  vh: vha / 100,
  vmin: Math.min(vwa, vha),
  vmax: Math.max(vwa, vha),
};

export default units;
