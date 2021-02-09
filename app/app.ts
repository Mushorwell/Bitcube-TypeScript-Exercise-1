import { Validate } from './validate';
import * as Helpers from './utility';

// add click handler to the start game button
document.getElementById('register')!.addEventListener('click', () => {
  Validate();
});