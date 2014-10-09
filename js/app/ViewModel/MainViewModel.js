define(['knockout'], function (ko) {
  return function mainViewModel() {
    var main = this;

    main.title = ko.observable('Photos');
  };
});
