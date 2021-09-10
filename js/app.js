webdevClass = {
    "class": "WU06",
    "school": "RTS",
    "teacher": "Troels",
    "classMembers": [{
            "firstName": "Vagn",
            "lastName": "Sej",
            "age": 70,
            "hairColor": "grey",
            "shoeSize": 46,
        },
        {
            "firstName": "Christian",
            "lastName": "Cool",
            "age": 28,
            "hairColor": "blonde",
            "shoeSize": 47,
        },
        {
            "firstName": "Özlem",
            "lastName": "Awesome",
            "age": 26,
            "hairColor": "black",
            "shoeSize": 39,

        },
        {
            "firstName": "William",
            "lastName": "Wizard",
            "age": 18,
            "hairColor": "brown",
            "shoeSize": 42,

        }
    ]
}

// console.log(webdevClass["classMembers"][1]["firstName"]);

for (let i = 0; i < webdevClass["classMembers"].length; i++) {
    console.log(webdevClass["classMembers"][i]["firstName"]);
};

// print classmates

titleH1 = document.querySelector('#class');
subtitleH2 = document.querySelector('#school');
classMembersH3 = document.querySelector('#class-members');

classMembersListUl = document.querySelector('#memberDetails');

titleH1.textContent = webdevClass['class'];
subtitleH2.textContent = webdevClass['school'];
classMembersH3.textContent = "Detaljer om klassens studerende:";

// classMembersListUl.innerHTML = JSON.stringify(webdevClass);

function prettyFormatSpaceSize4() {
    classMembersListUl.innerHTML = JSON.stringify(webdevClass, undefined, 4);
};

prettyFormatSpaceSize4();