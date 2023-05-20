import { useEffect, forwardRef } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { usePage } from '@inertiajs/inertia-react';
import { Home } from '../../Components/Home';

export default function PostIndex(props) {

    console.log(props);
    return (
        <>

            <h2 class="text-4xl font-bold dark:text-white text-center">一覧</h2>

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                タイトル
                            </th>
                            <th scope="col" class="px-6 py-3">
                                内容
                            </th>
                            <th scope="col" class="px-6 py-3">

                            </th>
                            <th scope="col" class="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.props.posts.data.map((item) => (
                            <tr key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.title}
                                </th>
                                <td class="px-6 py-4">
                                    {item.body}
                                </td>
                                <td>編集</td>
                                <td>削除</td>
                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>


        </>
    );
}

