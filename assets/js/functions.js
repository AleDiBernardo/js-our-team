
//  MILESTONE 1
/**
 * Print all array's object properties
 * @date 4/11/2024 - 4:37:18 PM
 *
 * @param {array} teamToPrint
 */
const printTeam = (teamToPrint) => {
    console.log("------------------");

    teamToPrint.forEach((element) => {
        console.log(element.name);
        console.log(element.role);
        console.log(element.picture);
        console.log("------------------");
    });
}


//  MILESTONE 2
/**
 * Print all array's object properties into DOM
 * @date 4/11/2024 - 4:37:18 PM
 *
 * @param {array} teamToPrint
 */
const printTeamToDOM = (teamToPrint, positionElem) => {

    teamToPrint.forEach((element) => {
        positionElem.innerHTML += `
            <li>Name: ${element.name}</li>
            <li>Role: ${element.role}</li>
            <li><img src="${element.picture}" alt=""</li>
            <br>
        `
    });          // BONUS 1 ^
}

//  BONUS 2
/**
 * Print all array's object properties into DOM
 * @date 4/11/2024 - 4:37:18 PM
 *
 * @param {array} teamToPrint
 */
const makeCard = (teamToPrint, positionElem) => {

    teamToPrint.forEach((element) => {
        positionElem.innerHTML += `
        <div class="card">
            <img src="${element.picture}" alt="">

            <div class="infoCtn">
                <h2>${element.name}</h2>
                <span>${element.role}</span>
            </div>
        </div>
        `
    });  
}
