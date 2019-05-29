import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

configure({ adapter: new Adapter() });

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = new JSDOM(documentHTML);
global.window = document.parentWindow;

const div = document.createElement('div');
global.document.getElementById = id => id === 'root' && div;
