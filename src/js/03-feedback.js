import throttle from 'lodash.throttle'
const STORAGE_KEY = 'feedback-form-state'

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onFormSubmit, 500));

const formData = {} 

function onFormSubmit(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    console.log(formData);
}

function onFormSabmit(event) {
    event.preventDefault()

    if(refs.input.value === '' || refs.textarea.value === ''){
        return alert('all text fields must be filled')
    }

    console.log(formData);
    event.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}
populateTextarea()
function populateTextarea() {
    const saveMessege = JSON.parse(localStorage.getItem(STORAGE_KEY))
    refs.textarea.value = saveMessege.message
    refs.input.value = saveMessege.email
}