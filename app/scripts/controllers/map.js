'use strict';

/**
 * @ngdoc function
 * @name grabPoliceApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the grabPoliceApp
 */
angular.module('grabPoliceApp').
directive('myMap', function() {
  // directive link function
  var link = function(scope, element, attrs) {
    var map, infoWindow;
    var markers = [];

    // map config
    var mapOptions = {
      center: new google.maps.LatLng(10.3112933, 123.8898549),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: true
    };

    // init the map
    function initMap() {
      if (map === void 0) {
        map = new google.maps.Map(element[0], mapOptions);
      }
    }

    // place a marker
    function setMarker(map, position, title, content) {
      var marker;
      var markerOptions = {
        position: position,
        map: map,
        title: title,
        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
      };

      marker = new google.maps.Marker(markerOptions);
      markers.push(marker); // add marker to array

      google.maps.event.addListener(marker, 'click', function () {
        // close window if not undefined
        if (infoWindow !== void 0) {
          infoWindow.close();
        }
        // create new window
        var infoWindowOptions = {
          content: content
        };
        infoWindow = new google.maps.InfoWindow(infoWindowOptions);
        infoWindow.open(map, marker);
      });
    }

    // show the map and place some markers
    initMap();

    setMarker(map, new google.maps.LatLng(10.3112933, 123.8898549), 'Cebu', '<b>Cebu Police</b> <br/><br/>Call: +63 9384 398<br/>Message<br/>Send Report');
    setMarker(map, new google.maps.LatLng(14.3112933, 90.98400), 'Fuente', '<b>Fuente Police</b> <br/><br/>Call: +63 9849 843<br/>Message<br/>Send Report');
    setMarker(map, new google.maps.LatLng(16.3112933, 100.340), 'Lahug', '<b>Lahug Police</b> <br/><br/>Call: +63 1249 984<br/>Message<br/>Send Report');
    setMarker(map, new google.maps.LatLng(8.3112933, 85.980), 'Colon', '<b>Colon Police</b> <br/><br/>Call: +63 9833 984<br/>Message<br/>Send Report');
  };

  return {
    restrict: 'A',
    template: '<div id="gmaps"></div>',
    replace: true,
    link: link
  };
})
  .controller('MapCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
