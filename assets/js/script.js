// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg


const teamListElem = document.getElementById("teamList");

//  MILESTONE 0
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "../img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "../img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "../img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "../img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "../img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "../img/barbara-ramos-graphic-designer.jpg"
    },

]

printTeam(team);

printTeamToDOM(team, teamListElem);
