import Title from './titlesModel';
import AppError from '../../handlers/AppError';
import TitlesGenerator from '../generators/TitlesGenerator';

export default class TitleController {
    async get(req, res, next) {
        res.json({message: "works"});
    }

    async create(req, res, next) {
        const titleGen = new TitlesGenerator();
        let newTitle = new Title(titleGen.generate());
        newTitle = await newTitle.save();
        res.json(newTitle);
    }
}