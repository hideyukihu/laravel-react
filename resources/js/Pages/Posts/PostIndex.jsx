import { useEffect, forwardRef } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { usePage } from '@inertiajs/inertia-react';
import { Home } from '../../Components/Home';

export default function PostIndex(props) {

    console.log(props);
    return (
        <>
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>タイトル</th>
                        <th>内容</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.props.posts.data.map((item) => (
                            <div key={item.id}>{item.title}</div>
                        ))}</td>
                        <td> {props.props.posts.data.map((item) => (
                            <div key={item.id}>{item.body}</div>
                        ))}</td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}

