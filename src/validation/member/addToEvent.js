export default function addToEvent(values) {
    let errors = {};

    if (!values.name) {
        errors.name = ' Name is required'
    }

    if (!values.description) {
        errors.description = 'Description is required';
    }

    return errors;
};