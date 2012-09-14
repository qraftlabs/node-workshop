var args = process.argv.splice(2,3),
  module = args[0],
  exercise = args[1],
  runSolved = !!args[2];

var exec = require("child_process").exec,
    path = require("path"),
    exerciseFile = path.join(__dirname, "Modulo-" + module, exercise, 
          runSolved ?  "solucion.js" : "ejercicio.js");


require(exerciseFile);

// console.log("running:\n node " + exerciseFile);

// var proc = exec("node " + exerciseFile); 

// proc.stdout.pipe(process.stdout);
// proc.stderr.pipe(process.stderr);
// process.stdin.pipe(proc.stdin);