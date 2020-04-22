export default function UserProfile(values) {
    let errors = {};

    if (!values.description) {
        errors.description = 'Description is required'
    }

    return errors;
};