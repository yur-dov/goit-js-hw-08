import throttle from 'lodash.throttle'
const STORAGE_KEY = 'feedback-form-state'

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea()

function onFormInput(event) {
    let formData = {} 
    // formData[event.target.name] = event.target.value;
    formData.email = refs.input.value
    formData.message = refs.textarea.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function  onFormSabmit(event) {
    event.preventDefault()

    if (refs.input.value === '' || refs.textarea.value === ''){
        return alert('all text fields must be filled');
    };
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
    const saveMessege = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (saveMessege) {
        refs.input.value = saveMessege.email;
        refs.textarea.value = saveMessege.message;
    }

}
