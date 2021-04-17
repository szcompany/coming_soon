const form = document.getElementById('form')
const email = document.getElementById('email')
const small = document.querySelector('small')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = email.value

    if(!validateEmail(emailVal)) {
        form.classList.add('error')
    } else {
        form.classList.remove('error')
        form.classList.add('success')
        small.textContent = "Thank YOU"

    }
})

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
