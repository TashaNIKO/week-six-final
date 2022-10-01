import { useState } from 'react';
import { data } from "./data";
import Menu from "./Menu";
import Buttons from './Buttons';

 function Home () {
 const [menu, setMenu] = useState(data);

 const chosenMenu = (searchTerm) => {
 const newMenu = data.filter (element=>
    element.searchTerm===searchTerm);
    setMenu(newMenu);
}

  return (<div>
    <div className='cont'>
    <h2 className='back'>Takeaway food delivery</h2>
    </div>
    <Buttons filteredMenu = {chosenMenu}/>
    <Menu itemForOrder = {menu}/>
  </div>

  )
 }
 export default Home;