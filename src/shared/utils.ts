import { Classes } from './types';

// TODO: Add specs for utils!
export default class Utils {
  static makeClassName = (classes: Classes): string => {
    const keys = Object.keys(classes);
    const validClasses = keys.filter((key: string) => classes[key]);

    return validClasses.join(' ');
  };
}
