"use client";
import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  async function handleSignIn() {
    await gitHubSignIn();
  }

  async function handleSignOut() {
    await firebaseSignOut();
  }
  // Sign out of Firebase

  console.log(user);

  return (
    <div>
      <h1>Shopping List App</h1>
      <p>{user ? `Hi ${user.displayName}!` : "Please sign in"}</p>
      {user ? (
        <p>
          Sign in as {user.displayName} ({user.email})
        </p>
      ) : null}

      <p>
        {user ? (
          <>
            <Link href="/week-10/shopping-list">Shopping List</Link>
            <br />
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <button onClick={handleSignIn}>Sign In with GitHub</button>
        )}
      </p>
    </div>
  );
}
