import { publicEstateService } from './publicEstateService.js';
import { responseInternalError, responseOK } from '../../common/http/httpResponseUtils.js';

export const publicEstateController = {
  getAllPublicEstates: async (req, res) => {
    try {
      const estates = await publicEstateService.getAllPublicEstates();
      return responseOK(res, estates);
    } catch (err) {
      return responseInternalError(res, "Error on getting public estates", err);
    }
  }
};
