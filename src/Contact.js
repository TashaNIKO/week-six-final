import React from "react";

function Contact () {
return <div>
    <h1>CONTACT US</h1>
    <ul>
        <li><h3>Call us: +1 999 99 99</h3></li>
        <li><a href="https://t.me/" target="_blank"> <img class="icon-contact" src="https://cdn.glitch.me/7ec6e601-a416-4405-9658-21e26cf130a9%2Ftelegram.png?v=1634884313674" alt="telegram" width="50px"/></a></li>
        <li><h3 class="heading">Make an order</h3></li>
        <form>
        <div>
<label>First name</label>
<input type="text"/>
       </div> 
       <div >
<label>Last name</label>
<input type="text"/>
       </div>   
       <div >
<label>Your phone number</label>
<input type="tel" pattern="[0-9]{11,14}" required/>
       </div>
</form>
<div >
    <a href="mailtoo:tasha.y@mail.ru"> 
<button className="change">Send</button>
</a>
      </div>   
</ul>
</div>
}
export default Contact;