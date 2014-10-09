define(['./lib', 'knockout', './ViewModel/MainViewModel', 'underscore'], function (lib, ko, mainViewModel, _) {
  ko.applyBindings(new mainViewModel());
});
