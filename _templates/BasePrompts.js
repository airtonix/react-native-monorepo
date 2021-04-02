const path = require('path');

const lodash = require('lodash');
const { getPackages } = require('@manypkg/get-packages');

function gather(questions) {
  return async ({ prompter, args = {} }) => {
    const result = await questions.reduce(async (resultsPromise, question) => {
      const results = await resultsPromise;
      if (args[question.name]) question.initial = args[question.name];
      const answer = await prompter.prompt(question);
      const nestedQuestions =
        typeof question.questions === 'function'
          ? await question.questions({ ...results, ...answer })
          : question.questions;
      const nestedAnswers = Array.isArray(nestedQuestions)
        ? await gather(nestedQuestions)({ prompter, args })
        : {};

      return {
        ...results,
        ...answer,
        ...nestedAnswers,
      };
    }, Promise.resolve({}));
    return result;
  };
}

async function PackageName({ prompter, args = {} }) {
  return gather([
    {
      type: 'input',
      name: 'name',
      message: "What's the package name",
      questions: ({ name }) => [
        {
          type: 'input',
          name: 'code',
          initial: lodash.kebabCase(name),
        },
      ],
    },
  ])({ prompter, args });
}

async function PackageMeta({ prompter, args = {} }) {
  return gather([
    {
      type: 'input',
      name: 'package_name',
      message: "What's the module name",
      initial: `@airtonix/${args.code || 'unknown'}`,
    },
  ])({ prompter, args });
}

function PackageAppCode({ prompter, args }) {
  return ({ code }) =>
    gather([
      {
        type: 'input',
        name: 'package_id',
        initial: `com.airtonix.${code}`,
      },
    ])({ prompter, args });
}

async function GatherBySelection({ prompter, args = {} }) {
  const { packages } = await getPackages();
  const selections = gather([
    {
      type: 'select',
      name: 'appPath',
      message: 'Pick an app',
      choices: packages.map((package) => {
        const code = package.dir.split(path.sep).pop();
        const { name } = package.packageJson;
        return {
          message: `${code} [${name}]`,
          value: package.dir,
        };
      }),
    },
  ]);

  return selections({ prompter, args });
}

module.exports = {
  PackageName,
  PackageMeta,
  PackageAppCode,
  GatherBySelection,
};
