define(['knockout'], function (ko) {
  return function resourceViewModel(data, dimensions) {
    var resource = this;

    resource.name = data.name;
    resource.thumb = ko.observable(dimensions || '200x200');
    resource.src = ko.observable('https://ec2-54-172-64-205.compute-1.amazonaws.com/resource?resource_id=' + data['_id']['$id'] + '&derivative=__thumbs/' + resource.thumb());
    resource.alt = ko.observable(data['filename']);

    resource.selected = ko.observable(false);

    resource.data = data;
  };
});
