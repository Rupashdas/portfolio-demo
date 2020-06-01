//map option
            function initMap() {
                var location = {lat: 23.7580679, lng: 90.3844153};
                map = new google.maps.Map(document.getElementById('map'), {
                    center: location,
                    zoom: 15,
                    scrollwheel: false
                });
                //map marker
                var marker = new google.maps.Marker({
                    position: location,
                    map: map
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: '<div style="background: #06d6a0; color: #fff; padding: 20px;"> <h3 style="color: #fff;" >Address</h3><p>470 Lucy Forks, Patriciafurt, YC7B 3UT</p> <h2 style="color: #fff;">Phone Number</h2> <br/> <span style="padding-right: 15px; ">(0161) 347 8854</span> <span>(0161) 347 8854</span></div>'
                });
                marker.addListener('click', function(){
                    infoWindow.open(map, marker);
                });

            }