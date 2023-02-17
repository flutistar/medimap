import Head from "next/head";
import { ShowContent } from "src/components/show/ShowContent";

function ShowDetailPage(props) {
  const { show } = props;
  
  return (
    <>
      <Head>
        <title>{show.name}</title>
        <meta
          name="description"
          content={show.summary}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6rem",
          minHeight: "100vh",
          maxWidth: '1200px'
        }}
      >
        <ShowContent show = {show} />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const id = context.params.id
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  
  const show = await res.json()
  return {
    props: {
      show,
    },
    revalidate: 86400
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export default ShowDetailPage