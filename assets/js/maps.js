function initMap() {
        var myLatLng = {lat: 37.059805, lng: -8.0298832}; 

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Be sure to check the Satellite close up view!!'
        });
      }
   // map c/o google maps //