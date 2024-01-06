let logoutBtn = document.querySelector(".logoutBtn")
document.querySelector(".innerHello").innerHTML = `<h1>hello ${localStorage.getItem('nameofuser')}<h1>`


logoutBtn.addEventListener('click' , logout)


function logout() {
    window.location = 'index.html'
}


