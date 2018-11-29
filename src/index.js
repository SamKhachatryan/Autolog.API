import Settings from './services/settings'
import Seed from './services/seed';
import DataBase from './config/database';
import Controllers from './controllers';
import { server } from './config/express';

server.listen(Settings.LocalPort, async () => {
  await DataBase.init();
  await Seed.init();
  Controllers.init();
  console.log(`Server runing at localhost:${Settings.LocalPort}`);
});