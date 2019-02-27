import {ButtonReactTemplate} from '../ButtonCatalog';
import {CardReactTemplate} from '../CardCatalog';
import {TextFieldReactTemplate} from '../TextFieldCatalog';
import {TopAppBarReactTemplate} from '../TopAppBarCatalog';

const ReactTemplates = {
  'ButtonHero': (config) => ButtonReactTemplate(config),
  'CardHero': (config) => CardReactTemplate(config),
  'TextFieldHero': (config) => TextFieldReactTemplate(config),
  'TopAppBarHero': (config) => TopAppBarReactTemplate(config),
};

export default ReactTemplates;
