import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts
            .sort((postA, postB) => new Date(postA.date) - new Date(postB.date))
            .map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
