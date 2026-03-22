# 🌐 Login Frontend — Interface de Usuário

Interface responsiva e moderna para o sistema de autenticação. Desenvolvida para oferecer uma experiência de usuário fluida, comunicando-se diretamente com a [API de Login](https://github.com/jcdev01/Login-backend-API) para realizar operações de cadastro, login e alteração de senha.

---

## 🚀 Tecnologias

| Tecnologia | Descrição |
|---|---|
| HTML5 | Estruturação semântica das páginas |
| CSS3 | Estilização personalizada e design responsivo |
| JavaScript (Vanilla) | Consumo de API, manipulação do DOM e autenticação |
| Google Identity Services (GSI) | Login social via Google OAuth2 |
| SweetAlert2 | Alertas e feedbacks visuais |
| Vercel | Plataforma de deploy e hospedagem |

---

## 📱 Funcionalidades

- **Login (`index.html`)** — Entrada para usuários já cadastrados, com suporte a login via Google
- **Cadastro (`cadastro.html`)** — Formulário para criação de novas contas
- **Boas-Vindas (`bemvindo.html`)** — Área restrita acessada após autenticação bem-sucedida
- **Confirmação de Conta (`confirmado.html`)** — Feedback visual após validação do token de e-mail

---

## 🏗️ Estrutura do Projeto

```
/
├── 📁 assets            # Imagens e recursos visuais
├── 📁 css               # Folhas de estilo (global e específicas por página)
├── 📁 js                # Scripts de consumo da API e lógica de interface
├── index.html           # Tela principal de login
├── cadastro.html        # Tela de registro
├── alterar_senha.html   # Fluxo de recuperação de senha
├── bemvindo.html        # Dashboard pós-login
└── confirmado.html      # Confirmação de conta por e-mail
```

---

## 🔗 Integração com o Backend

Este frontend consome os endpoints da **[API Login Backend](https://github.com/jcdev01/Login-backend-API)**:

| Ambiente | URL Base |
|---|---|
| Local | `http://localhost:8080` |
| Produção | Hospedada na Railway |

Os scripts em JavaScript utilizam `fetch` para enviar os dados dos formulários e armazenam o **Token JWT** no `localStorage` do navegador para manter a sessão ativa.

---

## ▶️ Como executar

**1. Clone o repositório:**
```bash
git clone https://github.com/jcdev01/login-frontend.git
cd login-frontend
```

**2. Abra no navegador:**

Basta abrir o arquivo `index.html` diretamente no navegador, ou utilizar a extensão **Live Server** no VS Code para hot reload durante o desenvolvimento.

---

## 🚀 Deploy

O projeto está disponível online através da **Vercel**:

🔗 [Visualizar Interface Online](https://login-frontend-orcin.vercel.app)

---

## ⚠️ Avisos

> **Integração com a API:** Para que o login e cadastro funcionem corretamente ao rodar localmente, certifique-se de que o backend está rodando em `http://localhost:8080` ou ajuste a URL base nos arquivos dentro da pasta `js/`.

---

## 👨‍💻 Autor

Desenvolvido por **Jairo**
