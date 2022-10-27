import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <h1>First Postt</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

// import Image from "next/image";

// const YourComponent = () => (
//   <Image
//     src="/images/profile.jpg" // Route of the image file
//     height={144} // Desired size with correct aspect ratio
//     width={144} // Desired size with correct aspect ratio
//     alt="Your Name"
//   />
// );
