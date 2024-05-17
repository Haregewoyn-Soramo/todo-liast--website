
const NavBar =() => {
  return(
    <nav>
    
      <ul>
        <li><a style={{borderRadius:"50px", width:"100px", border:"1px solid white",height: "40px", padding:"10px", background:"orange"}} href="/">TODOLIST</a></li>
        <li><a href="/"> Home </a></li>
        <li><a href="/"> <input type="text" placeholder="serch for yor todolist"/></a></li>
        <li><a href="/"> LogIn</a></li>
        <li><a href="/add"> Add</a></li>
        <li><a href="/"> About</a></li>
        <li><a href="/"> Contact</a></li>

      </ul>
  
   </nav>
    
  )
}

export default NavBar