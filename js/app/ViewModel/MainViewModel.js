define(['jquery', 'underscore', 'knockout', './FolderViewModel', './ResourceViewModel'], function ($, _, ko, folderViewModel, resourceViewModel) {
  return function mainViewModel() {
    var main = this;

    main.title = ko.observable('Photos');
    main.folders = ko.observableArray([]);
    main.folders_display = ko.observable('list');
    main.resources = ko.observableArray([]);

    main.addResources = function (data) {
      console.log('data', data);
      _.each(data, function (item) {
        main.resources.push(new resourceViewModel(item));
      });
    };

    main.addFolders = function (data) {
      console.log('data', data);
      _.each(data, function (item) {
        main.folders.push(new folderViewModel(item));
      })
    };

    main.getResources = function (parent) {
      parent = parent || '';

      $.ajax({
        url: 'https://ec2-54-172-64-205.compute-1.amazonaws.com/resource_list',
        data: {
          parent: ''
        }
      })
        .done(main.addResources);
    };

    main.getFolders = function (parent) {
      parent = parent || '';

      $.ajax({
        url: 'https://ec2-54-172-64-205.compute-1.amazonaws.com/folder_list',
        data: {
          parent: ''
        }
      })
        .done(main.addFolders);
    };

    main.init = function () {
      main.getFolders();
      main.getResources();
    };

    main.init();
  };
});
