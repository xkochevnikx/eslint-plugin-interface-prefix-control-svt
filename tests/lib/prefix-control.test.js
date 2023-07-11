const rule = require('../../lib/rules/prefix-control');

const RuleTester = require('eslint').RuleTester;
//дополнительный парсер нужен для корректной работы с ts кодом поскольку eslint этого не умеет
const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run('rule: interfaces', rule, {
    //правильный синтаксис не вызывает ошибок
    valid: ['interface IAnotherInterface { preview: boolean; }'],
    //не правильный должен выкинуть ошибку
    invalid: [
        {
            code: 'interface AnotherInterface { preview: boolean; }',
            errors: [{ message: 'Interfaces must start with a capital I' }],
            output: 'interface AnotherInterface { preview: boolean; }',
        },
    ],
});
