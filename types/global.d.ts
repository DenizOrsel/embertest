// Types for compiled templates
declare module 'testapp/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}
