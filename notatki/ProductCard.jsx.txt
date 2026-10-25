import { useState } from "react";

function ProductCard({name, category, price, available}){
    const buttonText1 = "Pokaż szczegóły";
    const buttonText2 = "Ukryj szczegóły";

    const [visible, setVisible] = useState(false);
    const [likes, setLikes] = useState(0);

    return (
        <section style={{ 
            border: '1px solid #444', 
            padding: '20px', 
            margin: '15px auto', 
            borderRadius: '8px', 
            backgroundColor: '#2a2a2a', 
            maxWidth: '350px' 
        }}>
           <section className="aboutProduct">
                <h3>{name}</h3>
                {visible && <section className="hiddenInfo">
                    <p>Kategoria: {category}</p>
                    <p>Cena: {price} zł</p>
                    <p>Dostępność: {available ? "Dostępny" : "Niedostępny"}</p>
                    {/* 
                    'available' to props, ponieważ jest to stała cecha produktu przekazana z zewnątrz (przez rodzica) i komponent jej nie zmienia. 
                    'visible' to stan (state), ponieważ to lokalna informacja o interfejsie (czy szczegóły są widoczne), która zmienia się dynamicznie podczas interakcji użytkownika z kartą.
                    */}
                </section>}
                
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '15px' }}>
                    <button onClick={() => setVisible(!visible)}>
                        {visible ? buttonText2 : buttonText1}
                    </button>
                </div>
           </section>

           <section className="productLikes">
                <p>Polubienia: {likes}</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <button onClick={() => setLikes(likes + 1)}>
                        Lubię
                    </button>
                    <button onClick={() => setLikes(0)}>
                        Reset
                    </button>
                </div>
           </section>
        </section>
    )
}

export default ProductCard;