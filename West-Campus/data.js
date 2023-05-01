var APP_DATA = {
  "scenes": [
    {
      "id": "0-west-main-elevators",
      "name": "West Main Elevators",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.30064009981189876,
          "pitch": 0.05540854066963341,
          "rotation": 0,
          "target": "7-west-2nd-floor-elevators"
        },
        {
          "yaw": -1.2660007761733354,
          "pitch": -0.05404474119663938,
          "rotation": 0,
          "target": "7-west-2nd-floor-elevators"
        },
        {
          "yaw": -2.3097392129505163,
          "pitch": 0.15319364480874142,
          "rotation": 0,
          "target": "2-west-main-lobby-suites-hallway"
        },
        {
          "yaw": 2.5301335379232057,
          "pitch": 0.25626366402145173,
          "rotation": 0.7853981633974483,
          "target": "1-west-main-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1189939175480212,
          "pitch": 0.11454186258916899,
          "title": "West Front Desk",
          "text": "The front desk is open 7 days a week from 10:00am - 2:00am. Residents can sign out sports and gaming equipment, collect mail and packages, and get assistance when the desk is staffed."
        }
      ]
    },
    {
      "id": "1-west-main-lobby",
      "name": "West Main Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2976393001643185,
          "pitch": 0.28267669226783987,
          "rotation": 0,
          "target": "2-west-main-lobby-suites-hallway"
        },
        {
          "yaw": -0.5533895900559731,
          "pitch": 0.35927415228271364,
          "rotation": 5.497787143782138,
          "target": "0-west-main-elevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-west-main-lobby-suites-hallway",
      "name": "West Main Lobby Suites Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1176726446292253,
          "pitch": 0.2639754811997701,
          "rotation": 0,
          "target": "0-west-main-elevators"
        },
        {
          "yaw": 2.424289137106374,
          "pitch": 0.25751243432739734,
          "rotation": 5.497787143782138,
          "target": "1-west-main-lobby"
        },
        {
          "yaw": -1.910247247173528,
          "pitch": 0.2103380871603786,
          "rotation": 5.497787143782138,
          "target": "3-west-laundry-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-west-laundry-room",
      "name": "West Laundry Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.1361172809512166,
        "pitch": 0.10165405431891905,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.42507647889554256,
          "pitch": 0.23590468210730897,
          "rotation": 0,
          "target": "2-west-main-lobby-suites-hallway"
        },
        {
          "yaw": 1.2020645112262063,
          "pitch": 0.11906824525605408,
          "rotation": 0,
          "target": "4-west-laundry-room-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.199921743867547,
          "pitch": -0.02638048170275553,
          "title": "West Laundry Room",
          "text": "The laundry room consists of several washer and dryers, vending machines, and folding stations.&nbsp;"
        }
      ]
    },
    {
      "id": "4-west-laundry-room-entrance",
      "name": "West Laundry Room Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6380870675869268,
          "pitch": 0.2868702659197524,
          "rotation": 5.497787143782138,
          "target": "3-west-laundry-room"
        },
        {
          "yaw": -1.991028911388458,
          "pitch": 0.1729437945454464,
          "rotation": 0,
          "target": "5-west-laundry-room-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-west-laundry-room-back",
      "name": "West Laundry Room Back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.649200421711278,
          "pitch": 0.3383693173976905,
          "rotation": 4.71238898038469,
          "target": "6-west-laundry-room-sideb"
        },
        {
          "yaw": 1.7359182488597735,
          "pitch": 0.36005412103268597,
          "rotation": 0,
          "target": "4-west-laundry-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-west-laundry-room-sideb",
      "name": "West Laundry Room SideB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.386909572158018,
          "pitch": 0.3789921639928515,
          "rotation": 0,
          "target": "5-west-laundry-room-back"
        },
        {
          "yaw": 2.6058398995227687,
          "pitch": 0.3223344046190153,
          "rotation": 0,
          "target": "4-west-laundry-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-west-2nd-floor-elevators",
      "name": "West 2nd Floor Elevators",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6109238818135054,
          "pitch": 0.12386316035643219,
          "rotation": 0,
          "target": "19-west-suite-outside"
        },
        {
          "yaw": -1.1387479826283187,
          "pitch": 0.14295795159884328,
          "rotation": 0,
          "target": "8-west-2nd-floor-computer-lab"
        },
        {
          "yaw": -1.961160577086254,
          "pitch": 0.15819472755667263,
          "rotation": 5.497787143782138,
          "target": "11-west-doubles-hallway-door"
        },
        {
          "yaw": 1.6752676226495105,
          "pitch": -0.05460299044145778,
          "rotation": 3.141592653589793,
          "target": "0-west-main-elevators"
        },
        {
          "yaw": 0.1551902659302229,
          "pitch": -0.047512616364304705,
          "rotation": 3.141592653589793,
          "target": "0-west-main-elevators"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1279065447319994,
          "pitch": -0.02312429498541846,
          "title": "West Computer Lab",
          "text": "Tour one of West's many study spaces!"
        },
        {
          "yaw": -0.6123581109498453,
          "pitch": 0.019987210764032426,
          "title": "Tour an accessible suite!",
          "text": "Max occupants: 4"
        },
        {
          "yaw": -2.0228740624006036,
          "pitch": -0.00966869452803465,
          "title": "Tour a standard double room!",
          "text": "Max occupants: 2&nbsp;"
        }
      ]
    },
    {
      "id": "8-west-2nd-floor-computer-lab",
      "name": "West 2nd Floor Computer Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2567450678822638,
          "pitch": 0.0485940897607442,
          "rotation": 0,
          "target": "7-west-2nd-floor-elevators"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3779144170353597,
          "pitch": -0.04721799800556603,
          "title": "West Computer Lab",
          "text": "The computer lab is equipped with several Windows and MAC computers, and is open for usage to all residential students."
        }
      ]
    },
    {
      "id": "9-west-2nd-floor-lounge-2",
      "name": "West 2nd Floor Lounge 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4359167594574984,
          "pitch": 0.12140808995816421,
          "rotation": 0,
          "target": "19-west-suite-outside"
        },
        {
          "yaw": 2.817511505481276,
          "pitch": 0.27102984474877445,
          "rotation": 0,
          "target": "10-west-2nd-floor-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4337056364399139,
          "pitch": -0.029138114184995345,
          "title": "Tour a West Suite!",
          "text": ""
        }
      ]
    },
    {
      "id": "10-west-2nd-floor-lounge",
      "name": "West 2nd Floor Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.033056011831458676,
          "pitch": 0.31591478714562626,
          "rotation": 0,
          "target": "9-west-2nd-floor-lounge-2"
        },
        {
          "yaw": 2.456215390180116,
          "pitch": 0.11895536127678419,
          "rotation": 0,
          "target": "12-west-hallway-doubles-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3816997232813879,
          "pitch": -0.21238454708211485,
          "title": "Community Lounge",
          "text": "This is a social space for residential students, with several seating options."
        }
      ]
    },
    {
      "id": "11-west-doubles-hallway-door",
      "name": "West Doubles Hallway Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.949243333187562,
          "pitch": 0.13961415379072584,
          "rotation": 0,
          "target": "14-west-hallway-doubles-1"
        },
        {
          "yaw": 1.5946262870925718,
          "pitch": 0.3426767210221069,
          "rotation": 0,
          "target": "7-west-2nd-floor-elevators"
        },
        {
          "yaw": 0.5832719854846147,
          "pitch": 0.2093815727525996,
          "rotation": 11.780972450961727,
          "target": "19-west-suite-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-west-hallway-doubles-entrance",
      "name": "West Hallway Doubles Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7570135161895344,
          "pitch": -0.004927238269171852,
          "rotation": 0,
          "target": "11-west-doubles-hallway-door"
        },
        {
          "yaw": 1.2642916864397833,
          "pitch": 0.13880797323110627,
          "rotation": 0,
          "target": "10-west-2nd-floor-lounge"
        },
        {
          "yaw": 0.2190942805505287,
          "pitch": 0.2256832485423903,
          "rotation": 0,
          "target": "14-west-hallway-doubles-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2584014568746937,
          "pitch": -0.19703887649238006,
          "title": "West Community Lounge",
          "text": ""
        }
      ]
    },
    {
      "id": "13-west-hallway-double-room",
      "name": "West Hallway Double Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "14-west-hallway-doubles-1",
      "name": "West Hallway Doubles 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3705090379472615,
          "pitch": 0.17173771330894994,
          "rotation": 0,
          "target": "12-west-hallway-doubles-entrance"
        },
        {
          "yaw": -3.0519705760905254,
          "pitch": -0.00395058040634666,
          "rotation": 0,
          "target": "12-west-hallway-doubles-entrance"
        },
        {
          "yaw": 1.779934877745788,
          "pitch": 0.18029769357229242,
          "rotation": 0,
          "target": "15-west-doubles-hallway-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3802659869874638,
          "pitch": -0.028568059831009407,
          "title": "Exit towards 2nd Floor Lobby",
          "text": ""
        },
        {
          "yaw": -3.066443333409799,
          "pitch": -0.2744976547964235,
          "title": "West Standard Double",
          "text": ""
        },
        {
          "yaw": 1.7807746702438498,
          "pitch": 0.03881654632400888,
          "title": "Community Lounge",
          "text": ""
        },
        {
          "yaw": -0.3471303259094203,
          "pitch": -0.2099765966536502,
          "title": "Community Bathroom",
          "text": "Each floor is gender assigned in the doubled wing. The bathrooms consist of several bathroom and shower stalls, sinks and mirrors."
        }
      ]
    },
    {
      "id": "15-west-doubles-hallway-lounge",
      "name": "West Doubles Hallway Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.893340706624631,
          "pitch": 0.17052424797052446,
          "rotation": 0,
          "target": "14-west-hallway-doubles-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7181077943681693,
          "pitch": -0.07798137412958894,
          "title": "Community Lounge",
          "text": "This space consists of various seating options as well as a TV and access to community WiFI and cable services."
        }
      ]
    },
    {
      "id": "16-west-hallway",
      "name": "West Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7492582717160055,
          "pitch": 0.17140661735819052,
          "rotation": 0,
          "target": "19-west-suite-outside"
        },
        {
          "yaw": 1.6013176124911253,
          "pitch": 0.33466572106335946,
          "rotation": 10.995574287564278,
          "target": "17-west-hallway-end-study-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-west-hallway-end-study-lounge",
      "name": "West Hallway End Study Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2586671798174844,
          "pitch": 0.0002784812185598895,
          "rotation": 0,
          "target": "18-west-2nd-floor-study-room"
        },
        {
          "yaw": 2.5379949597180396,
          "pitch": 0.3819653301151167,
          "rotation": 6.283185307179586,
          "target": "16-west-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-west-2nd-floor-study-room",
      "name": "West 2nd Floor Study Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1039585039115085,
          "pitch": -0.027427462738490505,
          "rotation": 0,
          "target": "17-west-hallway-end-study-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6219107671490463,
          "pitch": -0.152530634719243,
          "title": "West Study Room",
          "text": "This space offers a quiet and scenic location for residents to study or hang out.&nbsp;"
        }
      ]
    },
    {
      "id": "19-west-suite-outside",
      "name": "West Suite Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1278603881254714,
          "pitch": 0.1433459663614638,
          "rotation": 0,
          "target": "7-west-2nd-floor-elevators"
        },
        {
          "yaw": 3.045450253889454,
          "pitch": 0.18739672226652182,
          "rotation": 0,
          "target": "16-west-hallway"
        },
        {
          "yaw": -1.6680244366813977,
          "pitch": -0.0199881074835222,
          "rotation": 0,
          "target": "20-west-suite-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6585958876876532,
          "pitch": -0.29003035043065317,
          "title": "West Accessible Suite",
          "text": "Tour one of our accessible suites and all the included amenities!"
        },
        {
          "yaw": 3.0257544725590737,
          "pitch": -0.005172082106541964,
          "title": "West Study Room",
          "text": "Tour one of our many study spaces/social spaces!"
        },
        {
          "yaw": -0.12489304890237918,
          "pitch": 0.024838428186992445,
          "title": "Return to 2nd Floor Lobby",
          "text": ""
        }
      ]
    },
    {
      "id": "20-west-suite-entrance",
      "name": "West Suite Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16706748005297456,
          "pitch": 0.05443942755057307,
          "rotation": 0,
          "target": "19-west-suite-outside"
        },
        {
          "yaw": 2.835354575061949,
          "pitch": 0.41223143972319853,
          "rotation": 0,
          "target": "21-west-suite-living-room"
        },
        {
          "yaw": -1.5010594163348507,
          "pitch": 0.4300091528274841,
          "rotation": 0,
          "target": "29-west-suite-right-hallway-1"
        },
        {
          "yaw": 1.5891665858330866,
          "pitch": 0.3964287939019968,
          "rotation": 0,
          "target": "23-west-suite-left-hallway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.490617158329389,
          "pitch": 0.14143225112436397,
          "title": "WiFi and Cable",
          "text": "The entire suite has access to high speed WiFi and cable.&nbsp;"
        }
      ]
    },
    {
      "id": "21-west-suite-living-room",
      "name": "West Suite Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2782182073706565,
          "pitch": 0.5068679282286137,
          "rotation": 0,
          "target": "20-west-suite-entrance"
        },
        {
          "yaw": 0.709491088717435,
          "pitch": 0.46922275774944744,
          "rotation": 0.7853981633974483,
          "target": "23-west-suite-left-hallway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.03154530839425,
          "pitch": -0.05006783823385419,
          "title": "Living Room",
          "text": "The living room consists of two microfridges, two microwaves, two sofas, four side tables and two floor lamps."
        }
      ]
    },
    {
      "id": "22-west-suite-living-room-closet",
      "name": "West Suite Living Room Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4966637435772885,
          "pitch": 1.0762615671691993,
          "rotation": 0,
          "target": "23-west-suite-left-hallway-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-west-suite-left-hallway-1",
      "name": "West Suite Left Hallway 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.878842931447142,
          "pitch": 0.7912135182735369,
          "rotation": 0,
          "target": "22-west-suite-living-room-closet"
        },
        {
          "yaw": 1.7648539494432036,
          "pitch": 0.677867581764648,
          "rotation": 0,
          "target": "20-west-suite-entrance"
        },
        {
          "yaw": 0.5593428338180004,
          "pitch": 0.6149537887771661,
          "rotation": 0,
          "target": "21-west-suite-living-room"
        },
        {
          "yaw": -1.5552994669249252,
          "pitch": 0.46877508025165326,
          "rotation": 0,
          "target": "24-west-suite-left-hallway-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-west-suite-left-hallway-2",
      "name": "West Suite Left Hallway 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9980615186384245,
          "pitch": 0.5238446861062531,
          "rotation": 0,
          "target": "23-west-suite-left-hallway-1"
        },
        {
          "yaw": -2.5342867987089583,
          "pitch": 0.5566110883716817,
          "rotation": 0,
          "target": "32-west-suite-roomb"
        },
        {
          "yaw": 2.0634328248476788,
          "pitch": 0.5194692153963842,
          "rotation": 0,
          "target": "25-west-suite-left-hallway-vanity"
        },
        {
          "yaw": -0.0700868326297659,
          "pitch": -0.13886863611008238,
          "rotation": 6.283185307179586,
          "target": "28-west-suite-closet"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.05565584759822961,
          "pitch": -0.37343726054439763,
          "title": "Closet",
          "text": ""
        }
      ]
    },
    {
      "id": "25-west-suite-left-hallway-vanity",
      "name": "West Suite Left Hallway Vanity",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0442414426938544,
          "pitch": 0.41099032104469124,
          "rotation": 0,
          "target": "23-west-suite-left-hallway-1"
        },
        {
          "yaw": 0.5385624267456244,
          "pitch": 0.5592563451490093,
          "rotation": 5.497787143782138,
          "target": "32-west-suite-roomb"
        },
        {
          "yaw": -1.7169006686018324,
          "pitch": 0.010128944737399337,
          "rotation": 0,
          "target": "26-west-suite-accessible-bathroom"
        },
        {
          "yaw": -0.9974385657472578,
          "pitch": 0.4350257656055163,
          "rotation": 0,
          "target": "27-west-suite-accessible-rooma"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7211558393816766,
          "pitch": -0.1902793889617307,
          "title": "Accessible Bathroom",
          "text": ""
        },
        {
          "yaw": -0.961515075269606,
          "pitch": -0.1427261436424665,
          "title": "Accessible Bedroom",
          "text": ""
        }
      ]
    },
    {
      "id": "26-west-suite-accessible-bathroom",
      "name": "West Suite Accessible Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "27-west-suite-accessible-rooma",
      "name": "West Suite Accessible RoomA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.102608003265569,
          "pitch": 0.40467345477863503,
          "rotation": 0,
          "target": "25-west-suite-left-hallway-vanity"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.709040654511817,
          "pitch": -0.2820971097391958,
          "title": "Accessible Bedroom",
          "text": "The bedroom consists of a twin XL bed frame and mattress, closet, desk, chair and two chests of drawers."
        }
      ]
    },
    {
      "id": "28-west-suite-closet",
      "name": "West Suite Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6181533562536563,
          "pitch": -0.02393662009702524,
          "rotation": 0,
          "target": "24-west-suite-left-hallway-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-west-suite-right-hallway-1",
      "name": "West Suite Right Hallway 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.33849539202169154,
          "pitch": 0.4495906709473445,
          "rotation": 0,
          "target": "20-west-suite-entrance"
        },
        {
          "yaw": 1.1785220296535979,
          "pitch": 0.5144058472992956,
          "rotation": 0,
          "target": "34-west-suite-roomk"
        },
        {
          "yaw": 2.941890955430587,
          "pitch": 0.4877132998799265,
          "rotation": 0,
          "target": "31-west-suite-right-hallway-vanity"
        },
        {
          "yaw": -1.328500225004806,
          "pitch": 0.13169008643872004,
          "rotation": 0,
          "target": "30-west-suite-right-hallway-bathroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.329637601368674,
          "pitch": -0.061600290250595435,
          "title": "Bathroom",
          "text": "Contains a toilet and shower stall."
        }
      ]
    },
    {
      "id": "30-west-suite-right-hallway-bathroom",
      "name": "West Suite Right Hallway Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.330420238550598,
          "pitch": 0.125770651478879,
          "rotation": 0,
          "target": "29-west-suite-right-hallway-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-west-suite-right-hallway-vanity",
      "name": "West Suite Right Hallway Vanity",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2230899494408316,
          "pitch": 0.47843788367893403,
          "rotation": 0,
          "target": "33-west-suite-roomj"
        },
        {
          "yaw": -2.6864360499843034,
          "pitch": 0.520212367853663,
          "rotation": 0,
          "target": "29-west-suite-right-hallway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.941352557490883,
          "pitch": 0.230334508690488,
          "title": "Vanity",
          "text": "There is ample storage under the sink and in the shelving unit."
        }
      ]
    },
    {
      "id": "32-west-suite-roomb",
      "name": "West Suite RoomB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.851616250280074,
          "pitch": 0.10178090672518891,
          "rotation": 0,
          "target": "24-west-suite-left-hallway-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.398068518470165,
          "pitch": -0.2726306302888215,
          "title": "Bedroom",
          "text": "The bedroom consists of a twin XL bed frame and mattress, closet, desk, chair and two chests of drawers."
        }
      ]
    },
    {
      "id": "33-west-suite-roomj",
      "name": "West Suite RoomJ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.730502595960907,
          "pitch": 0.12462700996579734,
          "rotation": 0,
          "target": "31-west-suite-right-hallway-vanity"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7318345739621765,
          "pitch": -0.06446840516449548,
          "title": "Bedroom",
          "text": "The bedroom consists of a twin XL bed frame and mattress, closet, desk, chair and two chests of drawers."
        }
      ]
    },
    {
      "id": "34-west-suite-roomk",
      "name": "West Suite RoomK",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1407195781042496,
          "pitch": 0.13078106939510548,
          "rotation": 0,
          "target": "29-west-suite-right-hallway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.04083057621574504,
          "pitch": -0.24412281358373455,
          "title": "Bedroom",
          "text": "The bedroom consists of a twin XL bed frame and mattress, closet, desk, chair and two chests of drawers."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
