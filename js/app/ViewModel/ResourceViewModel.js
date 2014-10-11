define(['knockout'], function (ko) {
  return function resourceViewModel(data) {
    var resource = this;

    resource.thumb = ko.observable('https://ec2-54-172-64-205.compute-1.amazonaws.com/resource/' + data['_id']['$id']);
    resource.alt = ko.observable(data['filename']);
  };
});