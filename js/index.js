const form = document.querySelector('.contact-form');
function SendEmail(){
    const name = document.querySelector('.name'),
        num = document.querySelector('.num'),
        email = document.querySelector('.email'),
        subject = document.querySelector('.subject'),
        mssg = document.querySelector('.mssg');

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "lakshaybabbar0118@outlook.com",
            Password : "F6B7EC0F8962BFCFBB1FD0AD14DCDD95C047",
            To : 'rajeshbabbar1980@gmail.com',
            From : "lakshaybabbar0118@outlook.com",
            Subject : subject.value,
            Body : "Name: " + name.value
                    + "<br> Phone Number: " + num.value
                    + "<br> Email: " + email.value
                    + "<br> Message: " + mssg.value
        }).then(
          message => alert(message)
        );
}

/* AOS */
AOS.init({
  offset: 50,
  duration: 500,
});

/* Swipper */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});