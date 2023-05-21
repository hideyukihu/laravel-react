import { useEffect, forwardRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { usePage, InertiaLink } from '@inertiajs/inertia-react';
import { Home } from '../../Components/Home';
import { Link } from '@inertiajs/react';

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
            <div class="flex flex-col items-center justify-center my-3">
                <Link href="/posts/create" method="get" as="button" type="button" class="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">登録</Link>
            </div>
        </>
    );
}

