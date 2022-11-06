import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus eligendi commodi dolorum odit debitis cum reiciendis officiis quia consequatur. Veniam excepturi quod necessitatibus quaerat dolore nostrum repellat debitis placeat facere?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero sint officia ducimus quasi molestiae ipsa exercitationem perspiciatis fuga reprehenderit delectus facere fugiat veniam, quibusdam quod eos illum eveniet quia.</p>
      </div>
    </>
  );
}

export default Home;
