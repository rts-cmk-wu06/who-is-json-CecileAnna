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