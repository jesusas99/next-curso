
const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
  }
  
  export default async function Listsofposts ({ params })  {
  
    const posts = await fetchPosts();
  
    return posts.slice(0,5).map(p =>(
            <article key={p.id}>
              <h2> { p.title } </h2>
              <p> { p.body } </p>
            </article>
          ))
  }
  