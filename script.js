function checkPassword() {
    var password = document.getElementById("password").value;
    var result = document.getElementById("result");

    // Minimum length requirement
    if (password.length < 8) {
        result.textContent = "Weak - Password should be at least 8 characters long.";
        return;
    }

    // Presence of uppercase and lowercase letters
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        result.textContent = "Weak - Password should contain both uppercase and lowercase letters.";
        return;
    }

    // Presence of numeric digits
    if (!/\d/.test(password)) {
        result.textContent = "Weak - Password should contain at least one numeric digit.";
        return;
    }

    // Presence of special characters
    if (!/[!@#$%^&*()-+=]/.test(password)) {
        result.textContent = "Weak - Password should contain at least one special character.";
        return;
    }

    result.textContent = "Strong - Password meets the criteria for strength.";
}
