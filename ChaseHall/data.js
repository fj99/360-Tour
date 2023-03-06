var APP_DATA = {
  "scenes": [
    {
      "id": "0-chasehall_frontentrance",
      "name": "ChaseHall_FrontEntrance",
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
        "yaw": -3.0058806361842088,
        "pitch": 0.1152211628175337,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 2.4529302758863327,
          "pitch": 0.13082175091636827,
          "rotation": 6.283185307179586,
          "target": "1-chasehall_backentrance"
        },
        {
          "yaw": -2.3336658197714257,
          "pitch": 0.09264631350739094,
          "rotation": 0,
          "target": "2-lobby_left"
        },
        {
          "yaw": -1.4274605863575243,
          "pitch": 0.10993229647126768,
          "rotation": 0,
          "target": "4-chasehall_backlobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-chasehall_backentrance",
      "name": "ChaseHall_BackEntrance",
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
        "yaw": -2.997154453331424,
        "pitch": 0.04884658717918278,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": -0.852526272618233,
          "pitch": 0.2052728019149015,
          "rotation": 0,
          "target": "0-chasehall_frontentrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lobby_left",
      "name": "lobby_left",
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
          "yaw": 0.7940138801127858,
          "pitch": 0.1600237227594441,
          "rotation": 0,
          "target": "0-chasehall_frontentrance"
        },
        {
          "yaw": -0.38686194324114354,
          "pitch": 0.2978018252883494,
          "rotation": 0,
          "target": "3-lobby_middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lobby_middle",
      "name": "lobby_middle",
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
          "yaw": -1.1309581923396763,
          "pitch": 0.16407130363130307,
          "rotation": 0,
          "target": "2-lobby_left"
        },
        {
          "yaw": 1.6271100114863462,
          "pitch": 0.2622757701256333,
          "rotation": 5.497787143782138,
          "target": "4-chasehall_backlobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-chasehall_backlobby",
      "name": "ChaseHall_BackLobby",
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
          "yaw": -1.9884987019960487,
          "pitch": 0.2682274151641266,
          "rotation": 0.7853981633974483,
          "target": "3-lobby_middle"
        },
        {
          "yaw": -2.5454244108524797,
          "pitch": 0.11506698701320772,
          "rotation": 0,
          "target": "0-chasehall_frontentrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ChaseHall",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
