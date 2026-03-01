const form = document.getElementById("bookingForm");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const successMessage = document.getElementById("successMessage");

// Restrict past dates
const today = new Date().toISOString().split("T")[0];
checkin.setAttribute("min", today);
checkout.setAttribute("min", today);

// Update checkout minimum date when checkin changes
checkin.addEventListener("change", function () {
    checkout.setAttribute("min", checkin.value);
});

// Form Submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let checkinDate = new Date(checkin.value);
    let checkoutDate = new Date(checkout.value);

    document.getElementById("checkinError").textContent = "";
    document.getElementById("checkoutError").textContent = "";
    successMessage.textContent = "";

    if (!checkin.value) {
        document.getElementById("checkinError").textContent = "Please select check-in date";
        return;
    }

    if (!checkout.value) {
        document.getElementById("checkoutError").textContent = "Please select check-out date";
        return;
    }

    if (checkoutDate <= checkinDate) {
        document.getElementById("checkoutError").textContent = "Check-out must be after check-in date";
        return;
    }

    successMessage.textContent = "Booking Successful!";
    form.reset();
});