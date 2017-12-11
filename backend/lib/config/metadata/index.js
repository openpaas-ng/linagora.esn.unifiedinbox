module.exports = dependencies => ({
  rights: {
    admin: 'rw',
    user: 'r'
  },
  configurations: {
    api: require('./api')(dependencies),
    'composer.attachments': require('./composer-attachments')(dependencies),
    downloadUrl: require('./download-url')(dependencies),
    drafts: require('./drafts')(dependencies),
    hiddenSharedMailboxes: require('./hidden-shared-mailboxes')(dependencies),
    'identities.default': require('./identities-default')(dependencies),
    identities: require('./identities')(dependencies),
    isJmapSendingEnabled: require('./is-jmap-sending-enabled')(dependencies),
    isSaveDraftBeforeSendingEnabled: require('./is-save-draft-before-sending-enabled')(dependencies),
    maxSizeUpload: require('./max-size-upload')(dependencies),
    numberItemsPerPageOnBulkDeleteOperations: require('./number-items-per-page-on-bulk-delete-operations')(dependencies),
    numberItemsPerPageOnBulkReadOperations: require('./number-items-per-page-on-bulk-read-operations')(dependencies),
    numberItemsPerPageOnBulkUpdateOperations: require('./number-items-per-page-on-bulk-update-operations')(dependencies),
    swipeRightAction: require('./swipe-right-action')(dependencies),
    uploadUrl: require('./upload-url')(dependencies),
    view: require('./view')(dependencies)
  }
});
