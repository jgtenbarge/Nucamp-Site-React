export const validateUserLoginForm = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 6) {
        errors.username = 'Must be 6 characters or more.';
    } else if (values.username.length > 15) {
        errors.username = 'Must be less than 15 characters.';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters.';
    }
    return errors;
}