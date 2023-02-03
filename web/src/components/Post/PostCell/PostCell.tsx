import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Post from 'src/components/Post/Post'

export const QUERY = gql`
  query FindPostById($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Post not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ post }: CellSuccessProps) => {
  return <Post post={post} />
}
