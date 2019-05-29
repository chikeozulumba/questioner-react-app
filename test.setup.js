import { JSDOM } from 'jsdom';
import 'jest-localstorage-mock';

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = new JSDOM(documentHTML);
global.window = document.parentWindow;

const div = document.createElement('div');
global.document.getElementById = id => id === 'root' && div;
