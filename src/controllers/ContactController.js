const validator = require("validator");
const transporter = require("../config/nodemailer");

class ContactController {
  async store(req, res){
    try {
      const { text, from, name } = req.body;

      if(!validator.isEmail(from)){
        return res.status(400).json({ errors: ["O e-mail de contato é inválido."] });
      }

      if(!text || !from || !name){
        return res.status(400).json({ errors: ["As informações de contato estão faltando."] });
      }

      transporter.sendMail({
        text: text,
        subject: `Meu Portfólio - ${name} mandou uma mensagem.`,
        from: from,
        to: ["guilhermesebastiaou.u@gmail.com"],
      });

      return res.json({ success: ["Mensagem enviada"] });
    } catch(error){
      res.status(400).json({ errors: ["Algo deu errado, tente novamente mais tarde."] });
    }
  }
}

module.exports = new ContactController();
