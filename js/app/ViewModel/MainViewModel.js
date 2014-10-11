define(['jquery', 'underscore', 'knockout', './ResourceViewModel'], function ($, _, ko, resourceViewModel) {
  return function mainViewModel() {
    var main = this;

    main.title = ko.observable('Photos');
    main.resources = ko.observableArray([]);

    main.addResources = function (data) {
      _.each(data, function (resource) {
        main.resources.push(new resourceViewModel(resource));
      });
    };

    main.addFolders = function (data) {
      console.log('data', data);
    };

    main.getResources = function (parent) {
      parent = parent || '';

      $.ajax({
        url: 'https://ec2-54-172-64-205.compute-1.amazonaws.com/resource_list/' + parent
      })
        .done(main.addResources);
    };

    main.getFolders = function (parent) {
      parent = parent || '';

      $.ajax({
        url: 'https://ec2-54-172-64-205.compute-1.amazonaws.com/folder_list/' + parent
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
