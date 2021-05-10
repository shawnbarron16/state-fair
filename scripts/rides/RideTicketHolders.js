const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const RideTicketHolders = () => {
    contentTarget.innerHTML += /*html*/ `
    <div class="riders"></div> `
};

export const newRider = eventHub.addEventListener("rideEvent", (evt) => {RideTicketHolders()});
