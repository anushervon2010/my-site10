function loginGoogle() {
    alert("Барои Google бояд OAuth 2.0-и расмӣ пайваст карда шавад.");
}

function loginFacebook() {
    alert("Барои Facebook бояд OAuth-и расмии Meta пайваст карда шавад.");
}

function loginInstagram() {
    alert("Instagram Login танҳо тавассути API ва OAuth-и расмии Meta кор мекунад.");
}

document.querySelector(".contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Паёми шумо қабул шуд. Барои фиристодани воқеӣ backend лозим аст.");
});