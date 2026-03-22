async function cadastrar_usuario() {
    
    // pegando o valor do input 
    const email=document.getElementById("email_cadastro").value;
    const password=document.getElementById("password_cadastro").value;
    const nome= document.getElementById("nome_cadastro").value;  
    
    //verificando se os campos foram preenchidos 
    if(!email || !password || !nome){
        Swal.fire({
        icon:"error",
        title:"atenção!",
        text:"preencha todos os campos"

        });
        return  
    }

    //verificando se o codigo tem menos de 8 caracteres
    if(password.length< 8){
        Swal.fire({
        icon:"error",
        title:"atenção!",
        text:"senha tem que ter no minimo 8 caracteres"
    })

    return

    }


    //enviando os dados para api
    const url="https://login-backend-api-production-43f3.up.railway.app/auth/register"
    const response= await fetch(url,{

        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({email,password,nome})
    }) 

   
    const data = await response.json();
    console.log(data)

    
    //verificando se o usuário foi castrado corretamente 
    if(response.ok){
    console.log("entrou no if") // ← adiciona isso
    Swal.fire({
        icon: "success",
        title: "cadastro realizado com sucesso",
        html: `<p>Um e-mail de confirmação foi enviado para:</p>
               <strong>${email}</strong>
               <p>Confirme seu e-mail para acessar sua conta.</p>`,
        confirmButtonText: "ok, vou verificar",
        allowOutsideClick: false
    }).then(() => {
        window.location.href = "bemvindo.html";
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

async function login_usuario() {

    const email=document.getElementById("email_login").value;
    const password=document.getElementById("password_login").value;
    

    if(!email || !password){
        Swal.fire({
            icon:"error",
            title:"atenção",
            text:"preencha todos os campos"
        })
        return
    }

    const url="https://login-backend-api-production-43f3.up.railway.app/auth/login"
    const response= await fetch(url,{

        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({email,password})
    }) 

   
    const data = await response.json();
    console.log(data)


    if(response.ok){
    localStorage.setItem("token",data.token);
    
    console.log("entrou no if") // ← adiciona isso
    Swal.fire({
        icon: "success",
        title: "login bem sucedido",
        html:"bem-vindo", 
        allowOutsideClick: false
    }).then(() => {
        window.location.href = "bemvindo.html";
    });
    }

    else{
        Swal.fire({
            icon:"error",
            title:"Atenção",
            text:"Email ou senha incorretos"
        })

    }


}

async function handleGoogleLogin(googleResponse) {
    const googleToken = googleResponse.credential;
    const response = await fetch("https://login-backend-api-production-43f3.up.railway.app/auth/google", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: googleToken })
    });
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem("token", data.token);
        Swal.fire({
            icon: "success",
            title: "Login realizado!",
            html: "Bem-vindo!",
            allowOutsideClick: false
        }).then(() => {
            window.location.href = "bemvindo.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Não foi possível autenticar com o Google"
        });
    }

}
 window.handleGoogleLogin = handleGoogleLogin;


 



