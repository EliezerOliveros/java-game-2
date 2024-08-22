document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre de usuario ya existe.',
        });
    } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        Swal.fire({
            icon: 'success',
            title: 'Registro Exitoso',
            text: 'Usuario registrado con éxito.',
        });
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username] && users[username] === password) {
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: `Bienvenido ${username}`,
        }).then(() => {
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('game-section').style.display = 'block';
            localStorage.setItem('loggedInUser', username);
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos.',
        });
    }
});

// Verificar si ya hay un usuario logueado
window.addEventListener('load', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('game-section').style.display = 'block';
        Swal.fire({
            icon: 'info',
            title: 'Sesión Activa',
            text: `Bienvenido de nuevo, ${loggedInUser}.`,
        });
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Tu sesión será cerrada y volverás a la pantalla de inicio.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cerrar sesión'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('loggedInUser');
            Swal.fire(
                'Sesión cerrada',
                'Has cerrado sesión exitosamente.',
                'success'
            ).then(() => {
                document.getElementById('game-section').style.display = 'none';
                document.getElementById('login-section').style.display = 'block';
            });
        }
    });
});
