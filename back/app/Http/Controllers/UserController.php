<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::select('id', 'email' ,'password')
            ->get();
        return response()->json(['success' => true, 'data' => $users], 200);
    }
    
    
    public function register(Request $request)
    {
        // Validation des données entrées par l'utilisateur
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ]);

        // Création d'un nouvel utilisateur avec les données fournies
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Envoi d'une réponse avec l'utilisateur nouvellement créé
        return response()->json([
            'success' => true,
            'message' => 'User created successfully',
            'user' => $user,
        ], 201);
    }
    

}