
const crypto  = require('crypto');
const connection =  require('../database/connection');

module.exports = {

        //listar 
    async index(request, response){
        const jovem = await connection('jovem').select('*');

        return response.json(jovem);
    },

        //cadastra 
    async create(request, response) {
        const { nome, CPF, nick, birth, email, whatsapp, city, uf} = request.body;

        const jov_id = crypto.randomBytes(4).toString('HEX');

        await connection('jovem').insert({
            jov_id,
            jov_nome, 
            jov_CPF,
            jov_nick,
            jov_birth,
            jov_email,
            jov_whatsapp,
            jov_city,
            jov_uf,
        })

        return response.json({ jov_id});
    }


};