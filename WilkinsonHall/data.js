var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "entrance",
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
          "yaw": -1.5006893206548995,
          "pitch": 0.28084652726552584,
          "rotation": 0,
          "target": "1-elevators"
        },
        {
          "yaw": 2.831541834352013,
          "pitch": 0.13170743944653296,
          "rotation": 0,
          "target": "3-lobby1"
        },
        {
          "yaw": -2.666860128397662,
          "pitch": 0.09788002344431312,
          "rotation": 0,
          "target": "4-lobby2"
        },
        {
          "yaw": -0.7544105408840736,
          "pitch": 0.19370386271518214,
          "rotation": 0,
          "target": "2-back_entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5745885639665396,
          "pitch": -0.044994366550923814,
          "title": "Showcase Room in this direction<br>",
          "text": "<br>"
        },
        {
          "yaw": -1.7401990391158115,
          "pitch": -0.06831659095988307,
          "title": "Room Upstairs<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-elevators",
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
        "yaw": -2.8602017229714978,
        "pitch": -0.1718811412394281,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": -1.7793693488022093,
          "pitch": 0.2291991320539175,
          "rotation": 0,
          "target": "2-back_entrance"
        },
        {
          "yaw": 0.48737418702836166,
          "pitch": 0.2731857686669823,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 1.8147569921493352,
          "pitch": 0.16020700089604922,
          "rotation": 0.7853981633974483,
          "target": "4-lobby2"
        },
        {
          "yaw": 1.1065255272526677,
          "pitch": 0.15003037202962588,
          "rotation": 0,
          "target": "3-lobby1"
        },
        {
          "yaw": 2.843724829994466,
          "pitch": -0.11513013987770293,
          "rotation": 0,
          "target": "16-west-campus---wilkinson--2nd-floor"
        },
        {
          "yaw": -2.429050000090063,
          "pitch": -0.12380416548882067,
          "rotation": 0,
          "target": "16-west-campus---wilkinson--2nd-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-back_entrance",
      "name": "back_entrance",
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
          "yaw": -2.777831534592462,
          "pitch": 0.23965253153118127,
          "rotation": 6.283185307179586,
          "target": "1-elevators"
        },
        {
          "yaw": 1.4280973062137612,
          "pitch": 0.22555000401891512,
          "rotation": 5.497787143782138,
          "target": "9-hallway_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lobby1",
      "name": "lobby1",
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
          "yaw": 2.290810432362843,
          "pitch": 0.17005876089658756,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.6632875330402435,
          "pitch": 0.19910062035175713,
          "rotation": 0,
          "target": "4-lobby2"
        },
        {
          "yaw": -1.0477601064730617,
          "pitch": 0.1441649711844093,
          "rotation": 0,
          "target": "8-wilkinsonhall_sidelobbyleft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lobby2",
      "name": "lobby2",
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
          "yaw": -2.504116179989877,
          "pitch": 0.12348331858991202,
          "rotation": 0,
          "target": "3-lobby1"
        },
        {
          "yaw": 3.056951713521231,
          "pitch": 0.11828781293686319,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.829849598804488,
          "pitch": 0.18051783374221486,
          "rotation": 0.7853981633974483,
          "target": "6-lobby3"
        },
        {
          "yaw": 1.0199301153241365,
          "pitch": 0.2059944466732091,
          "rotation": 0,
          "target": "5-wilkinsonhall_sidelobbyright"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wilkinsonhall_sidelobbyright",
      "name": "WilkinsonHall_SideLobbyRight",
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
          "yaw": -0.7271720696204653,
          "pitch": 0.19227204818802868,
          "rotation": 0,
          "target": "4-lobby2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lobby3",
      "name": "lobby3",
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
          "yaw": 2.30152463114118,
          "pitch": 0.09228735453136849,
          "rotation": 0,
          "target": "4-lobby2"
        },
        {
          "yaw": -2.2519850934714594,
          "pitch": 0.16955254611876036,
          "rotation": 0,
          "target": "7-lobby_corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lobby_corner",
      "name": "lobby_corner",
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
        "yaw": 2.1578481846138997,
        "pitch": 0.1495655586988729,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 2.907586830062094,
          "pitch": 0.07108515360148004,
          "rotation": 0,
          "target": "6-lobby3"
        },
        {
          "yaw": -1.731060006833566,
          "pitch": 0.14151137180085094,
          "rotation": 0,
          "target": "8-wilkinsonhall_sidelobbyleft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wilkinsonhall_sidelobbyleft",
      "name": "WilkinsonHall_SideLobbyLeft",
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
          "yaw": 2.356219958644415,
          "pitch": 0.17765579939307763,
          "rotation": 0,
          "target": "7-lobby_corner"
        },
        {
          "yaw": -0.9531471561061444,
          "pitch": 0.07120233985601665,
          "rotation": 0,
          "target": "3-lobby1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hallway_entrance",
      "name": "hallway_entrance",
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
          "yaw": 0.6851518899972415,
          "pitch": 0.28745744747560487,
          "rotation": 0.7853981633974483,
          "target": "2-back_entrance"
        },
        {
          "yaw": -2.907684768549153,
          "pitch": 0.05323222164095753,
          "rotation": 0,
          "target": "10-welcome"
        },
        {
          "yaw": 0.20233192655077126,
          "pitch": 0.15695277475580838,
          "rotation": 0,
          "target": "1-elevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-welcome",
      "name": "welcome",
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
        "yaw": -1.7894446878228898,
        "pitch": 0.06220126461592912,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 2.1941804390414577,
          "pitch": 0.09839620300115115,
          "rotation": 0,
          "target": "9-hallway_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-outside-room",
      "name": "outside room",
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
        "yaw": -1.9325186963133092,
        "pitch": 0.0058356185579953035,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": -0.8098078629354486,
          "pitch": 0.2618917999733519,
          "rotation": 0,
          "target": "10-welcome"
        },
        {
          "yaw": -2.46262710402957,
          "pitch": 0.19605464368696524,
          "rotation": 0,
          "target": "12-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-room",
      "name": "room",
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
          "yaw": 0.2701686144784201,
          "pitch": 0.21797275839279884,
          "rotation": 0,
          "target": "11-outside-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.090704006179209,
          "pitch": -0.14068016635192393,
          "title": "room",
          "text": "Text"
        }
      ]
    },
    {
      "id": "13-wilkinsonhall_hallway3",
      "name": "WilkinsonHall_Hallway3",
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
          "yaw": 1.897020326462033,
          "pitch": 0.17717383802123443,
          "rotation": 6.283185307179586,
          "target": "16-west-campus---wilkinson--2nd-floor"
        },
        {
          "yaw": -1.2612110838857173,
          "pitch": 0.005385539652298377,
          "rotation": 0,
          "target": "14-room_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-room_entrance",
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
        "yaw": -1.5617268010958298,
        "pitch": -0.2845311273944269,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": -1.6689502203240423,
          "pitch": -0.11834418984304662,
          "rotation": 0,
          "target": "15-wilkinsonhall_room"
        },
        {
          "yaw": -0.19726233346122157,
          "pitch": 0.05482060962062363,
          "rotation": 0,
          "target": "13-wilkinsonhall_hallway3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-wilkinsonhall_room",
      "name": "WilkinsonHall_Room",
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
          "yaw": -1.1014361681792941,
          "pitch": -0.02746172384855683,
          "rotation": 0,
          "target": "14-room_entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8465244412147452,
          "pitch": -0.39190192065302476,
          "title": "Room",
          "text": "Text"
        }
      ]
    },
    {
      "id": "16-west-campus---wilkinson--2nd-floor",
      "name": "West Campus - Wilkinson  2nd Floor",
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
        "yaw": -1.4700969210757133,
        "pitch": -0.03617583989307249,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": -0.523315913428819,
          "pitch": 0.10178632015939826,
          "rotation": 0,
          "target": "13-wilkinsonhall_hallway3"
        },
        {
          "yaw": -2.1856632936901548,
          "pitch": -0.04644309934434965,
          "rotation": 3.141592653589793,
          "target": "1-elevators"
        },
        {
          "yaw": -1.598047784464672,
          "pitch": -0.03728388594253218,
          "rotation": 9.42477796076938,
          "target": "1-elevators"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
