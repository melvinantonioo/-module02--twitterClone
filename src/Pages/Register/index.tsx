
import axios from "axios";
import { useFormik } from "formik";
import React from "react"
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup';

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();

    //creating formik hooks
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(3, "Username At Least 3 character long")
                .required("Username required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters long")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"),], "Passwords must match")
                .required("Confirm your password"),
        }),
        onSubmit: async (values) => {
            try {
                await axios.post("http://localhost:3000/users", {
                    username: values.username,
                    password: values.password,
                });

                navigate("/")
            } catch (error) {

            }
        }
    })


    return (
        <div className="container mx-auto p-4 max-w-md bg-zinc-400 rounded-md my-5">

            <h1 className="text-3xl font-bold text-center mb-2 text-blue-700">
                Register
            </h1>

            <form
                onSubmit={formik.handleSubmit}
                className="bg-white p-6 rounded shadow-md"
            >

                {/* Username Field */}
                <div className="mb-4">

                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Username
                    </label>

                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.username}</p>
                    ) : null}

                </div>

                {/* Password Field */}
                <div className="mb-4">

                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                    ) : null}

                </div>

                {/* Confirm Password Field */}
                <div className="mb-4">

                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Confirm Password
                    </label>

                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                    ) : null}

                </div>

                {/* submit button */}
                <button
                    type="submit"
                    className="bg-blue-500 px-4 py-2 text-white rounded-md w-full hover:bg-blue-600 disabled:opacity-50"
                >
                    Register
                </button>

            </form>
        </div>
    )
}

export default RegisterPage