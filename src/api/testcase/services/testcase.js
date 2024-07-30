'use strict';

/**
 * testcase service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testcase.testcase');
