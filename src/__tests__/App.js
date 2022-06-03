import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import App from '../App'
import Navbar from '../Components/Navbar/index'

describe('Testing routing Application', () => {
  beforeAll(() => {
    global.score = 0
    console.log('Resetting Score to 0')
  })

  describe('App component should', () => {
    beforeEach(() => {
      render(<App />)
    })

    it('render App', async () => {
      global.score += 1
    })

    it('have home link', async () => {
      const Home = screen.getByRole('link', {name: 'Home'})
      userEvent.click(Home)
      expect(window.location.pathname).toBe('/')
      expect(screen.getByText('Home Page').textContent).toBe('Home Page')
      global.score += 1
    })

    it('have about link', async () => {
      const About = screen.getByRole('link', {name: 'About'})
      userEvent.click(About)
      expect(screen.getByText(/About Page/i)).toBeInTheDocument()
    })

    it('contact link', async () => {
      const Contact = screen.getByRole('link', {name: 'Contact'})
      userEvent.click(Contact)
      expect(screen.getByText(/Contact Page/i)).toBeInTheDocument()
    })

    it('services link', async () => {
      const Services = screen.getByRole('link', {name: 'Services'})
      userEvent.click(Services)
      expect(screen.getByText(/Services Page/i)).toBeInTheDocument()
    })

    it('login link', async () => {
      const Login = screen.getByRole('link', {name: 'Login'})
      userEvent.click(Login)
      expect(screen.getByText(/Login Page/i)).toBeInTheDocument()
      global.score += 3
    })
  })

  describe('Navigation component, should ', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      )
    })

    it('render Navbar', async () => {
      global.score += 2
    })

    it('home link', async () => {
      const home = screen.getByText(/Home/i)
      userEvent.click(home)
      expect(window.location.pathname).toBe('/')
      // throw new Error('Fail')
    })

    it('about link', async () => {
      const About = screen.getByText(/About/i)
      userEvent.click(About)
      expect(window.location.pathname).toBe('/about-us')
    })

    it('contact link', async () => {
      const Contact = screen.getByText(/Contact/i)
      userEvent.click(Contact)
      expect(window.location.pathname).toBe('/contact')
    })

    it('services link', async () => {
      const Services = screen.getByText(/Services/i)
      userEvent.click(Services)
      expect(window.location.pathname).toBe('/services')
    })

    it('login link', async () => {
      const Login = screen.getByText(/Login/i)
      userEvent.click(Login)
      expect(window.location.pathname).toBe('/login')
      global.score += 3
    })
  })

  afterAll(() => {
    console.log('Final Score is', global.score)
  })
})
