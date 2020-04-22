import { useState, useEffect } from 'react'
const useForm = (callback, validateRule) => { 
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        setErrors(validateRule(values));
        setIsSubmitting(true);
    };

    const validateData = (e) => {
        e.persist();
        setErrors(validateRule(values));
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };
    
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            setValues('')
        }
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        validateData,
        values,
        errors,
        setValues
    }
}
export default useForm