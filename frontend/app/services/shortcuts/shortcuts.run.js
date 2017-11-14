(function(angular) {
  'use strict';

  angular.module('linagora.esn.unifiedinbox')
    .run(runBlock);

  function runBlock(
    esnShortcuts,
    newComposerService,
    INBOX_SHORTCUTS_CATEGORY,
    INBOX_SHORTCUTS_NAVIGATION_CATEGORY,
    INBOX_SHORTCUTS_ACTIONS_CATEGORY
  ) {
    var subCategories = [INBOX_SHORTCUTS_NAVIGATION_CATEGORY, INBOX_SHORTCUTS_ACTIONS_CATEGORY];

    subCategories.forEach(function(subCategory) {
      subCategory.parentId = INBOX_SHORTCUTS_CATEGORY.id;
      subCategory.moduleDetector = INBOX_SHORTCUTS_CATEGORY.moduleDetector;
    });
    esnShortcuts.register(INBOX_SHORTCUTS_CATEGORY);
    esnShortcuts.register(INBOX_SHORTCUTS_NAVIGATION_CATEGORY);
    esnShortcuts.register(INBOX_SHORTCUTS_ACTIONS_CATEGORY);

    esnShortcuts.use(INBOX_SHORTCUTS_CATEGORY.shortcuts.OPEN_COMPOSER, function() {
      newComposerService.open({});
    });
  }
})(angular);