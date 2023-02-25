
const signUp = () => {
    // e.preventDefault();
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    console.log(inputName.value)

    if(inputName.value === "" || inputEmail.value === "") {
        alert("Não foi possível concluir o seu cadastro");
    } else {
        alert("Cadastro efetuado com sucesso!");
    }
}