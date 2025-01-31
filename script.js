document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;

    // Simuler l'envoi des données
    console.log('Données envoyées :', email, password, phone);

    // Rediriger vers la page finale
    window.location.href = 'page-dev.html';
});
