fetch("./js/team.json")
    .then(response => response.json())
    .then(data => console.log(data));

// console.log(data[0]["classMembers"][2]['firstName']);

let webdevClass = data;



// const webdevClass = {
//     "class": "WU06",
//     "school": "RTS",
//     "teacher": "Troels",
//     "classMembers": [{
//             "firstName": "Vagn",
//             "lastName": "Sej",
//             "age": 70,
//             "hairColor": "grey",
//             "shoeSize": 45,
//         },
//         {
//             "firstName": "Christian",
//             "lastName": "Cool",
//             "age": 28,
//             "hairColor": "blonde",
//             "shoeSize": 44,
//         },
//         {
//             "firstName": "Özlem",
//             "lastName": "Awesome",
//             "age": 26,
//             "hairColor": "black",
//             "shoeSize": 39,

//         },
//         {
//             "firstName": "William",
//             "lastName": "Wizard",
//             "age": 17,
//             "hairColor": "brown",
//             "shoeSize": 43,

//         }
//     ]
// };

// console.log(webdevClass["classMembers"][1]["firstName"]);

for (let i = 0; i < webdevClass["classMembers"].length; i++) {

    // console.log(webdevClass["classMembers"][i]["firstName"], webdevClass["classMembers"][i]["lastName"]);

    console.log(`${webdevClass["classMembers"][i]["firstName"]} ${webdevClass["classMembers"][i]["lastName"]}`);

};

// print classmates

let titleH1 = document.querySelector('#class');
let subtitleH2 = document.querySelector('#school');
let classMembersH3 = document.querySelector('#class-members');

let classMembers = document.querySelector('#memberDetails');

titleH1.textContent = webdevClass['class'];
subtitleH2.textContent = webdevClass['school'];
classMembersH3.textContent = "Detaljer om klassens studerende:";

// classMembersListUl.innerHTML = JSON.stringify(webdevClass);

// function prettyFormatSpaceSize4() {
//     classMembers.innerHTML = JSON.stringify(webdevClass, undefined, 4);
// };

// prettyFormatSpaceSize4();

for (let i = 0; i < webdevClass["classMembers"].length; i++) {

    let listItem = document.createElement('li');
    listItem.textContent = `${webdevClass["classMembers"][i]["firstName"]} ${webdevClass["classMembers"][i]["lastName"]}`;
    classMembers.appendChild(listItem);

    // console.log(`${webdevClass["classMembers"][i]["firstName"]} ${webdevClass["classMembers"][i]["lastName"]}`);

};