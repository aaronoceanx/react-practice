import logo from "../images/airbnb-logo.png"

function Navbar(){
  return(
    <nav>
      <img className=".nav--logo"src={logo} alt='airbnb-logo'></img>
    </nav>
  )
}

export default Navbar