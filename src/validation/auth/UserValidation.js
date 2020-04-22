export default function signin(values) {
    let errors = {};

    if (!values.displayName) {
        errors.displayName = 'Company Name address is required'
    }

    if (!values.email) {
        errors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Password is required';
    } else if (values.phoneNumber.length < 6) {
        errors.phoneNumber = 'Phone Number must be 6 or more characters';
    }

    return errors;
};