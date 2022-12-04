import { LangProvider } from "../context/LangProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<LangProvider>
			<Component {...pageProps} />
		</LangProvider>
	);
}

export default MyApp;
