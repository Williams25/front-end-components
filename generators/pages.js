module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application controller",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "page name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/index.tsx",
        templateFile: "../templates/pages/index.tsx.hbs",
      },
    ],
  });
};