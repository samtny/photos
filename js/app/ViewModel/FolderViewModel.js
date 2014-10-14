define(['knockout', 'underscore'], function (ko) {
  var folderViewModel = function (data, nestlevel) {
    var folder = this;

    folder.name = ko.observable(data.name);
    folder.nestlevel = nestlevel || 0;

    folder.parents = ko.observableArray([]);
    folder.children = ko.observableArray([]);

    _.each(data.parents, function (item) {
      folder.parents.push(new folderViewModel(item))
    });

    _.each(data.children, function (item) {
      folder.children.push(new folderViewModel(item, nestlevel + 1));
    });

    folder.expanded = ko.observable(false);

    console.log('folder', folder);
  };

  folderViewModel.prototype.toggleExpanded = function () {
    this.expanded(!this.expanded());
  };

  return folderViewModel;
});
