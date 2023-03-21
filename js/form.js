import { form, pristine } from './validation.js';

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});
