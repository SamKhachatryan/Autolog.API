import app from '../config/app';

class Contollers {

  static init() {
    app.use((req, res) => res.status(404).send("API Not Found :)"));
  }
}

export default Contollers;