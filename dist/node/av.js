'use strict';

/*!
 * LeanCloud JavaScript SDK
 * https://leancloud.cn
 *
 * Copyright 2016 LeanCloud.cn, Inc.
 * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
 */

/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
**/

var AV = module.exports = {};
AV._ = require('underscore');
AV.version = require('./version');
AV.Promise = require('./promise');
AV.localStorage = require('./localstorage');
AV.Cache = require('./cache');

// All internal configuration items
AV._config = AV._config || {};

require('./utils').init(AV);
require('./request').init(AV);

require('./error')(AV);
require('./event')(AV);
require('./geopoint')(AV);
require('./acl')(AV);
require('./op')(AV);
require('./relation')(AV);
require('./file')(AV);
require('./object')(AV);
require('./role')(AV);
require('./user')(AV);
require('./query')(AV);
require('./cloudfunction')(AV);
require('./push')(AV);
require('./status')(AV);
require('./search')(AV);
require('./insight')(AV);