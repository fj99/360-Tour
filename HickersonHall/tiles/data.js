var APP_DATA = {
  "scenes": [
    {
      "id": "0-hickersonhall_lobbyelevators",
      "name": "HickersonHall_LobbyElevators",
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
          "yaw": -1.391645163006972,
          "pitch": 0.17504975626055597,
          "rotation": 0,
          "target": "3-hick_back_entrance"
        },
        {
          "yaw": 2.517808367690492,
          "pitch": 0.2121118771853432,
          "rotation": 0,
          "target": "1-hick-side-lobby"
        },
        {
          "yaw": 1.3784865373909483,
          "pitch": 0.2688245976274839,
          "rotation": 5.497787143782138,
          "target": "7-hick_vending"
        },
        {
          "yaw": 0.526496082122847,
          "pitch": 0.041058618678134096,
          "rotation": 3.141592653589793,
          "target": "9-hickersonhall_basemententrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3840955390881238,
          "pitch": 0.03770016639090201,
          "title": "Tour a room!<br>",
          "text": "Check out one of our standard double rooms and the amenities included!<br>"
        },
        {
          "yaw": -2.356382531491956,
          "pitch": 0.07096512468069527,
          "title": "Front Desk<br>",
          "text": "The front desk is staffed by a desk attendant Monday - Sunday from 10am to 2am. <br>"
        }
      ]
    },
    {
      "id": "1-hick-side-lobby",
      "name": "Hick side lobby",
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
          "yaw": 2.5600840813297276,
          "pitch": 0.4009357101873725,
          "rotation": 5.497787143782138,
          "target": "2-hick-front-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hick-front-lobby",
      "name": "Hick front lobby",
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
          "yaw": -1.6429495035163733,
          "pitch": 0.2516483192952652,
          "rotation": 0,
          "target": "1-hick-side-lobby"
        },
        {
          "yaw": 1.5746526135726864,
          "pitch": 0.3362826902369296,
          "rotation": 0,
          "target": "13-hickersonhall_vendingarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hick_back_entrance",
      "name": "Hick_back_entrance",
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
          "yaw": -2.9159789146137953,
          "pitch": 0.41537952369611375,
          "rotation": 0,
          "target": "0-hickersonhall_lobbyelevators"
        },
        {
          "yaw": 0.5457214612472363,
          "pitch": 0.39364726710991604,
          "rotation": 0,
          "target": "6-hick_room_outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hick_room_entrance",
      "name": "Hick_room_entrance",
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
          "yaw": -1.555459607263625,
          "pitch": -0.03295430007189992,
          "rotation": 0,
          "target": "6-hick_room_outside"
        },
        {
          "yaw": 1.930917011284583,
          "pitch": 0.57972130193928,
          "rotation": 0.7853981633974483,
          "target": "5-hick_room_middle"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.391542908422589,
          "pitch": -0.1884282409198974,
          "title": "Standard Double<br>",
          "text": "The space includes, two twin XL beds, two desks, two chairs, a microfridge, a microwave, high-speed Wi-Fi, Cable, vanity area, two closets.<br>"
        }
      ]
    },
    {
      "id": "5-hick_room_middle",
      "name": "Hick_room_middle",
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
          "yaw": 1.9606388609277055,
          "pitch": 0.4364610729435352,
          "rotation": 0,
          "target": "4-hick_room_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hick_room_outside",
      "name": "Hick_room_outside",
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
          "yaw": 1.7047184170031944,
          "pitch": 0.2459342324974365,
          "rotation": 0,
          "target": "4-hick_room_entrance"
        },
        {
          "yaw": -3.0465815276688737,
          "pitch": 0.30398968202384147,
          "rotation": 0,
          "target": "3-hick_back_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hick_vending",
      "name": "Hick_vending",
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
          "yaw": 2.635789226685409,
          "pitch": 0.3623520656821384,
          "rotation": 0,
          "target": "2-hick-front-lobby"
        },
        {
          "yaw": -1.8230846825230351,
          "pitch": 0.23380117685493929,
          "rotation": 5.497787143782138,
          "target": "0-hickersonhall_lobbyelevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hickersonhall_backside",
      "name": "HickersonHall_BackSide",
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
      "id": "9-hickersonhall_basemententrance",
      "name": "HickersonHall_BasementEntrance",
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
          "yaw": -2.7118471214529496,
          "pitch": -0.03038919280329999,
          "rotation": 0,
          "target": "0-hickersonhall_lobbyelevators"
        },
        {
          "yaw": -1.4223234621926295,
          "pitch": 0.25144410926295535,
          "rotation": 0,
          "target": "15-hickersonhall_basementmiddle"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4548319966791006,
          "pitch": 0.3911385909008853,
          "title": "Hickerson Basement<br>",
          "text": "The basement is a community space that residents have access to 24/17. Amenities include a table tennis table, pool table, foosball table, TV with cable access, study and lounger areas. All equipment can be rented from the front desk.<br>"
        }
      ]
    },
    {
      "id": "10-hickersonhall_mainlobby",
      "name": "HickersonHall_MainLobby",
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
      "id": "11-hickersonhall_middlesideleft",
      "name": "HickersonHall_MiddleSideLeft",
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
          "yaw": -0.10666401923192304,
          "pitch": 0.18042115038038986,
          "rotation": 0.7853981633974483,
          "target": "14-hick-basement-elevators"
        },
        {
          "yaw": -1.7221634549333373,
          "pitch": 0.11723867227021678,
          "rotation": 5.497787143782138,
          "target": "18-hick-basement-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-hickersonhall_sidelobby",
      "name": "HIckersonHall_SideLobby",
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
      "id": "13-hickersonhall_vendingarea",
      "name": "HickersonHall_VendingArea",
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
          "yaw": 2.6510668336984224,
          "pitch": 0.37955677494604956,
          "rotation": 0.7853981633974483,
          "target": "2-hick-front-lobby"
        },
        {
          "yaw": -1.8034970014408582,
          "pitch": 0.22849016536773092,
          "rotation": 5.497787143782138,
          "target": "0-hickersonhall_lobbyelevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-hick-basement-elevators",
      "name": "Hick Basement elevators",
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
          "yaw": -1.39919488262003,
          "pitch": 0.21831924969655248,
          "rotation": 0,
          "target": "15-hickersonhall_basementmiddle"
        },
        {
          "yaw": -2.716763313642833,
          "pitch": 0.020973265910509298,
          "rotation": 0,
          "target": "0-hickersonhall_lobbyelevators"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4057673206286694,
          "pitch": 0.3619385457518103,
          "title": "Hickerson Basement<br>",
          "text": "The basement is a community space that residents have access to 24/17. \nAmenities include a table tennis table, pool table, foosball table, TV \nwith cable access, study and lounger areas. All equipment can be rented \nfrom the front desk."
        }
      ]
    },
    {
      "id": "15-hickersonhall_basementmiddle",
      "name": "HickersonHall_BasementMiddle",
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
          "yaw": 3.1026131178404057,
          "pitch": 0.48171161304884436,
          "rotation": 0,
          "target": "14-hick-basement-elevators"
        },
        {
          "yaw": -0.13597520285451026,
          "pitch": 0.25137007853466287,
          "rotation": 0,
          "target": "18-hick-basement-back"
        },
        {
          "yaw": 2.428656123181417,
          "pitch": 0.2282970269579856,
          "rotation": 5.497787143782138,
          "target": "16-hickersonhall_middlesideright"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-hickersonhall_middlesideright",
      "name": "HIckersonHall_MiddleSideRight",
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
          "yaw": 0.5419385194085535,
          "pitch": 0.3580083815165871,
          "rotation": 5.497787143782138,
          "target": "18-hick-basement-back"
        },
        {
          "yaw": 2.8501543918162433,
          "pitch": 0.2369285963683172,
          "rotation": 7.0685834705770345,
          "target": "15-hickersonhall_basementmiddle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-hick-basement-leftside",
      "name": "Hick basement leftside",
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
      "id": "18-hick-basement-back",
      "name": "Hick basement back",
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
          "yaw": 1.0383944055907577,
          "pitch": 0.2973877038165291,
          "rotation": 0,
          "target": "15-hickersonhall_basementmiddle"
        },
        {
          "yaw": 2.4985004342768384,
          "pitch": 0.18382485871142507,
          "rotation": 5.497787143782138,
          "target": "11-hickersonhall_middlesideleft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-hick-basement-middle",
      "name": "Hick Basement middle",
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
