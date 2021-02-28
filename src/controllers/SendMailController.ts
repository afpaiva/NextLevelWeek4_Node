import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import { SurveysRepository } from '../repositories/SurveysRepository';
import { SurveyUsersRepository } from '../repositories/SurveysUsersRepository';

class SendMailController{
    async execute(request: Request, response: Response){
        const { email, survey_id } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepositry = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveyUsersRepository);
    
        const userAlreadyExists = await usersRepository.findOne({email});
        if (!userAlreadyExists) {
            return response.status(400).json({
                error: "User does not exists"
            });
        }
        const surveyAlreadyExists = await surveysRepositry.findOne({id: survey_id});
        if (!surveyAlreadyExists){
            return response.status(400).json({
                error: "Survey does not exists"
            });
        }

        // Salvar as informações na tablea surveyUser
        const surveyUser = surveysUsersRepository.create({
            user_id: userAlreadyExists.id,
            survey_id
        });
        await surveysUsersRepository.save(surveyUser);
        // Enviar e-mail ao usuário (nodemailer)

        return response.json(surveyUser);
    }
}

export { SendMailController };