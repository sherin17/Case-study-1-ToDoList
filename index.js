
let button = document.getElementById('loginBtn');
let username = document.getElementById("username");
let password = document.getElementById("password");
let message;
button.addEventListener('click',(e)=>{

    validate(e,(message)=>{

        alert(message);
    })

})

let validate=(e,callback)=>{
    if((username.value=="admin")&&(password.value=="12345")){
        window.location="todo.html";
        callback("Login Successfully");
            }
            else{
                username.classList.add('is-invalid');
                password.classList.add('is-invalid');
                callback("Invalid username and password");
                e.preventDefault();
            }
}






