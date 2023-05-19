import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePage } from '@inertiajs/inertia-react';

export default function PostComponent(props) {

    console.log(props);
    console.log(props.posts.data[0].title);
    return (
        <>
                <div className='textCenter'>{props.posts.data[0].title}</div>
                <div>aaa</div>

        </>
    );
}


