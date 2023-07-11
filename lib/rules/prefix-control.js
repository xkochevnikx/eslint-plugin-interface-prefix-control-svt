'use strict';
const path = require('path');

module.exports = {
    //из правила экспортируется по сути один метод create и meta с настойками и описанием
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'An ESLint plugin to enforce or prevent the prefixing of interfaces',
            url: '',
        },
        fixable: null,
        //опции если что то принимаю из вне
        schema: [],
        messages: { IError: 'Interfaces must start with a capital I' },
    },

    //метод возвращает объект который работает с ast
    //context содержит всю важную информацию и методы
    create(context) {
        return {
            TSInterfaceDeclaration(node) {
                if (node.id.name[0] !== 'I') {
                    context.report({
                        node,
                        messageId: 'IError',
                    });
                }
            },
        };
    },
};
