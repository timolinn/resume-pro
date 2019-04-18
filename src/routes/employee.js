import EmployeeCtrl from '../components/employee/EmployeeController';
import express from 'express';

const {
  catchErrors,
} = require('../helpers');
const router = express.Router();

router.get('/', catchErrors(new EmployeeCtrl().get));
router.post('/', catchErrors(new EmployeeCtrl().create));
router.get('/:employeeId', catchErrors(new EmployeeCtrl().getOne));

export default router;
