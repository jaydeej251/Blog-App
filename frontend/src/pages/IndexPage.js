import { useEffect, useState } from 'react';
import Post from '../Post';

export default function IndexPage() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        
        fetch('https://blogit-sioi.onrender.com/post', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(posts => {
            setPosts(posts);
        });
        
    }, []);

    return (
        <div>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            )) }
        </div>
    )
}