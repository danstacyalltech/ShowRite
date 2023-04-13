export default function Page({ data }) {
	console.log("this is the user-information component (client component)");
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
