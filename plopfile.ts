import { NodePlopAPI } from 'plop';

import { NewAppGenerator } from './generators/new/app/plopfile';

// eslint-disable-next-line import/no-default-export
export default function (plop: NodePlopAPI) {
  plop.setGenerator('app', NewAppGenerator(plop));
}
