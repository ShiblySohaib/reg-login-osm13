function showForm(formtype) {
    let regForm = document.getElementById("regForm");
    let loginForm = document.getElementById("loginForm");
    if (formtype == "reg") {
        regForm.classList.remove("d-none");
        loginForm.classList.add("d-none");
    }
    else {
        regForm.classList.add("d-none");
        loginForm.classList.remove("d-none");
    }
}


function register() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPass").value;

    if(!name){
        alert("Full name field is required!")
        return;
    }
    if(!email){
        alert("Email field is required!")
        return;
    }
    if(!password){
        alert("Password field is required!")
        return;
    }

    let user = {name, email, password};
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration successful!");

    document.getElementById('regName').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPass').value = '';

    showForm('login');
}


function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPass").value;

    if(!email){
        alert("Email field is required!")
        return;
    }
    if(!password){
        alert("Password field is required!")
        return;
    }
    
    let userdata = JSON.parse(localStorage.getItem(email));

    if (!userdata) {
        alert("User not found!");
        return;
    }
    else if (password != userdata.password) {
        alert("Incorrect password!");
        return;
    }

    if (password == userdata.password) {
        alert("Login successful!");
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPass').value = '';
        homepage();
    }
}


function homepage() {
    let home = document.getElementById('home');
    home.classList.remove('d-none');
    document.body.innerHTML = '';
    document.body.appendChild(home);
}

