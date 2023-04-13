// Any component that is passed here will be run as a client component which means it will be run in the browser and not on the server. This is useful for components that need to access the DOM or use browser APIs.
//  If you want it to run as a server component then you need to use getServerSession to get the session object and pass it to the component as a prop (i.e. children).
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component({ children }) {
	// create a var called session and assign it the value of the session object
	const { data: session } = useSession();
	// if the session object exists then return the following
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
				{children}
			</>
		);
	}
	// if the session object does not exist then return the following
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	);
}
// @see 