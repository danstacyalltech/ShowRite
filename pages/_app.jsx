import { SessionProvider } from "next-auth/react";

export default function App({
	// create a var called Component and assign it the value of the component that is being rendered
	Component,
	// create a var called pageProps and assign it the value of the props that are being passed to the component that is being rendered
	pageProps: { session, ...pageProps },
}) {
	return (
		// wrap the component that is being rendered in the SessionProvider component and pass the session object as a prop
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	);
}
