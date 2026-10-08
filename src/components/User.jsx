function User({name, role}){
    function display(name, role) {
        console.log(`Użytkownik: ${name}`);
        console.log(`Rola: ${role}`);
    }


    return (
        <section>
        <h2>Informacje o użytkowniku</h2>
        <button onClick={() => display(name, role)}>
            Pokaż informacje
        </button>
        </section>
    )
}

export default User;