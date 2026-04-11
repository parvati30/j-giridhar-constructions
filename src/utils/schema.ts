import * as Yup from "yup";

export const LoginSchema = () =>
    Yup.object().shape({
        password: Yup.string()
            .trim()
            .required("Please enter Password.")
            .min(6, 'Password must be at least 6 characters')
            .max(254, 'Password is too long'),

        email: Yup.string()
            .trim()
            .email('Please enter a valid email')
            .required('Email is required')
            .max(254, 'Email is too long')
    });

export const forgetPasswordSchema = () =>
    Yup.object().shape({
        email: Yup.string()
            .trim()
            .email('Please enter a valid email')
            .required('Email is required')
            .max(254, 'Email is too long')
    });

export const ResetPasswordSchema = () =>
    Yup.object().shape({
        password: Yup.string()
            .trim()
            .required("Please enter Password.")
            .min(6, 'Password must be at least 6 characters')
            .max(254, 'Password is too long'),
        confirm_password: Yup.string()
            .trim()
            .required("Please confirm your Password.")
            .when("password", (password, schema) => {
                return password && password.length > 0
                    ? schema.oneOf([Yup.ref("password")], "Passwords do not match.")
                    : schema;
            }),
    });