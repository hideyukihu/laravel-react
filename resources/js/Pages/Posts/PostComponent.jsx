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


            {/* <Link href="/api/v1/posts/1" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">一覧</Link> */}
        </>
    );
}


