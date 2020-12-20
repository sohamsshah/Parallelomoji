import './Navbar.css'
export default function Navbar(){
    return(
        <div>
              <nav className="navigation container">
              <div className="nav-brand">  Parallelomojipedia </div>
              <ul class = "list-non-bullet nav-pills">
                <li class="list-item-inline">
                    <a class="link link-active" href="https://en.wikipedia.org/wiki/Morse_code">Smileys | </a>
                </li>
                <li class="list-item-inline">
                    <a class="link link-active" href="https://github.com/sohamsshah/Morse-decipher">Animals</a>
                </li>
            </ul>
            
        </nav>
        </div>
        )
}