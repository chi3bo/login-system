let signupNameInput = document.querySelector(".userSIgnUpName")
let signupEmailInput = document.querySelector(".userSIgnUpEmail")
let signupPassInput = document.querySelector(".userSIgnUpPass")
let createAccountBtn = document.querySelector(".createAccountBtn")
let sucssesModal = document.querySelector('.sucssesModal')
let backBtn = document.querySelector(".backBtn")
let logBtn = document.querySelector(".logBtn")
let nameInputAlert = document.querySelector('.falseName')
let EmailInputAlert = document.querySelector('.falseEmail')
let PassInputAlert = document.querySelector('.falsePass')
// --------   start regex decleration   -----------
var theNameReg = /^[a-zA-Z]{2,16}$/;                                   // نمط للأسماء (2-16 حرفًا)
var theEmailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;    // نمط لعناوين البريد الإلكتروني
var thePassReg = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;                      // نمط لكلمات المرور (يجب أن تحتوي على أرقام وحروف)


let newUsersList = []
// -------get old data and chek if it's null or fill---------
let oldData = (JSON.parse(localStorage.getItem('accounts')))
if (oldData != null) {
    newUsersList = oldData
}

//======================        end head js (decleration and storage)       ======================
//======================             start logic and functions              ======================

createAccountBtn.addEventListener('click', addAccount)


signupNameInput.addEventListener('keyup', isNameRegex)
signupEmailInput.addEventListener('keyup', isEmailRegex)
signupPassInput.addEventListener('keyup', isPassRegex)
backBtn.addEventListener('click' , hideModal)
logBtn.addEventListener('click' , goToHome)



function isNameRegex() {
    if (theNameReg.test(signupNameInput.value) == true) {
        signupNameInput.classList.add('is-valid')
        signupNameInput.classList.remove('is-invalid')
        nameInputAlert.classList.add('d-none')
        return true
    }
    else {
        signupNameInput.classList.remove('is-valid')
        signupNameInput.classList.add('is-invalid')
        nameInputAlert.classList.remove('d-none')
        return false
    }

}
function isEmailRegex() {
    document.querySelector(".alreadyUsed").classList.add("d-none")
    if (theEmailReg.test(signupEmailInput.value)) {
        signupEmailInput.classList.add('is-valid')
        signupEmailInput.classList.remove('is-invalid')
        EmailInputAlert.classList.add('d-none')

        return true
    }
    else {
        signupEmailInput.classList.remove('is-valid')
        signupEmailInput.classList.add('is-invalid')
        EmailInputAlert.classList.remove('d-none')

        return false
    }
}
function isPassRegex() {


    if (thePassReg.test(signupPassInput.value)) {
        signupPassInput.classList.add('is-valid')
        signupPassInput.classList.remove('is-invalid')
        PassInputAlert.classList.add('d-none')

        return true
    }
    else {
        signupPassInput.classList.remove('is-valid')
        signupPassInput.classList.add('is-invalid')
        PassInputAlert.classList.remove('d-none')

        return false
    }
}


function addAccount() {

    // ------------  هيلوب علي كل العناصر و اللي مووجود متكرر فا هيعمله بوش  في الفيك اراي-----------------------
    var fakeArray = []
    for (var i = 0; i < newUsersList.length; i++) {
        if (signupEmailInput.value == newUsersList[i].opMail) {
            fakeArray.push(newUsersList[i])
            document.querySelector(".alreadyUsed").classList.remove("d-none")
        }
    }


    // ------------  لو الفيك اراي طوله 0 معناها مفيش ولا واحد متكرر اذا يبقا نضيف الحساب -----------------------
    if (fakeArray.length == 0 && theNameReg.test(signupNameInput.value) && theEmailReg.test(signupEmailInput.value) && thePassReg.test(signupPassInput.value)) {
        let newAccount = {
            opName: signupNameInput.value,
            opMail: signupEmailInput.value,
            opPass: signupPassInput.value
        }

        newUsersList.push(newAccount)
        localStorage.setItem('accounts', JSON.stringify(newUsersList))
        document.querySelector(".alreadyUsed").classList.add("d-none")
        sucssesModal.classList.remove('d-none')
        clearInputs()
        sucssesModal.classList.remove('d-none')
    }
}

function clearInputs() {
    signupNameInput.value = '';
    signupEmailInput.value = '';
    signupPassInput.value = '';

    signupNameInput.classList.remove('is-valid')
    signupEmailInput.classList.remove('is-valid')
    signupPassInput.classList.remove('is-valid')

}

function hideModal(){
    sucssesModal.classList.add("d-none")
}

function goToHome(){
    window.location = 'index.html'
}

