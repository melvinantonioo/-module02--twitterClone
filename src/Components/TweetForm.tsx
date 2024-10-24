import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import axios from "axios";
import { addTweet } from "../Redux/TweetSlice";


const TweetForm: React.FC = () => {
    const [charCount, setCharCount] = useState(0);

    const dispatch = useDispatch();

    // akses the current login 
    const username = useSelector((state: RootState) => state.userSlice.username)

    const formik = useFormik({
        initialValues: {
            tweet: "",
        },
        validationSchema: Yup.object({
            tweet: Yup.string()
                .max(50, "Tweet must be 50 characters or less")
                .required("Tweet is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            const newTweet = {
                id: Date.now().toString(),
                content: values.tweet,
                userId: username,
                createdAt: new Date().toISOString(),
            };
            try {
                //kirim tweet ke backend ( json-server)
                await axios.post("http://localhost:3000/tweets", newTweet)

                //dispatch tweet , tangkap dengan dispatch ke redux state
                dispatch(addTweet(newTweet))

                //reset after submision
                resetForm();

            } catch (error) {
                console.log("Error Submittin")
            }
        },
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik.handleChange(e);
        setCharCount(e.target.value.length);
    };

    return (
        <form onSubmit={formik.handleSubmit} className="bg-white p-4 rounded shadow-md">
            <div className="mb-4">
                <label htmlFor="tweet" className="block text-sm font-medium text-gray-700">
                    What's on your mind?
                </label>
                <input
                    id="tweet"
                    name="tweet"
                    type="text"
                    onChange={handleInputChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tweet}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {formik.touched.tweet && formik.errors.tweet ? (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.tweet}</p>
                ) : null}

                {/* Character counter */}
                <div className="text-sm text-gray-500 mt-2">
                    {charCount}/50 characters
                </div>
            </div>

            {/* Submit Button (disable if over 50 chars) */}
            <button
                type="submit"
                disabled={charCount > 50}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
                Submit Tweet
            </button>
        </form>
    );
};

export default TweetForm;
