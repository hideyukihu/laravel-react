import { useEffect } from 'react';
import { usePage, Link } from '@inertiajs/inertia-react';
import PostIndex from './PostIndex';
import '../../../css/app.css';



export default function PostComponent(props) {

    console.log(props);
    console.log(props.posts.data[0].title);

    return (
        <>
            <PostIndex props={props} />
            <div className=''>ポストコンポーネント</div>

            <Link href="/api/v1/posts/1">一覧</Link>
        </>
    );
}


