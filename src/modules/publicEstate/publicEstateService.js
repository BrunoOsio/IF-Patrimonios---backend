import { postgres } from '../../database/db.js';
import { publicEstateRepository } from './publicEstateRepository.js';

export const publicEstateService = {
  getAllPublicEstates: async () => {
    const { rows } = await postgres.query(publicEstateRepository.getPublicEstates);
    return rows;
  }
};
