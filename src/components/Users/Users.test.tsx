import { render, screen } from '@testing-library/react'
import { server } from '../../mocks/server'
import { rest } from 'msw'
import { Users } from './Users'

describe('Users', () => {
  test('Render correctly', () => {
    render(<Users />)
    const headingElement = screen.getByText('Users')
    expect(headingElement).toBeInTheDocument()
  })

  // Mocking http request by using mocking servce worker which is an API mocking library that intercept actual requests
  test('Render user names', async () => {
    render(<Users />)

    // Using find because it's an API request (async) and using All because we are returning many items
    const userList = await screen.findAllByRole('listitem')
    expect(userList).toHaveLength(3)
  })

  test('Render Error Message', async () => {
    // resimulate a failure server request, and this happend only in this test case because in setupTest we reset all handlers after each test case
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<Users />)
    const errorMessage = await screen.findByText('Error fetching users')
    expect(errorMessage).toBeInTheDocument()
  })
})
