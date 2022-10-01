function Buttons ({filteredMenu}) {
    return (
        <div className="cont">
<button className="change" onClick={()=> filteredMenu("snack")}>Snack</button>
<button className="change" onClick={()=> filteredMenu("soup")}>Soup</button>
<button className="change" onClick={()=> filteredMenu("main")}>Main</button>
<button className="change" onClick={()=> filteredMenu("dessert")}>Dessert</button>
<button className="change" onClick={()=> filteredMenu("drink")}>Drink</button>
        </div>
    )
}
export default Buttons;