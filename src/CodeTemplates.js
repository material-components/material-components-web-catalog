import {CardReactTemplate} from './CardCatalog';
import {ButtonReactTemplate} from './ButtonCatalog';

const ReactTemplates = {
  'ButtonHero': (config) => ButtonReactTemplate(config),
  'CardHero': (config) => CardReactTemplate(config),
  'CheckboxHero': () => {},
};

export default ReactTemplates;