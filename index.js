const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    // nessa parte precisa das configurações de sáida (SMTP) do provedor de email
    // aqui ficam algumas configurações do provedor de email do remetente
    // host do serviço de email
    host:'smtp-mail.outlook.com',
    // porta utilizada pelo serviço de email
    port:587,
    // basicamente, se a porta for 465 secure = true, caso contrário, securo = false
    secure: false,
    // aqui são necessários o nome de usuário do email remetente e a senha para acessar este email (como se fosse fazer um login)
    auth: {
        user: 'email@exemplo.com',
        pass: 'senha_exemplo',
    }
});


transport.sendMail({
    // no from coloca-se o nome do remetente do email seguido do email em si entre <>. por exemplo: "Fulano de Tal <fulano@email.com>"
    from: 'Exemplo <email@exemplo.com>',
    // no to coloca-se o email do destinatário
    to: 'email2@exemplo2.br',
    // subject é o Assunto do email
    subject: 'Assunto do email',
    // no html coloca-se um trecho de código html para montar o conteúdo do e-mail em si
    html: "<h1>Titulo</h1> <p>Boa tarde, tudo bem? Sou um email de exemplo.</p>",
    // o text serve para caso o servidor de email não consiga processar o conteúdo passado em html, irá mostrar o conteúdo do text em texto simples
    text: "Boa tarde, sou um email exemplo."
})
.then(() => console.log("Email enviado com sucesso!"))
.catch((err) => console.log("Falha ao enviar email: ", err));