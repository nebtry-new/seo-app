import styles from "@/styles/Home.module.css";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function Index({ data, message }: any) {
  if (data) {
    return (
      <>
        <Head>
          <title>{data.activity}</title>
          <meta name="description" content={data.key} />
          <meta property="og:title" content={data.activity} />
          <meta property="og:description" content={data.key} />
          <meta property="og:image" content={data.image} />
          <meta property="og:url" content={data.url} />
          <meta http-equiv="refresh" content={`1; url=${data.url}`}></meta>
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.title}>Redirecting...</div>
        </main>
      </>
    );
  }
  return <div>{message}</div>;
}

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  context
) => {
  try {
    let { data } = await axios.get(
      `https://seo-app-nebtry-new.vercel.app/api/links/${context.params.code}`
    );
    if (data) {
      return {
        props: {
          data,
        },
      };
    }
  } catch (error) {
    return {
      props: {
        message: `Found error ${error}`,
      },
    };
  }
};
