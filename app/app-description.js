// getServerSession is a server-side function that returns a session object
// use getServersession to get the session object in a server-side component so you do not have to make two API calls which will slow everything down.
import { getServerSession } from "next-auth";
import UserInformation from "./user-information";

export default async function AppDescription() {
	// create a var called session and assign it the value of the session object
	const session = await getServerSession();
	console.log("this is the app description component");
	return (
		<div>
			<div>This is the application description component (server component)</div>
			<UserInformation data={session.user} />
		</div>
	);
}
