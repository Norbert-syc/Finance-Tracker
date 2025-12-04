// Tabs
const signInTab = document.getElementById("signInTab");
const createTab = document.getElementById("createTab");

// Forms
const signInForm = document.getElementById("signInForm");
const createForm = document.getElementById("createForm");

// ============================
// LEVEL 1 — SHOW/HIDE FORMS
// ============================
signInTab.onclick = () => {
    signInTab.classList.add("active");
    createTab.classList.remove("active");
    signInForm.style.display = "block";
    createForm.style.display = "none";
};

createTab.onclick = () => {
    createTab.classList.add("active");
    signInTab.classList.remove("active");
    createForm.style.display = "block";
    signInForm.style.display = "none";
};

// ============================
// LEVEL 2 — LOCAL STORAGE AUTH
// ============================

// Register
document.getElementById("createBtn").onclick = () => {
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (!email || !password) {
        alert("All fields are required.");
        return;
    }

    // Save user
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully!");

    // Switch to Sign In
    signInTab.click();
};

// Login
document.getElementById("loginBtn").onclick = () => {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password!");
    }
};
