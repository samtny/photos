define(['knockout'], function (ko) {
  return function folderViewModel(data) {
    var folder = this;

    folder.name = ko.observable(data.name);
    folder.parent = ko.observable(data.parent);

    console.log('folder', folder);
  };
});
