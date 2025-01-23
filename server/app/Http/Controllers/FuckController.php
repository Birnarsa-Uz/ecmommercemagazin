<?php

namespace App\Http\Controllers;

use App\Models\Fuck;
use Illuminate\Http\Request;

class FuckController extends Controller
{
    /**
     * Display a listing of the resource.
     */

   
    public function signup(Request $request){
        Fuck::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password
        ]);
        
        return response()->json(['status'=> '222']);
    }
    public function index(Request $request)
    {
        return response()->json(["javob" => "get metoddi ishladi"]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
