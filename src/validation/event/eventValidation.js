export default function eventValidation(values) {
    let errors = {};

    if (!values.name) {
        errors.name = 'Event name is required'
    } 

    if (!values.topic) {
        errors.topic = 'Topic is required';
    } 
    if (!values.presenter) {
        errors.presenter = 'Presenter is required';
    } 
    if (!values.est_date) {
        errors.est_date = 'Est Date is required';
    } 

    return errors;
};