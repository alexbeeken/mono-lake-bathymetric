const files = require.context("./svg", false, /\.svg$/);
const fileKeys = files.keys()
const svgs = fileKeys.map(files)

function formatKey(key) {
  return key.match(/[^./svg]\d\d\d\d/)[0]
}

const levels = () => {
  let output = {}
  svgs.forEach((svg, i) => {
    output[formatKey(fileKeys[i])] = svg
  })
  return output
}

export default levels();
