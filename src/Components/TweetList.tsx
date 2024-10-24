import React from "react";

import { AiFillEdit, AiFillDelete } from "react-icons/ai"; // Icons from react-icons
import { Tweet } from '../Types';
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";


const TweetList: React.FC<{tweets: Tweet[]}> = ({tweets}) => {
    const username = useSelector((state: RootState) => state.userSlice.username)

    const handleEdit = (id: string) => {
        // Edit tweet function
        console.log("Edit tweet with ID:", id);
    };

    const handleDelete = (id: string) => {
        // Delete tweet function
        console.log("Delete tweet with ID:", id);
    };

    return (
        <div>
            {tweets.map((tweet: Tweet) => (
                <div key={tweet.id} className="bg-gray-100 p-4 rounded mb-2">
                    <p>{tweet.content}</p>
                    <p className="text-xs text-gray-500">Posted by: {tweet.userId}</p>

                    {tweet.userId === username && (
                        <div className="flex space-x-2">
                            <button className="bg-yellow-400 text-white px-2 py-1 rounded">Edit</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TweetList;