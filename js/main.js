let emailInput = document.querySelector(".userEmail")
let passInput = document.querySelector(".userPass")
let loginBtn = document.querySelector(".loginBtn")
let wrongAlert = document.querySelector(".dontHave")


// ========== here should be the Array was got from local Storage ================
let ListOfEmails = []
oldData2 = JSON.parse(localStorage.getItem('accounts'))

if (oldData2 != null) {
    ListOfEmails = JSON.parse(localStorage.getItem('accounts'));
}




loginBtn.addEventListener('click', logIn)



// =========== here we should search by for loop in the Array wich we got from local storage ===========
function logIn() {

    var enteredEmail = emailInput.value
    var enteredPass = passInput.value
    var fakearr = []

    for (let i = 0; i < ListOfEmails.length; i++) {
        
        if(ListOfEmails[i].opMail == enteredEmail && ListOfEmails[i].opPass == enteredPass){
            
            localStorage.setItem('nameofuser' , ListOfEmails[i].opName )
            alert(`hello `+ ListOfEmails[i].opName);
            fakearr.push(ListOfEmails[i])
            window.location = 'home.html'
        }
    }
    // finish for >>> لو ملقاش حاجة معناها مش هيخش الشرط ولا مرة و بالتالي الفيك هيفضل طوله صفر

    if (fakearr.length == 0) {
        wrongAlert.classList.remove('d-none')
    }

}

passInput.addEventListener('click' , hideAlert)
emailInput.addEventListener('click' , hideAlert)
function hideAlert(){
    wrongAlert.classList.add('d-none')
}




// <h1> hello ${ListOfEmails[i].opName} </h1>
// document.querySelector("#helloUser").innerHTML = `hello`