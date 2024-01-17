import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import maintenance from "@/app/public/images/under-maintenance.png";

// export default async function Blog() {
//   const posts = await getPosts();
//   console.log("POSTS", posts);
//   return (
//     <>
//       <Header />
//       <section className="container mt-16">
//         <h1 className="text-2xl font-semibold text-neutral-900 md:text-4xl">
//           Latest Articles
//         </h1>

//         {posts ? (
//           <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
//             {posts.map((post) => (
//               <Link
//                 href={"/blog/" + post.slug}
//                 className="inline-flex flex-col items-start justify-start gap-2.5"
//                 key={post.title}
//               >
//                 <Image
//                   src={post.coverImage}
//                   width={1600}
//                   height={840}
//                   alt={post.title}
//                   className="rounded-lg"
//                 />

//                 <div className="flex flex-col items-start justify-start gap-2.5 ">
//                   <div className="text-xl text-black ">{post.title}</div>

//                   <div className="inline-flex items-center justify-center gap-2 text-xs font-normal text-neutral-600">
//                     {/* <p>Published: {convertDate(post.dateAdded)}</p> */}
//                     <span>&bull;</span>
//                     <p>
//                       {post.readTime +
//                         (post.readTime === 1 ? " minute" : " minutes") +
//                         " read"}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center gap-4 py-20 mt-12 text-red-600">
//             <svg
//               className="w-8 h-8"
//               stroke="currentColor"
//               fill="currentColor"
//               stroke-width="0"
//               viewBox="0 0 24 24"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
//               <path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path>
//             </svg>
//             <p className="text-xl font-semibold">
//               Failed to fetch posts from API!
//             </p>
//           </div>
//         )}
//       </section>
//     </>
//   );
// }

export async function getPosts() {
  try {
    const { data } = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
      {
        user(username: "erbaafidotama") {
          publication {
            posts(page: 0) {
              _id
              slug
              brief
              coverImage
              title
              dateAdded
              contentMarkdown
              readTime
            }
          }
        }
      }`,
      }),
    }).then((response) => response.json());

    return data.user.publication.posts;
  } catch (err) {
    console.log(err);
  }
}

export default async function Blog() {
  return (
    <>
      <Header />
      <div class="grid h-screen place-items-center">
        <Image src={maintenance} alt="maintenance" className="w-96 h-96" />
      </div>
    </>
  );
}
