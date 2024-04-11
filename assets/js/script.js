// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg


const teamListElem = document.getElementById("teamList");
const rowElem = document.getElementById("cardRowContainer");

//  MILESTONE 0
const team = [
    {
        name: "Peppa Pig",
        role: "Founder & CEO",
        picture: "../img/peppa.png"
    },
    {
        name: "George Pig",
        role: "Chef",
        picture: "../img/george.png"
    },
    {
        name: "Daddy Pig",
        role: "Lumberjack",
        picture: "../img/daddy.png"
    },
    {
        name: "Suzy Sheep",
        role: "Co-Founder",
        picture: "../img/susy.png"
    },
    {
        name: "Mamma Pig",
        role: "Developer",
        picture: "../img/mamma.webp"
    },
    {
        name: "T-rex",
        role: "Powerfull T-rex",
        picture: "../img/dino.png"
    },

]

printTeam(team);

// printTeamToDOM(team, teamListElem);

makeCard(team,rowElem)