const Team = require("./team.js");

const fs = require("fs");// Requiring the filesystem module

const team = new Team("TopSecret");

// read the file input from members.txt
const lineReader = require('readline').createInterface({
    input: fs.createReadStream('members.txt')
});

lineReader
    .on('line', function (line) {
        const teamMember = line.split(",");
        team.newProgrammer(teamMember[0], teamMember[1], teamMember[2], teamMember[3]);
    })
    .on('close', process);

function process() {
    for (let n=0; n<team.programmers.length; n++){
        console.log(team.programmers[n]);
    }
    console.log(`There are ${team.programmerTotal()} team members`);
}