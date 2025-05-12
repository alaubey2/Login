function register() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    if (!username || !password) {
        document.getElementById("regMsg").innerText = "يرجى إدخال جميع الحقول";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[username]) {
        document.getElementById("regMsg").innerText = "اسم المستخدم موجود مسبقاً";
        return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("regMsg").innerText = "تم التسجيل بنجاح";
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[username] && users[username] === password) {
        document.getElementById("loginMsg").innerText = "تم تسجيل الدخول بنجاح";
    } else {
        document.getElementById("loginMsg").innerText = "بيانات الدخول غير صحيحة";
    }
}