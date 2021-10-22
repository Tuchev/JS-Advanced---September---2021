function validate() {
    const submitBtn = document.getElementById('submit');
    const [username, email, password, confirmPassword, isCompany] = document.querySelectorAll('#userInfo div input');
    const companyDiv = document.getElementById('companyInfo');
    const companyNum = document.getElementById('companyNumber');
    const validDiv = document.getElementById('valid');
    submitBtn.addEventListener('click', verify);
    isCompany.addEventListener('change', () => {
        if (isCompany.checked) {
            companyDiv.style.display = '';
        } else {
            companyDiv.style.display = 'none';
        }
    });

    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    const passwordPattern = /^\w{3,15}$/;
    const emailPattern = /^.*@.*\..*$/;

    function verify(e) {
        e.preventDefault();
        let isValid = true;
        if (!usernamePattern.test(username.value)) {
            isValid = false;
            username.style.borderColor = 'red';
        } else {
            username.style.border = 'none';
        }
        if (!passwordPattern.test(password.value)) {
            isValid = false;
            password.style.borderColor = 'red';
        } else {
            password.style.border = 'none';
        }
        if (password.value !== confirmPassword.value || !passwordPattern.test(confirmPassword.value)) {
            isValid = false;
            confirmPassword.style.borderColor = 'red';
            password.style.borderColor = 'red';
        } else {
            password.style.border = 'none';
            confirmPassword.style.border = 'none';
        }
        if (!emailPattern.test(email.value)) {
            isValid = false;
            email.style.borderColor = 'red';
        } else {
            email.style.border = 'none';
        }

        if (isCompany.checked) {
            if (companyNum.value < 1000 || companyNum.value > 9999) {
                isValid = false;
                companyNum.style.borderColor = 'red';
            } else {
                companyNum.style.border = 'none';
            }
        }

        if (isValid) {
            validDiv.style.display = '';
        } else {
            validDiv.style.display = 'none';
        }
    }
}