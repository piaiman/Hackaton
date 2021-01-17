const connection =  require('../database/connection');

module.exports = {

    //lista
    async index(request, response) {
        const{page = 1 } = request.query;

        const[count] = await connection('incidents')
            .count();
        
        const incidents = await connection('incidents')
            .join( 'ongs' , 'ongs.id' , '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1 ) * 5)
            .select([
                    'incidents.*',
                    'ongs.name',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.city',
                    'ongs.uf',
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },


    //criar uma vaga

    async create(request, response) {
        const { title, descricao, requisitos,status} = request.body;
        const job_com_id = request.headers.authorization;
       
        const [ job_id ]= await connection('jobs').insert({
            job_title,
            job_description,
            job_requisito,
            job_status,
            job_com_id,
        });

        return response.json({ job_id});
    },

    //deleta uma vaga
    async delete(request, response) {
        const {job_id } = request.params;
        const  job_com_id  = request.headers.authorization;

        const jobs = await connection('jobs')
            .where('job_id',job_id)
            .select('job_com_id')
            .first();

            //verificação se da empresa que esta apagando a vaga

            if(jobs.job_com_id != job_com_id){
                return response.status(401).json({error: "Operação não permitida"});
                }

            await connection('jobs').where('job_id', job_id).delete();



        return response.status(204).send();
    },
}
