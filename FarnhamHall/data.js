var APP_DATA = {
  "scenes": [
    {
      "id": "0-elevators",
      "name": "elevators",
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
        "yaw": 3.018671477566336,
        "pitch": -0.03942972692740554,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 1.6415190370553088,
          "pitch": 0.08739476374078237,
          "rotation": 0,
          "target": "1-gameroom"
        },
        {
          "yaw": -2.96385091313293,
          "pitch": -0.06949952618547783,
          "rotation": 0,
          "target": "5-upstairs_elevators"
        },
        {
          "yaw": 2.7421555116062972,
          "pitch": -0.07968148384430052,
          "rotation": 3.141592653589793,
          "target": "9-downstairs_elevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-gameroom",
      "name": "gameroom",
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
        "yaw": -3.0529100787638725,
        "pitch": -0.12372745240740457,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": -1.436271667843961,
          "pitch": 0.11559109944651347,
          "rotation": 0,
          "target": "0-elevators"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1024321621835877,
          "pitch": -0.2656764337984949,
          "title": "Gameroom",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-room_entrance",
      "name": "room_entrance",
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
          "yaw": 2.0001571436683037,
          "pitch": -0.14536897234983748,
          "rotation": 0,
          "target": "3-room1"
        },
        {
          "yaw": -2.7602331275509275,
          "pitch": 0.030096013178145142,
          "rotation": 0,
          "target": "6-hallway1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-room1",
      "name": "room1",
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
          "yaw": 0.2945943243537723,
          "pitch": 0.24004707402952796,
          "rotation": 0,
          "target": "4-room2"
        },
        {
          "yaw": 2.7369618745587836,
          "pitch": -0.0627991577804643,
          "rotation": 0,
          "target": "2-room_entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1904477559784219,
          "pitch": -0.09816900254473993,
          "title": "Room",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-room2",
      "name": "room2",
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
          "yaw": 2.5676790345399416,
          "pitch": 0.11158049152283489,
          "rotation": 0,
          "target": "3-room1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6714442547706696,
          "pitch": -0.3486064758212084,
          "title": "Room",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-upstairs_elevators",
      "name": "upstairs_elevators",
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
        "yaw": 1.2613320307099798,
        "pitch": -0.03479589294879304,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 1.5549388030703293,
          "pitch": -0.04818790924372962,
          "rotation": 3.141592653589793,
          "target": "0-elevators"
        },
        {
          "yaw": 0.8451005572788759,
          "pitch": -0.025733198165688975,
          "rotation": 3.141592653589793,
          "target": "0-elevators"
        },
        {
          "yaw": -0.22162363520096662,
          "pitch": 0.18736347606369286,
          "rotation": 0,
          "target": "6-hallway1"
        },
        {
          "yaw": -1.7748972977409512,
          "pitch": 0.1590738946369452,
          "rotation": 0,
          "target": "7-upstairs_lobby"
        },
        {
          "yaw": -2.5236761261382092,
          "pitch": 0.0807041948826086,
          "rotation": 0,
          "target": "8-upstairs_lobby2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hallway1",
      "name": "hallway1",
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
          "yaw": -0.31150179918374654,
          "pitch": 0.1510283448898555,
          "rotation": 0,
          "target": "5-upstairs_elevators"
        },
        {
          "yaw": 2.8199376122751048,
          "pitch": 0.03772235261000034,
          "rotation": 0,
          "target": "2-room_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-upstairs_lobby",
      "name": "upstairs_lobby",
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
          "yaw": 2.2563138822733464,
          "pitch": 0.1821521198097802,
          "rotation": 0,
          "target": "5-upstairs_elevators"
        },
        {
          "yaw": -2.560937952142627,
          "pitch": 0.22681358069590196,
          "rotation": 0,
          "target": "8-upstairs_lobby2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upstairs_lobby2",
      "name": "upstairs_lobby2",
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
          "yaw": 1.9003641243090037,
          "pitch": 0.3166096769687421,
          "rotation": 0,
          "target": "7-upstairs_lobby"
        },
        {
          "yaw": 3.080797682389578,
          "pitch": 0.10136090059205927,
          "rotation": 0,
          "target": "5-upstairs_elevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-downstairs_elevators",
      "name": "downstairs_elevators",
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
          "yaw": -0.2632436145176431,
          "pitch": 0.030394256065086722,
          "rotation": 0,
          "target": "0-elevators"
        },
        {
          "yaw": -2.799940149865396,
          "pitch": 0.2266747228068855,
          "rotation": 0,
          "target": "10-back_fps1"
        },
        {
          "yaw": 0.3524528258882125,
          "pitch": 0.18017864551986662,
          "rotation": 0,
          "target": "13-fps_entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3657187438034981,
          "pitch": -0.027468938672507548,
          "title": "FPS",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-back_fps1",
      "name": "back_FPS1",
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
          "yaw": -1.318973767381891,
          "pitch": 0.24837536392186976,
          "rotation": 0,
          "target": "9-downstairs_elevators"
        },
        {
          "yaw": -1.6521018460376276,
          "pitch": -0.020291819793019528,
          "rotation": 0,
          "target": "0-elevators"
        },
        {
          "yaw": 0.23992354151849504,
          "pitch": 0.13099630286604835,
          "rotation": 0,
          "target": "11-back_fps2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-back_fps2",
      "name": "back_FPS2",
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
          "yaw": -1.7388110182715533,
          "pitch": 0.229928635970289,
          "rotation": 0,
          "target": "10-back_fps1"
        },
        {
          "yaw": 1.4079334296699741,
          "pitch": 0.12216177055299227,
          "rotation": 0,
          "target": "12-back_fps3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-back_fps3",
      "name": "back_FPS3",
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
          "yaw": -1.9075392746273643,
          "pitch": 0.14256597970747542,
          "rotation": 0,
          "target": "11-back_fps2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-fps_entrance",
      "name": "FPS_entrance",
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
          "yaw": -2.7042518705265035,
          "pitch": 0.09939281763214858,
          "rotation": 0,
          "target": "9-downstairs_elevators"
        },
        {
          "yaw": 1.9558454718971552,
          "pitch": 0.13646331928026534,
          "rotation": 0,
          "target": "14-fps1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-fps1",
      "name": "FPS1",
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
          "yaw": -2.6788712902867626,
          "pitch": 0.13665615206008397,
          "rotation": 0,
          "target": "15-fps2"
        },
        {
          "yaw": 0.40508158855130283,
          "pitch": 0.15375713358737286,
          "rotation": 0,
          "target": "13-fps_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-fps2",
      "name": "FPS2",
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
          "yaw": -0.6711060500243491,
          "pitch": 0.14919762101153644,
          "rotation": 0,
          "target": "14-fps1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Farnhamhall",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
