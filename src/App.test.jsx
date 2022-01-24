import { findByText, getByAltText, getByText, render, screen } from '@testing-library/react'
import App from './App'

test.only('Should render the header', async () => {
  render(<App />)

  const logo = screen.getByAltText(/alchemy logo/i)
  expect(logo).toBeInTheDocument()

  const meet = screen.getByText(/meet/i)
  expect(meet).toBeInTheDocument()

  const name = await screen.findByText(/vonta/i)
  expect(name).toBeInTheDocument()
})
