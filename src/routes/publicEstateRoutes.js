import express from 'express';
import { publicEstateController } from '../modules/publicEstate/publicEstateController.js';
import { publicEstateEndpoints } from './routesConstants.js';

export const publicEstateRouter = express.Router();

publicEstateRouter.get(
  publicEstateEndpoints.getAllPublicEstates, 
  publicEstateController.getAllPublicEstates
);