import {CardReactTemplate} from './CardCatalog';
import {ButtonReactTemplate} from './ButtonCatalog';
import {TextFieldReactTemplate} from './TextFieldCatalog';

const ReactTemplates = {
  'ButtonHero': (config) => ButtonReactTemplate(config),
  'CardHero': (config) => CardReactTemplate(config),
  'CheckboxHero': () => {},
  'TextFieldHero': (config) => TextFieldReactTemplate(config),
};

export default ReactTemplates;