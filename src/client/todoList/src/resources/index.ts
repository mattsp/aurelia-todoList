import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config
  .feature('resources/elements')
  .feature('resources/value-converters')
  .feature('resources/attributes');
}
