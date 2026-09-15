"use client"

import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <nav className='fixed w-full z-10 shadow-sm'>
        <div className='py-4 border-b-gray-400'>
            <Container 
            className='
            flex 
            flex-row 
            justify-between
            items-center
            gap-5 
            md:gap-0
            '
            >
                <Logo />
                <Search />
                <UserMenu />
            </Container>
        </div>
    </nav>
  )
}

export default Navbar