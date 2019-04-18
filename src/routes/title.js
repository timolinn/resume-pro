import TitleController from '../components/titles/TitleController';
import express from 'express';

const {
  catchErrors,
} = require('../helpers');
const router = express.Router();

router.post('/', catchErrors(new TitleController().create));
router.get('/', catchErrors(new TitleController().get));

export default router;
