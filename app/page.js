import LoginBtn from "./login-btn";
import AppDescription from "./app-description";

export default function Page() {
	return (
		<div>
			<h1>Auth Testing</h1>
			<div>
			{/* here we are wrapping teh LoginBtn around the AppDescription component. This make the AppDesc component a child of the LoginBtn, which makes it possible to pass the AppDesc as a {children} prop to the LoginBtn. The LoginBtn is a client component, but this allows us to render the AppDesc as a serrver component inside of a client component */}
				<LoginBtn>
					<AppDescription />
				</LoginBtn>
			</div>
		</div>
	);
}
