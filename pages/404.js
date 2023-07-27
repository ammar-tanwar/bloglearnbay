import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NotFound from "../components/NotFound/NotFound";
export default function Home() {
    return (
      <div>
        <Head>
          <title>404 - Page Not Found</title>
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
        </Head>
        <main>
        <Navbar popup={true} dataScienceCounselling={true} radio={true}/>
        <NotFound />
        <Footer />
      </main>
    </div>
  );
}