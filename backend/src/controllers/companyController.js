
const crypto  = require('crypto');
const connection =  require('../database/connection');

module.exports = {

        //listar empresas
    async index(request, response){
        const company = await connection('company').select('*');

        return response.json(company);
    },

        //cadastra uma empresa
    async create(request, response) {
        const { CNPJ, razaoSocial, representante, descrição, email, telefone, city, uf} = request.body;

        const com_id = crypto.randomBytes(4).toString('HEX');

        await connection('company').insert({
            com_id,
            com_CNPJ, 
            com_razaoSocial, 
            com_representante, 
            com_descrição, 
            com_email, 
            com_telefone, 
            com_city, 
            com_uf
        })

        return response.json({ com_id});
    }


};