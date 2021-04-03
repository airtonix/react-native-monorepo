exports.gather = function gather(questions) {
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
};
