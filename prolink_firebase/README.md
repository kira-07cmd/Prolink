# Prolink - Sistema de Networking Profissional

Este é um projeto de TCC que consiste em uma plataforma web para networking profissional.

## 🎯 Preparação para Apresentação do TCC

### Checklist do Dia da Apresentação:

1. **2 horas antes**:
   - [ ] Teste todas as funcionalidades principais
   - [ ] Verifique a conexão com internet
   - [ ] Prepare uma conta de demonstração já verificada
   - [ ] Tenha os slides abertos em outro navegador

2. **30 minutos antes**:
   - [ ] Abra o projeto no VS Code
   - [ ] Inicie o servidor local
   - [ ] Deixe uma aba do navegador com o console aberto (F12)
   - [ ] Teste o login com a conta de demonstração

3. **Backup e Segurança**:
   - [ ] Tenha uma cópia do projeto em um pendrive
   - [ ] Salve as credenciais do Firebase em local seguro
   - [ ] Tenha prints das telas principais (caso a internet falhe)
   - [ ] Anote as senhas necessárias

### Roteiro de Demonstração:

1. **Início** (2-3 min):
   - Mostrar a tela inicial
   - Explicar o propósito do sistema
   - Destacar o design moderno

2. **Cadastro** (3-4 min):
   - Demonstrar o processo de cadastro
   - Mostrar as validações (email, senha, nome completo)
   - Explicar o sistema de verificação de email

3. **Login** (2-3 min):
   - Mostrar o processo de login
   - Demonstrar as mensagens de erro
   - Explicar as medidas de segurança

4. **Funcionalidades** (5-7 min):
   - Demonstrar a escolha de tipo de conta
   - Mostrar o feed
   - [Outras funcionalidades específicas]

## 📋 Pré-requisitos

Para rodar o projeto, você precisa ter:

- Navegador web moderno (Chrome, Firefox, Edge)
- Conexão com internet
- Servidor local (como Live Server do VS Code)

## 🚀 Como executar

1. Clone ou baixe este repositório
2. Abra o projeto no VS Code
3. Instale a extensão "Live Server" se ainda não tiver
4. Clique com botão direito em `front/teladelogin.html`
5. Selecione "Open with Live Server"

## ⚠️ Importante para apresentação

### Verificar antes da apresentação:

1. Teste criar uma nova conta
2. Verifique se o email de verificação está chegando
3. Teste fazer login com a conta criada
4. Verifique se o redirecionamento para escolha de conta funciona

### Se algo der errado durante a apresentação:

1. **Problema de conexão**:
   - Verifique se há internet
   - Tente acessar por `localhost` ou `127.0.0.1`

2. **Email não chega**:
   - Verifique a pasta de spam
   - Use o botão "Reenviar email de verificação"

3. **Erro de login**:
   - Verifique se o email foi verificado
   - Tente criar uma nova conta para teste

## 🔒 Configurações do Firebase

O projeto usa Firebase para autenticação e banco de dados. As configurações estão em `front/firebase.js`.

Domínios autorizados:
- localhost
- 127.0.0.1
- prolink-37670.firebaseapp.com
- prolink-37670.web.app

## 📱 Funcionalidades

- Autenticação de usuários
- Verificação de email
- Escolha de tipo de conta
- Sistema de feed
- [Outras funcionalidades do seu projeto]

## 🤝 Suporte

Em caso de dúvidas durante a apresentação:
1. Verifique os logs no console do navegador (F12)
2. Siga as mensagens de erro que aparecem na tela
3. Consulte este README para soluções comuns 