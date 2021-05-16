import * as path from 'path';

import { NodePlopAPI, PlopGenerator } from 'plop';
import { PackageJson, options } from '@airtonix-react-native/plop-prompts';

const TEMPLATE_DIR = path.join(__dirname, 'template');

export const NewAppGenerator = (
  plop: NodePlopAPI
): Omit<PlopGenerator, 'runPrompts' | 'runActions'> => ({
  description: '',
  actions: [
    {
      type: 'addMany',
      destination: 'apps/{{title}}',
      templateFiles: path.join(TEMPLATE_DIR, '**/*'),
      base: TEMPLATE_DIR,
      verbose: true,
    },
  ],
  prompts: async (inquirer) => {
    const answers = await PackageJson({ prompter: inquirer, args: options });
    console.log({ answers });
    return answers;
  },
});
