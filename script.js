function buyPhone(phone) {

    const phoneNumber = "255742947568";

    const message =
        `Habari Mbeya Phones, nataka kununua ${phone}`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}