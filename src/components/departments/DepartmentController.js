import Department from './departmentModel';
import DepartmentGenerator from '../generators/DepartmentGenerator';
import mongoose from 'mongoose';

export default class DepartmentController {

    async create(req, res, next) {

        // TODO: Randomize manager Id
        // TODO: use optional parameters

        const managerId = req.body.manager;
        if (!managerId || !mongoose.Types.ObjectId.isValid(managerId)) {
            return res.json({ error: "invalid manager ID" });
        }
        const departmentGen = new DepartmentGenerator();
        const newDepartment = new Department(departmentGen.generate(managerId));
        await newDepartment.save();
        res.json(newDepartment);
    }
}