import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/setting.js'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === null) {
        return (
            <div className='py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        <h1 className='text-2xl font-bold hover:text-cyan-200'>Login to read posts</h1>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-3 gap-4'>
                    {posts.map((post) => (
                        <PostCard {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
