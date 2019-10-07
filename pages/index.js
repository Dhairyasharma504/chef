import Head from "next/head";
import Navbar from "../components/Navbar";
import Food from "../components/Food";
import About1 from "../components/About1";
import Text6 from "../components/Text6";
import Cards from "../components/Cards";
import Menu from "../components/Menu";
import Menu2 from "../components/Menu2";
import Cover from "../components/Cover";
import Talent from "../components/Talent";
import Chef from "../components/Chef";
import Blog from "../components/Blog";
export default () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </Head>
    <Navbar />
    <Food />
    <About1 />
    <Text6 />
    <Cards />
    <Menu />
    <Menu2 />
    <Cover />
    <Talent />
    <Chef />
    <Blog />
  </div>
);
