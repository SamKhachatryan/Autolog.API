import jwt from 'jsonwebtoken';
import Settings from './settings';
// import UserModel from '../models/user';

export const authorize = rolesList => {
  return (req, res, next) => {
    if (!req.headers.authorization) return res.sendStatus(401);
    const token = req.headers.authorization.replace('Bearer ', '').replace('bearer ', '');
    jwt.verify(token, Settings.JWT.SecretOrKey, Settings.JWT.Options, async (error, dtls) => {
      if (error) return res.sendStatus(401);
      if (!rolesList && dtls._id) {
        //req.user = await UserModel.findOne({ _id: dtls._id });
        req.user ? next() : res.sendStatus(401);
      } else if (dtls._id) {
        //const user = await UserModel.findOne({ _id: dtls._id });
        //if (!user) return res.sendStatus(401);
        // rolesList.forEach(async item => {
        //   if (user.role === item) {
        //     req.user = user;
        //     return next();
        //   }
        // });

        if (!req.user) return res.sendStatus(403);
      } else return res.sendStatus(401);
    })
  }
}
