import JobHistoryController from '../components/jobHistory/JobHistoryController';
import express from 'express';

const {
  catchErrors,
} = require('../helpers');
const router = express.Router();

router.post('/', catchErrors(new JobHistoryController().create));

export default router;
