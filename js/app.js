fetch("./js/team.json")
    .then(response => response.json())
    .then(webdevClass => {

        console.log(webdevClass);

        // print classmates

        let titleH1 = document.querySelector('#class');
        let subtitleH2 = document.querySelector('#school');
        let classMembersH3 = document.querySelector('#class-members');
        let classMembers = document.querySelector('#memberDetails');

        titleH1.textContent = webdevClass['class'];
        subtitleH2.textContent = webdevClass['school'];
        classMembersH3.textContent = "Detaljer om klassens studerende:";

        for (let i = 0; i < webdevClass.classMembers.length; i++) {

            let liItem = document.createElement('li');
            liItem.textContent = `${webdevClass.classMembers[i]["firstName"]} ${webdevClass.classMembers[i]["lastName"]}`;
            classMembers.appendChild(liItem);

        };

    });



// classMembersListUl.innerHTML = JSON.stringify(webdevClass);

// function prettyFormatSpaceSize4() {
//     classMembers.innerHTML = JSON.stringify(webdevClass, undefined, 4);
// };

// prettyFormatSpaceSize4();

// for (let i = 0; i < webdevClass["classMembers"].length; i++) {

//     let liItem = document.createElement('li');
//     liItem.textContent = `${webdevClass["classMembers"][i]["firstName"]} ${webdevClass["classMembers"][i]["lastName"]}`;
//     classMembers.appendChild(liItem);


// };