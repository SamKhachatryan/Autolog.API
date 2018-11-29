import path from 'path';

class Settings {
  static get LocalPort() { return 2001; };

  static get DBUrl() { return `mongodb://localhost:27017/autolog`; }

  static get MediaUrl() { return path.resolve(__dirname, '../../') + '/uploads/'; }

  static get JWT() {
    return {
      SecretOrKey: 'gasklfjhugr//asdlfkfo\*',
      Options: { expiresIn: 1000 * 60 * 60 * 24 * 90 },
    };
  }
};

export default Settings;