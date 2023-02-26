import { useEffect, useState } from 'react';

const useBasicForm = (callback, validate, defaultValues) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting)
            callback();
    }, [errors]);

    useEffect(() => {
        if (Object.keys(values).length > 0)
            setErrors(validate(values));
    }, [values]);

    useEffect(() => {
        if (defaultValues)
            setValues(defaultValues);
        else
            setValues({});
    }, [defaultValues]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
        }
    };

    const handleChange = (event) => {
        event.persist();
        if (event.target.type === 'checkbox') {
            setValues((values) => ({
                ...values,
                [event.target.name]: event.target.checked,
            }));
        } else {
            setValues((values) => ({
                ...values,
                [event.target.name]: event.target.value,
            }));
        }

    };

    const setValue = (name, value) => {
        setValues((values) => ({ ...values, [name]: value }));
    };

    function clearForm() {
        setValues({});
        setIsSubmitting(false);
    }

    function resetIsSubmiting() {
        setIsSubmitting(false);
    }

    function setDefaultValues(values) {
        setValues(values);
    }

    return {
        handleChange,
        handleSubmit,
        setValue,
        clearForm,
        resetIsSubmiting,
        setDefaultValues,
        values,
        setValues,
        errors,
    };
};

export default useBasicForm;