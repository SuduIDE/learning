import { say } from "./lib.js"

const argv = process.argv

if(argv.length > 2)
    say(argv[2]) ;
else say("C")