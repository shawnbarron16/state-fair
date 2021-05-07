const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener(
    "click",
    (evt) => {
        if (evt.target === eventHub.getElementsByClassName("ticketBooth")) {
            const rideEvent = new CustomEvent("rideTicketPurchased")
            eventHub.dispatchEvent(rideEvent)

        }
    }
)

export const TicketBooth = () => {
    contentTarget.innerHTML = /*html*/ `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}