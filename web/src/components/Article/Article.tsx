import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article>
      <h2>
        <Link to={routes.article({ id: article.id })}>{article.title}</Link>
      </h2>
      <div>{article.body}</div>
      <div>{article.createdAt}</div>
    </article>
  )
}

export default Article
