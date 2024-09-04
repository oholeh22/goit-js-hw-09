const form = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
    email: "",
    message: "",
};

function saveFormData() {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function updateFormFields() {
    Object.keys(formData).forEach(key => {
        const input = form.elements[key];
        if (input) input.value = formData[key];
    });
}

form.addEventListener('input', ({ target }) => {
    formData[target.name] = target.value.trim();
    saveFormData();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Please fill all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
});

document.addEventListener('DOMContentLoaded', updateFormFields);
