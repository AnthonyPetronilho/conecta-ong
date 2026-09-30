import './style.css';

const contrastToggle = document.querySelector('#contrastToggle');
const form = document.querySelector('#volunteerForm');
const projectSelect = document.querySelector('#project');
const projectButtons = document.querySelectorAll('.project-button');
const formStatus = document.querySelector('#formStatus');

const savedContrast = localStorage.getItem('highContrast') === 'true';
if (savedContrast) setContrast(true);

contrastToggle.addEventListener('click', () => {
  const active = !document.body.classList.contains('high-contrast');
  setContrast(active);
  localStorage.setItem('highContrast', String(active));
});

function setContrast(active) {
  document.body.classList.toggle('high-contrast', active);
  contrastToggle.setAttribute('aria-pressed', String(active));
  contrastToggle.textContent = active ? 'Contraste padrão' : 'Alto contraste';
  contrastToggle.setAttribute('aria-label', active ? 'Desativar modo de alto contraste' : 'Ativar modo de alto contraste');
}

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    projectSelect.value = button.dataset.project;
    document.querySelector('#voluntariado').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => projectSelect.focus(), 450);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearErrors();

  const fields = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    project: projectSelect
  };

  let firstInvalid = null;

  if (!fields.name.value.trim()) {
    showError(fields.name, 'nameError', 'Informe seu nome completo.');
    firstInvalid ??= fields.name;
  }

  if (!fields.email.validity.valid) {
    showError(fields.email, 'emailError', 'Informe um e-mail válido.');
    firstInvalid ??= fields.email;
  }

  if (!fields.project.value) {
    showError(fields.project, 'projectError', 'Selecione um projeto.');
    firstInvalid ??= fields.project;
  }

  if (firstInvalid) {
    formStatus.textContent = 'Revise os campos indicados antes de enviar.';
    firstInvalid.focus();
    return;
  }

  formStatus.textContent = 'Interesse registrado com sucesso. Obrigado por participar!';
  form.reset();
});

function showError(field, errorId, message) {
  const error = document.querySelector(`#${errorId}`);
  error.textContent = message;
  field.setAttribute('aria-invalid', 'true');
  field.setAttribute('aria-describedby', errorId);
}

function clearErrors() {
  document.querySelectorAll('.error').forEach((element) => element.textContent = '');
  form.querySelectorAll('[aria-invalid="true"]').forEach((field) => {
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  });
  formStatus.textContent = '';
}
