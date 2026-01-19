import React from 'react'
import appwriteService from '../appwrite/setting'
import { Link } from 'react-router-dom'

function PostCard({$id, title, content, featuredImage, status, userId}) {
    return (
        <Link to={`/post/${$id}`} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform" >
            <div className="flex flex-col h-full justify-between bg-amber-100 dark:bg-gray-900 rounded-lg">
                <div className="overflow-hidden h-72">
                    <img className="rounded-t-lg h-48 w-full object-cover" src={appwriteService.getFilePreview(featuredImage)} alt="" />
                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content.substring(0, 100)}...</p>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Status: {status}</p>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Author: {appwriteService.getUserName(userId)}</p>
                </div>
            </div>
            
        </Link>

    )
}

export default PostCard
