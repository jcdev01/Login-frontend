async function cadastrar_usuario() {
    
    // pegando o valor do input 
    const email=document.getElementById("email_cadastro").value;
    const senha=document.getElementById("password_cadastro").value;
    const nome= document.getElementById("nome_cadastro").value;  
    


    //verificando se os campos foram preenchidos 
    if(!email || !senha || !nome){
        Swal.fire({
        icon:"error",
        title:"atenção!",
        text:"preencha todos os campos"

        });
        return  
    }



    const url="http://localhost:8080/users"

    const response= await fetch(url,{

        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({email,senha,nome})
    }) 

   
    const data = await response.json();
    console.log(data)

    
    //verificando se o usuário foi castrado corretamente 
    if(response.ok){

        Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Usuário cadastrado com sucesso!"
        }).then(() => {
        window.location.href = "login.html";
        });

    }

    else{
        Swal.fire({
            icon:"error",
            title:"erro",
            text:"não foi possivel cadastrar o usuário tente novamente mais tarde"


        })


    }
}



 



