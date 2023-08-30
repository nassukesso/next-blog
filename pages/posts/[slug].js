import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
}

function PostPage({ post }) {
  const postTitle = post.title + " - My Blog";
  return (
    <>
      <Head>
        <title>{postTitle}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
      </main>
    </>
  );
}

export default PostPage;
