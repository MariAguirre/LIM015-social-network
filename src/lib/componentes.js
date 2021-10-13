/* aqui vamos a crear el objeto que reuna a todos los
 archivos de view para no exportarlas de Una en uno */

import Login from './login.js';
import Registro from './register.js';
import Profile from './profile.js';
import Different from './error404.js';
import Navegador from './navegador.js';


const components = {
  login: Login,
  registro: Registro,
  navegador: Navegador,
  profile: Profile,
  different: Different,
};

export { components };
