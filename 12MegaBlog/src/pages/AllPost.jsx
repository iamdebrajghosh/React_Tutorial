import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/setting.js'
import { Container, PostCard } from '../components'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-3 gap-4'>
                    {posts.map((post) => (
                        <PostCard key={post.$id} post={post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost
