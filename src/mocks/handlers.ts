// import rest or graphQl
import { rest } from 'msw'

// Handlers is an array that accept a rest API with get, post, delete, or put, plus a function that accept res,req,ctx as parameters
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ name: 'Ribery' }, { name: 'Robben' }, { name: 'Kimmich' }])
    )
  }),
]
