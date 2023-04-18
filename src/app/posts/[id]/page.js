
//params es lo que viene en la ruta /posts/ { 1 }
export const Post =   ( { params } ) => {
  const { id } = params

  return (
    <h1> Esto es el post { id } </h1>
  )
}

export default Post;