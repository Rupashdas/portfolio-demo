        var centerPosition= [27.783968, 39.051985];
        var indiaCenter= [20.7710289,73.7268583];
        var UAECenter= [24.3425114,51.712116];
        var UKCenter= [46.3573659,-5.354049];
        $('.map')
            .gmap3({
            center: centerPosition,
            zoom: 2,
            scrollwheel: false,
            mapTypeId: "shadeOfGrey", // to select it directly
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
        })
            .styledmaptype(
            "shadeOfGrey",
            [
                {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#F9CD0A"},{"lightness":40},{"visibility":"off"}]},
                {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
                {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},
                {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#F9CD0A"},{"lightness":17},{"weight":1.2}]},
                {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#F9CD0A"},{"lightness":20}]},
                {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
                {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},
                {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},
                {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#dddddd"},{"lightness":18}]},
                {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#F9CD0A"},{"lightness":16}]},
                {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#F9CD0A"},{"lightness":19}]},
                {"featureType":"water","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":17}]}
            ],
            {name: "Shades of Theme color"}
        )
            .marker({
        position: indiaCenter,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })  .marker({
        position: UAECenter,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })  .marker({
        position: UKCenter,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      });       






       var centerPosition= [18.754793, 79.593679];
       var MapKeyjaipur= [26.9082924,75.7939874];
       var MapKeygurdaon= [28.4250669,76.8496973];
       var MapKeymumbai= [19.1363092,72.833014];
       var MapKeypune= [18.5357969,73.8093084];
       var MapKeyhydrabad= [17.4126274,78.2679605];
       var MapKeybangalore = [12.9812205,77.6414069];
       var MapKeymysore = [12.3213862,76.6185943];
       var MapKeysalim = [11.6538948,78.0680942];
        $('.secondmap')
            .gmap3({
            center: centerPosition,
            zoom: 5,
            scrollwheel: false,
            mapTypeId: "shadeOfGrey", // to select it directly
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
        })
            .styledmaptype(
            "shadeOfGrey",
            [
                {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#ffffff"},{"lightness":40},{"visibility":"off"}]},
                {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
                {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},
                {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":17},{"weight":1.2}]},
                {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},
                {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":21}]},
                {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
                {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
                {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
                {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
                {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":19}]},
                {"featureType":"water","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":17}]}
            ],
            {name: "Shades of Theme color"}
        )
            .marker({
        position: MapKeyjaipur,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })  .marker({
        position: MapKeygurdaon,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      }) 
       .marker({
        position: MapKeymumbai,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      }) 
       .marker({
        position: MapKeypune,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })
       .marker({
        position: MapKeyhydrabad,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })
       .marker({
        position: MapKeybangalore,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })
       .marker({
        position: MapKeymysore,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      })
       .marker({
        position: MapKeysalim,
        icon: 'http://maps.google.com/mapfiles/marker_green.png'
      });