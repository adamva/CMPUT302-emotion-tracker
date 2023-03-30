import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Calendar</Link>
                  <Link to="/graph">Graph</Link>
            </div>
      )
}
export default Navbar;
