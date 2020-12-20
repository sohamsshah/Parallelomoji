import './Navbar.css'
export default function Navbar(){
    return(
        <div>
              <nav className="navigation container">
              <div className="nav-brand">  📙 Parallelo<span className="navbar-heading-design">mojipedia</span> </div>
              <ul class = "list-non-bullet nav-pills">
                <li class="list-item-inline">
                    <a class="link link-active" href="https://emojipedia.org/people/">😃 Smileys and People | </a>
                </li>
                <li class="list-item-inline">
                    <a class="link link-active" href="https://emojipedia.org/nature/">🐻 Animals and Nature |</a>
                </li>
                <li class="list-item-inline">
                    <a class="link link-active" href="https://emojipedia.org/food-drink/">🍔 Food and Drink |</a>
                </li>
                <li class="list-item-inline">
                    <a class="link link-active" href="https://emojipedia.org/activity/">⚽ Activity |</a>
                </li>
                <li class="list-item-inline">
                    <a class="link link-active" href="https://emojipedia.org/travel-places/">🌇 Travel and Places |</a>
                </li>
                <li class="list-item-inline">
                    <a class="link link-active" href="https://emojipedia.org/objects/">💡 Objects |</a>
                </li>
                <li class="list-item-inline">
                    <a class="link link-active" href="https://emojipedia.org/symbols/">🔣 Symbols |</a>
                </li>
                <li class="list-item-inline">
                    <a class="link link-active" href="https://emojipedia.org/flags/">🎌 Flags </a>
                </li>
                
            </ul>
            
        </nav>
        </div>
        )
}