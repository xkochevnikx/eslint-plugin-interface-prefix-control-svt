/**
 * @fileoverview interface prefix control
 * @author svt
 */
'use strict';

const requireIndex = require('requireindex');

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules');
