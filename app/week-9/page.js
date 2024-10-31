"use client"

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import HomeButton from "../_components/home-button";

export default function SignInPage() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const userInfo = () => {
        console.log(user);
    };

    return (
        <main className="p-5">
            <header>
                <HomeButton />
                <h1 className="text-3xl font-bold">Shopping List App</h1>
            </header>

            <section>
            <p>Sign in with:</p>
            <button className="bg-cyan-900 p-5 m-5 hover:bg-cyan-950 focus:bg-cyan-900" onClick={handleSignIn}>GitHub</button>
            <button className="bg-red-600 p-5 m-5  hover:bg-red-800 focus:bg-red-600" onClick={handleSignOut}>Sign out</button>
            <button>show info {console.log(user)}</button>
            </section>

            {
                user && <p>Welcome! {user.displayName} ({user.email})</p>
                
            }

            {
                user && <Link className="hover:underline" href="/week-9/shopping-list">Go to Shopping List</Link>
            }
        </main>
    );
}
