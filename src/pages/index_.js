import Head from 'next/head';
import ThreeScene from '../components/ThreeScene';
import '../styles/Home.module.css'; // Assuming you use CSS Modules (Next.js default)

export default function Home() {
  return (
    <>
      <Head>
        <title>Startup</title>
      </Head>
      <ThreeScene />
    </>
  );
}