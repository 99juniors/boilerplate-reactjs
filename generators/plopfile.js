module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your COMPONENT name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.js',
        templateFile: 'templates/component.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.js',
        templateFile: 'templates/component-styles.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.js',
        templateFile: 'templates/component-stories.js.hbs'
      },
      {
        type: 'append',
        path: '../src/components/index.js',
        pattern: `/* COMPONENT_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`
      },
      {
        type: 'append',
        path: '../src/components/index.js',
        pattern: `/* COMPONENT_INJECT_EXPORT */`,
        template: `  {{pascalCase name}},`
      }
    ]
  });
};
