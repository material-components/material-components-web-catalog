import {CardReactTemplate} from '../CardCatalog';
import {TopAppBarReactTemplate} from '../TopAppBarCatalog';
import {ButtonReactTemplate} from '../ButtonCatalog';
import {TextFieldReactTemplate} from '../TextFieldCatalog';

const ReactTemplates = {
  'ButtonHero': (config) => ButtonReactTemplate(config),
  'CardHero': (config) => CardReactTemplate(config),
  'TextFieldHero': (config) => TextFieldReactTemplate(config),
  'TopAppBarHero': (config) => TopAppBarReactTemplate(config),
};

export default ReactTemplates;