import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';
import Post from '../Post';

export default function IndexPage() {
    const { userInfo } = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (userInfo) {
            const token = userInfo.token;

            fetch('https://blogit-sioi.onrender.com/post', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            });
        }
    }, [userInfo]);

    return (
        <div>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} key={post._id} />
            ))}
        </div>
    )
}
