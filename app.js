console.log("Hello NodeJS!")

const fs = require("fs")
// fs.writeFileSync("arquivo.txt", "Hello wolrd!, again")
// fs.appendFileSync("arquivo.txt", "\nIntrodução ao NodeJS!")
// fs.appendFileSync("arquivo.txt", "\nUtilizando uma biblioteca.")

const sh = require("superheroes")
let heroi = sh.random()
console.log(heroi)
fs.appendFileSync("arquivo.txt", "\n"+heroi)