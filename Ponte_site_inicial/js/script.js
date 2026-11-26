// Interações iniciais da interface Ponte.
// Nesta etapa os formulários são apenas visuais; a integração com PHP/MySQL virá depois.
document.addEventListener('DOMContentLoaded', () => {
  const switches = document.querySelectorAll('.switch-option');
  const signupForm = document.querySelector('#signup-form');

  switches.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.account;
      switches.forEach((item) => {
        item.classList.toggle('active', item.dataset.account === selected);
      });

      if (signupForm) {
        document.querySelectorAll('[data-for]').forEach((field) => {
          const show = field.dataset.for === selected;
          field.hidden = !show;
          field.querySelectorAll('input').forEach((input) => {
            input.required = show;
          });
        });
      }
    });
  });

  const loginForm = document.querySelector('#login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('A interface de login está pronta. A autenticação será conectada à API na próxima etapa.');
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const password = document.querySelector('#signup-password').value;
      const confirmation = document.querySelector('#confirm-password').value;

      if (password !== confirmation) {
        alert('As senhas não coincidem. Confira os campos.');
        return;
      }

      alert('O formulário está validado visualmente. Na próxima etapa vamos conectá-lo ao PHP e ao MySQL.');
    });
  }

  const forgot = document.querySelector('#forgot-link');
  if (forgot) {
    forgot.addEventListener('click', (event) => {
      event.preventDefault();
      alert('A recuperação de senha será implementada em uma próxima etapa.');
    });
  }
});
