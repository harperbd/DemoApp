'use strict';

eventsApp.controller('EditEventController',
    function EditEventsController($scope) {

      $scope.saveEvent = function(event, newEventForm) {
        console.log(newEventForm);
        if(newEventForm.$value) {
          window.alert('Event: ' + event.name + ' saved!');
        }

      };

      $scope.cancelEvent = function() {

      };
    }
);