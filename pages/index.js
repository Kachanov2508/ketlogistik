import Grid from "../components/About/Grid/Grid";
import Video from "../components/About/Video/Video";
import Autopark from "../components/Autopark/Autopark";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layouts/Layout";
import Order from "../components/Order/Order";


export default function Home() {
	return (
		<>
			<Layout>
				<Hero />
                <Order />
                <Grid />
                <Video />
				<Autopark />
			</Layout>
		</>
	);
}
