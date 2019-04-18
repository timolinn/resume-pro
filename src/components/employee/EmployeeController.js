import Employee from './employeeModel';
import AppError from '../../handlers/AppError';
import EmployeeGenerator from '../generators/EmployeeGenerator';

export default class EmployeeController {
    constructor() {
        this.get = this.get.bind(this);
        this.getOne = this.getOne.bind(this);
    }

    async get(req, res, next) {
        return res.json(await Employee.find({}));
    }

    async getOne(req, res, next) {
        const employee = await Employee.findById({_id: req.params.employeeId});

        if (!employee) {
            return next(new AppError('Employee not found', 404, true));
        }
        return res.json(employee);
    }

    async create(req, res, next) {
        const employeeGen = new EmployeeGenerator();
        const employee = new Employee(employeeGen.generate());
        await employee.save();
        res.json(employee);
    }
}