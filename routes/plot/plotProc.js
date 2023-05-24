const { spawn } = require("child_process");
const path = require("path");
function plotXDependent(
  equation,
  ymin = -10,
  ymax = 10,
  xmin = -10,
  xmax = 10,
  w = 400,
  h = 400,
  res
) {
  const proc = spawn(
    process.cwd() + "/binaries/graph",
    [
      '-e="' + equation + '"',
      '-y="' + ymin + '"',
      '-Y="' + ymax + '"',
      '-x="' + xmin + '"',
      '-X="' + xmax + '"',
      '-w="' + w + '"',
      '-h="' + h + '"',
      '-p="' + process.cwd() + "/static/data/graphs/" + Date.now() + '.png"',
    ],
    { shell: true }
  );

  // console.log(proc);
  proc.stderr.setEncoding("utf8");
  proc.stdout.setEncoding("utf8");

  proc.stdout.on("data", (data) => {
    res.sendFile(data.trim());
  });

  proc.stderr.on("data", (data) => {
    res.send(data);
  });
}

function plotYDependent() {}

function plotXYDependent() {}

module.exports = { plotXDependent };
