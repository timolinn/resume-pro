import DepartmentController from '../components/departments/DepartmentController';
import express from 'express';

const {
  catchErrors,
} = require('../helpers');
const router = express.Router();

router.post('/', catchErrors(new DepartmentController().create));

export default router;
