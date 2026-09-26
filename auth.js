function loginWithGoogle() {
    // Дар версияи ҳақиқӣ ин ҷо URL-и backend-и OAuth гузошта мешавад.
    window.location.href = "/auth/google";
}

function loginWithFacebook() {
    // Дар версияи ҳақиқӣ ин ҷо URL-и backend-и OAuth гузошта мешавад.
    window.location.href = "/auth/facebook";
}

document
    .getElementById("registerForm")
    ?.addEventListener("submit", async function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        if (response.ok) {
            window.location.href = "/dashboard.html";
        } else {
            alert("Ҳангоми бақайдгирӣ хато пайдо шуд.");
        }
    });