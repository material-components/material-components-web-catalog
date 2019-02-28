import {ButtonReactTemplate} from '../ButtonCatalog';
import {CardReactTemplate} from '../CardCatalog';
import {TextFieldReactTemplate} from '../TextFieldCatalog';
import {TopAppBarReactTemplate} from '../TopAppBarCatalog';

const ReactTemplates = {
  'button': (config) => ButtonReactTemplate(config),
  'card': (config) => CardReactTemplate(config),
  'text-field': (config) => TextFieldReactTemplate(config),
  'top-app-bar': (config) => TopAppBarReactTemplate(config),
};

export default ReactTemplates;
