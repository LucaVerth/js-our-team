const button = document.getElementById("addMemberButton");
let inputs = document.querySelectorAll("input");

const memberArr = [];
const givenMemberArr = [
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "img/barbara-ramos-graphic-designer.jpg",
  },
];

existingMember();

console.log(givenMemberArr);
console.log(memberArr);

function existingMember() {
  const container = document.querySelector(".team-container");

  for (let index in givenMemberArr) {
    const member = givenMemberArr[index];

    let memberName = member.name;
    let memberRole = member.role;
    let memberImage = member.image;

    container.innerHTML += `
    <div class="team-card">
      <div class="card-image">
        <img src="${memberImage}"/>
      </div>
      <div class="card-text">
        <h3>${memberName}</h3>
        <p>${memberRole}</p>
      </div>
    </div>
    `;
  }
}

// add new member on click (need fixing because on refresh it disappear)

button.addEventListener("click", function () {
  formInput();
});
button.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});

function formInput() {
  storeMember();
  cardCreate();
  function storeMember() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let img = document.getElementById("image").value;

    const newMember = {
      name: name,
      role: role,
      img: img,
    };
    memberArr.push(newMember);
  }

  function cardCreate() {
    const container = document.querySelector(".team-container");

    for (let index in memberArr) {
      const member = memberArr[index];

      let memberName = member.name;
      let memberRole = member.role;
      let memberImage = member.img;

      container.innerHTML += `
      <div class="team-card">
        <div class="card-image">
          <img src="${memberImage}"/>
        </div>
        <div class="card-text">
          <h3>${memberName}</h3>
          <p>${memberRole}</p>
        </div>
      </div>
      `;
      return member;
    }
  }
}
