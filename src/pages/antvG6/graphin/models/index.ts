import state from './state';
import * as reducer from './reducer';

import { configure } from 'concent';

configure("graphin",{state,reducer});