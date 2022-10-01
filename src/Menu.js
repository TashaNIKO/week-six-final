import { useState } from "react";
function Menu ({itemForOrder}) {
return (
    
    <div className="products">
        
    {itemForOrder.map((element =>{
        
        const {id, name,searchTerm,price, ingredients, image, showMore} = element;

        /* const [showText, setShowText] = useState(false);
        const showTextClick = (element) => {
            element.showMore = !element.showMore
            setShowText(!showText)
          } */
    
        return (
            <div className="product-card" key={id}>
          <img src={image} width="340px"  height="400px" alt="food"/>
        
        <div className="product-info">
            <h3>{name}</h3>
            <h4>$ {price}</h4>
            <p>{ /* showMore ? */ ingredients /* : ingredients.substring(0,170)+ "...." */ }
          {/* <button onClick={()=>showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button> */}
          </p>
        </div>
        </div>
        )
    }))}
    </div>)
}
export default Menu;