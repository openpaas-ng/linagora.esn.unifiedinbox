(function(angular) {
  'use strict';

  angular.module('linagora.esn.unifiedinbox')
    .controller('InboxConfigFormDisableForwardingController', InboxConfigFormDisableForwardingController);

  function InboxConfigFormDisableForwardingController($rootScope, INBOX_CONFIG_EVENTS) {
    this.cancelBtnClick = cancelBtnClick;

    function cancelBtnClick() {
      $rootScope.$broadcast(INBOX_CONFIG_EVENTS.DISABLE_FORWARDING_CANCELLED);
    }
  }
})(angular);
