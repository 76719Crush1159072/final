const container = document.querySelector('.container')
const signIn = document.querySelector('.link.signIn')
const signUp = document.querySelector('.link.signUp')
const form = document.querySelector('.form')

const form1 =document.querySelector('.data')

signIn.addEventListener('click', function(e) {
    e.preventDefault()
    container.classList.add('active')
})

signUp.addEventListener('click', function(e) {
    e.preventDefault()
    container.classList.remove('active')
})


form1.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get user input
    const email1 = document.getElementById('email1').value;
    const password1 = document.getElementById('password1').value;

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if user exists and credentials match
    if (userData && userData.email === email1 && userData.password === password1) {
      
        alert('dang nhap thanh cong');
        window.location.href = '../index.html';
        
    } else {
        // Failed login
        alert('Invalid email or password. Please try again.');
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const UserName = document.getElementById('name').value;
    
    const userData = {
        email: email,
        password: password,
        UserName:UserName
    };
    console.log(userData)

    localStorage.setItem('userData', JSON.stringify(userData));
});

