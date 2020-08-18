import SessionsController from '@modules/users/infra/http/controllers/SessionController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default sessionsRouter;
