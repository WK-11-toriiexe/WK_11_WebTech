function Tablice(){
      const technology = [
        {
            id: 1,
            name: "React",
            category: "Frontend",
        },
        {
            id: 2,
            name: "Vite",
            category: "Frontend",
        },
        {
            id: 3,
            name: "Node.Js",
            category: "Backend",
        }
    ];

    return (
        <div>
            <div className="React">
                <p>Id: {technology[0].id}</p>
                <p>Nazwa:{technology[0].name}</p>
                <p>Kategoria:{technology[0].category}</p>
            </div>
            <div className="Vite">
                <p>Id: {technology[1].id}</p>
                <p>Nazwa:{technology[1].name}</p>
                <p>Kategoria:{technology[1].category}</p>
            </div>
            <div className="Node.Js">
                <p>Id: {technology[2].id}</p>
                <p>Nazwa:{technology[2].name}</p>
                <p>Kategoria:{technology[2].category}</p>
            </div>
        </div>
    )
}

export default Tablice;