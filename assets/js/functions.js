
//  MILESTONE 1
const printTeam = (teamToPrint) => {
    console.log("------------------");
    teamToPrint.forEach((element) => {
        console.log(element.name);
        console.log(element.role);
        console.log(element.picture);
        console.log("------------------");
    });
}