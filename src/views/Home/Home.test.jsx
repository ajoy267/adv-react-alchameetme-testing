import { render, screen } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const name = await screen.findByText(/vonta/i)
  const motto = await screen.findByText(/res non verba/i)
  const avatar = await screen.findByAltText(/avatar/i)
  const headerImg = await screen.findByAltText(/header/i)
  const list = await screen.findAllByRole('listitem')
  const interest = await screen.findByText(/interests/i)

  expect(name).toBeInTheDocument()
  expect(motto).toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
  expect(headerImg).toBeInTheDocument()
  expect(list).toHaveLength(6)
  expect(interest).toBeInTheDocument()
})
