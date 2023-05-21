<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use App\Http\Resources\v1\PostResource;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = PostResource::collection(Post::all());
        return Inertia::render('Posts/PostComponent', ['posts' => $posts]);
    }

    public function show(Post $post)
    {
        $postResource = new PostResource($post);

        return Inertia::render('Posts/PostCreate', [
            'post' => $postResource,
        ]);
    }

    public function store(StorePostRequest $request)
    {
        Post::create($request->validated());
        response()->json("Post Index");
        return to_route('posts.index');
    }

    public function update(StorePostRequest $request, Post $post)
    {
        $post->update($request->validated());
        return response()->json("Post Updated");
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json("Post Deleted");
    }
}
