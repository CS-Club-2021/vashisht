// const eventBox = document.querySelectorAll(".carousel-page");
// const modal = document.querySelector(".carousel-page-modal");
// const closeButton = document.querySelector(".close-button");

// document.querySelectorAll(".carousel-page").addEventListener("click", (e) => {
//   console.log(e);
//   // modal.classList.remove("hide");
// });

// closeButton.addEventListener("click", () => {
//     modal.classList.add("hide");
// });

const eventList = document.querySelector(".events");

eventList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    const eventNumber = button.parentNode;
    const eventContainer = eventNumber.parentNode;
    //   console.log(eventContainer);
    const modal = eventContainer.children[1];
    modal.classList.remove("hide");
    modal.querySelector(".close-button").addEventListener("click", () => {
      modal.classList.add("hide");
    });
  }
});

var events = [
  "edc-lead-flux.yaml",
  "edc-wattage.yaml",
  "epic-talk.yaml",
  "edc-circuitronics.yaml",
  "idc-abstract.yaml",
  "csclub-cp-event.yaml",
  "epic-pitch.yaml",
  "idc-mixmatch.yaml",
  "images",
  "csclub-ctf.yaml",
  "epic_showcase.yaml",
  "robotics-blindrive.yaml",
  "gdsc-hackathon.yaml",
  "auv-revelation.yaml",
  "gdsc-flutter.yaml",
  "sae-aerospaceexpo.yaml",
  "mars-rove.yaml",
  "idc-invitedtalk.yaml",
  "csclub-edith-session.yaml",
  "robotics-p2r2.yaml",
  "auv-triumph.yaml",
  "gdsc-director-or-datascientist.yaml",
  "gdsc-langwars.yaml",
];
// fetch('../events/auv-revelation.yaml')
//   .then(response => response.text())
//   .then(text => console.log(text))

function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

const eventTemplate = () =>
  fetch("../components/event.html")
    .then((response) => response.text())
    .then((text) => htmlToElement(text));

const createEvents = async () => {
  const template = await eventTemplate();
  // get events-list from dom
  const eventList = document.querySelector("#events-list");
  for (var i = 0; i < events.length; i++) {
    fetch("../events/" + events[i])
      .then((response) => response.text())
      .then((text) => {
        // parse yaml
        const data = jsyaml.load(text);
        const event = template.cloneNode(true);
        event.querySelectorAll("#event-name").forEach((element) => {
          element.innerHTML = data.event_name;
        });
        event.querySelector("#description-hint").innerHTML = data.description.slice(0, 70) + "...";
        event.querySelector("#description").innerHTML = data.description;
        // event.querySelector("#club-name").innerHTML = data.club_name;
        event.querySelector("#registration").href = data.registration;
        event.querySelector("#name").innerHTML = data.contact.name;
        event.querySelector("#email").innerHTML = data.contact.mail;
        event.querySelector("#phone-no").innerHTML = data.contact.phone_no;
        eventList.appendChild(event);
      });
  }
};

createEvents();
