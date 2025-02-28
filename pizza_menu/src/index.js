import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  
function App() {
    return(
        <div className='container'>
            <Header/>
            <Menu />
            <Footer />
        </div>
    )
}

 // header
function Header(){
    return(
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

function Pizza(props){
    return(
        <li className={`pizza ${props.soldOut ? 'sold-out' : ''}`}>
            <img src={props.photoName} alt="pizza"></img>
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.soldOut ? 'SOLD OUT' : `$${props.price}`}</span>
            </div>
        </li>
    )
}

// menu
function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return(
        <main className='menu'>
            <h2>Our Menu</h2>
        {numPizzas > 0 ?(
            <>
                    <p>Authentic Italian cuisine. 6 creative dishes to
                        choose from. All from our stone oven. all organic, all delicious.</p>
                     <ul className='pizzas'>
                     {
                          pizzaData.map((p, index) => (
                             <Pizza key={index} name={p.name} ingredients={p.ingredients} 
                                     price={p.price} photoName={p.photoName} soldOut={p.soldOut}/>
                          ))
         
                         }
                     </ul></>
        ): (
            <p>We' re still working on our menu. Please come back later :)</p>
        )}
        </main>
    )
}

// footer
function Footer(){
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = true;

    return(
        <footer className='footer'>
            {
                isOpen && (
                    <Order hour={hour} openHour={openHour} closeHour={closeHour} isOpen={isOpen}/>
                )
            }
        </footer>
    )
}

function Order(props) { 
    return(
        <div className='order'>
        <p>
            we're open until {props.closeHour}:00. com visit us or order online.
        </p>
        <button className='btn'>Order</button>
    </div>
    )
 }


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<App/>);