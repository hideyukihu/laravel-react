<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use App\Http\Resources\v1\PostResource;

class PostController extends Controller
{
    public function index()
    {
        return PostResource::collection(Post::all());
    }

    public function show(Post $post) {
        return new PostResource($post);
    }

    public function store(StorePostRequest $request)
    {
        Post::create($request->validated());
        return response()->json("Post Index");
    }

    public function update(StorePostRequest $request, Post $post) {
        $post->update($request->validated());
        return response()->json("Post Updated");
    }

    public function destroy(Post $post) {
        $post->delete();
        return response()->json("Post Deleted");
    }


}
