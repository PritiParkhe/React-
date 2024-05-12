import React from 'react';
import appwriteService from "../appwrite/Config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 '>
                <div className='w-full flex justify-center mb-4'>
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className='rounded-xl object-cover w-full h-48 sm:h-64'
                        // Adjust the height as needed, 'h-48' for small screens and 'sm:h-64' for larger screens
                    />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
