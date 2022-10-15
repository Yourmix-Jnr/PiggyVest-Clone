function checkForm() {
    var inputText = document.getElementById('fullName').Value;
    var inputMail = document.getElementById('email').value;
    var phoneCheck = document.getElementById('phoneNo').value;
    var passwordCheck = document.getElementById('password').value;

    if(inputText == ''){
        alert('Please enter all details correctly');
    }
    //Would have used a switch case but you can be modified if need be.
}