'use strict';

angular.module('linagora.esn.unifiedinbox', ['esn.jmap-js', 'angularMoment'])
  .config(function($routeProvider, routeResolver) {
    $routeProvider.when('/unifiedinbox', {
      templateUrl: '/unifiedinbox/views/partials/unifiedinbox'
    });
    $routeProvider.when('/unifiedinbox/:mailbox', {
      templateUrl: '/unifiedinbox/views/partials/listEmails',
      controller: 'listEmailsController'
    });
    $routeProvider.when('/unifiedinbox/:mailbox/:emailId', {
      templateUrl: '/unifiedinbox/views/partials/viewEmail',
      controller: 'viewEmailController'
    });
  });
