// Función para registrar usuario
function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('register-error');

    // Validaciones básicas
    if (!name || !email || !password) {
        error.textContent = 'Todos los campos son obligatorios';
        return;
    }

    // Verificar si el usuario ya está registrado
    if (localStorage.getItem(email)) {
        error.textContent = 'El correo ya está registrado';
        return;
    }

    // Guardar datos en el Local Storage
    const user = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem(email, JSON.stringify(user));
    error.textContent = '';

    // Mostrar la sección de inicio de sesión
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

// Función para iniciar sesión
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const error = document.getElementById('login-error');

    // Validar si los datos son correctos
    const user = JSON.parse(localStorage.getItem(email));
    if (!user || user.password !== password) {
        error.textContent = 'Correo o contraseña incorrectos';
        return;
    }

    // Mostrar la sección de home y el nombre del usuario
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('home-sectigiton').style.display = 'block';
    document.getElementById('user-name').textContent = user.name;
}

// Función para cerrar sesión
function logout() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}
