define(['jquery', 'knockout'], function ($, ko) {
  ko.bindingHandlers.pageTitle = {
    update: function (element, pageTitle) {
        document.title = ko.unwrap(pageTitle());
    }
  };

  return {
    getBody: function () {
      return $('body');
    }
  }
});

