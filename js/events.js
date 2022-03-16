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

