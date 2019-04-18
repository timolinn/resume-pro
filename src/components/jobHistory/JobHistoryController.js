import JobHistory from './jobHistoryModel';
import JobHistoryGenerator from '../generators/JobhistoryGenerator';
import mongoose from 'mongoose';

export default class JobHistoryController {

    async create(req, res, next) {
        const titleId = req.body.title;
        const departmentId = req.body.department;

        // TODO: Randomize title and department ids
        // TODO: Use optional params to achieve this

        if (
            !titleId ||
            !departmentId ||
            !mongoose.Types.ObjectId.isValid(titleId) ||
            !mongoose.Types.ObjectId.isValid(departmentId)
        ) {
            return res.json({
                error: 'Invalid input. Error: you must provide valid title id and a department ID'
            });
        }

        // TODO: Verify department and title actually exist

        const JobHistoryGen = new JobHistoryGenerator();
        const newJobHistory = new JobHistory(JobHistoryGen.generate(departmentId, titleId));
        await newJobHistory.save();
        res.json(newJobHistory);
    }
}