import Settings from '../services/settings';
import mongoose from 'mongoose';

class DataBase {

  static init() {
    return new Promise((resolve, reject) => {
      mongoose.connect(Settings.DBUrl, { useNewUrlParser: true });
      mongoose.connection.on('error', () => {
        console.error('Can not connect to DB');
        reject();
      });
      mongoose.connection.once('open', () => {
        console.log('Successfully connected to DB');
        resolve();
      });
    });
  }
}

export default DataBase;
