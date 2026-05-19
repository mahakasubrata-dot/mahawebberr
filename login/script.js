document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordField = document.getElementById('password');

    // 1. Fitur Sembunyikan/Tampilkan Password
    if (passwordToggle && passwordField) {
        passwordToggle.addEventListener('click', () => {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            
            // Toggle class untuk ikon mata (opsional sesuai CSS Anda)
            passwordToggle.classList.toggle('visible');
        });
    }

    // 2. Logika Login Utama
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            // Mencegah halaman refresh
            e.preventDefault();

            // Mengambil input terbaru
            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;
            const successMessage = document.getElementById('successMessage');

            // Cek kredensial (heri / 123)
            if (usernameInput === "heri" && passwordInput === "123") {
                
                // Menampilkan animasi sukses "Welcome Home"
                if (successMessage) {
                    successMessage.style.display = 'flex';
                    // Menambah sedikit delay agar animasi transisi CSS terasa
                    setTimeout(() => {
                        successMessage.style.opacity = '1';
                        successMessage.style.pointerEvents = 'all';
                    }, 10);
                }

                // PERBAIKAN DI SINI: Menggunakan URL Absolut agar tidak terjebak di folder /login/
                setTimeout(() => {
                    window.location.href = "https://mahakasubrata-dot.github.io/mahawebberr/index.html"; 
                }, 1500);

            } else {
                // Notifikasi jika salah
                alert("Username atau Password salah!");
                // Kosongkan password agar user bisa mencoba lagi
                passwordField.value = "";
                passwordField.focus();
            }
        });
    }
});
