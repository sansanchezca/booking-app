import './Navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
      <a href='/' className='logo'>Booking</a>
      <nav className='navbar'>
        <a href='/'>Home</a>
        <a href='/'>Services</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/' className='login'>Login</a>
      </nav>
    </header>
  )
}

export default Navbar