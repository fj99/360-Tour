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
          "yaw": -1.0598934540207576,
          "pitch": 0.19388496470783068,
          "rotation": 0,
          "target": "4-other-entrance"
        },
        {
          "yaw": 0.5203400402305007,
          "pitch": 0.002169974518977824,
          "rotation": 3.141592653589793,
          "target": "13-hick-basement-elevators"
        },
        {
          "yaw": 1.3315399887818273,
          "pitch": 0.22991376895565452,
          "rotation": 5.497787143782138,
          "target": "2-hickersonhall_vendingarea"
        },
        {
          "yaw": 2.4677021719245413,
          "pitch": 0.19172884973571414,
          "rotation": 6.283185307179586,
          "target": "1-hickersonhall_sidelobby"
        },
        {
          "yaw": -1.395318606397927,
          "pitch": 0.11248135746741994,
          "rotation": 0,
          "target": "5-hick_back_entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2143519536582392,
          "pitch": 0.15192541326633346,
          "title": "<div>Hickerson front desk</div>",
          "text": "The front desk is staffed seven days a week by desk attendants who are trained to enforce residence life policies and help build a community within the building. The front desk offers many services including mail/package pick up, as well as renting games, sports equipment and vacuums. Additionally, the front desk is a hub for information regarding the residence hall, residents are welcome to direct any immediate questions/concerns to the front desk staff during operating hours."
        },
        {
          "yaw": -1.3851433244221578,
          "pitch": -0.000520943918100869,
          "title": "Tour a room!<br>",
          "text": "Check out what a standard double room looks like in Hickerson!"
        }
      ]
    },
    {
      "id": "1-hickersonhall_sidelobby",
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
      "linkHotspots": [
        {
          "yaw": 2.4040458626205865,
          "pitch": 0.2965155126448895,
          "rotation": 5.497787143782138,
          "target": "3-hickersonhall_mainlobby"
        },
        {
          "yaw": 0.15154983261474086,
          "pitch": 0.362611418363759,
          "rotation": 0.7853981633974483,
          "target": "0-hickersonhall_lobbyelevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hickersonhall_vendingarea",
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
          "yaw": -1.9647243016047753,
          "pitch": 0.17280816698090362,
          "rotation": 11.780972450961727,
          "target": "0-hickersonhall_lobbyelevators"
        },
        {
          "yaw": 2.721984914612933,
          "pitch": 0.20293728992891147,
          "rotation": 0.7853981633974483,
          "target": "3-hickersonhall_mainlobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.22062772489812765,
          "pitch": -0.0886042220189136,
          "title": "Side Lounge",
          "text": "This area consists of an all-gender accessible bathroom, an ice machine, an automatic water dispenser and, a variety of vending machines."
        }
      ]
    },
    {
      "id": "3-hickersonhall_mainlobby",
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
      "linkHotspots": [
        {
          "yaw": -1.496901106029103,
          "pitch": 0.2023715709827627,
          "rotation": 0.7853981633974483,
          "target": "1-hickersonhall_sidelobby"
        },
        {
          "yaw": 1.37603284292984,
          "pitch": 0.2885983525257476,
          "rotation": 0,
          "target": "2-hickersonhall_vendingarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-other-entrance",
      "name": "other entrance",
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
          "yaw": 1.8785445601328021,
          "pitch": 0.22549128921379413,
          "rotation": 0,
          "target": "0-hickersonhall_lobbyelevators"
        },
        {
          "yaw": -1.8677480321427105,
          "pitch": 0.19764126774159152,
          "rotation": 0,
          "target": "5-hick_back_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hick_back_entrance",
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
          "yaw": -3.0263883497291477,
          "pitch": 0.18464490707466652,
          "rotation": 4.71238898038469,
          "target": "4-other-entrance"
        },
        {
          "yaw": -2.749124972346774,
          "pitch": 0.09848211151230757,
          "rotation": 0,
          "target": "0-hickersonhall_lobbyelevators"
        },
        {
          "yaw": 0.5072741763662769,
          "pitch": 0.1776678488717387,
          "rotation": 0,
          "target": "6-hick_room_outside"
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
        "yaw": 1.699188399375494,
        "pitch": -0.4147483390774891,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 1.5722414908320426,
          "pitch": -0.04467870500455007,
          "rotation": 0,
          "target": "7-hick_room_entrance"
        },
        {
          "yaw": -3.051417292049903,
          "pitch": 0.043561091432057,
          "rotation": 0,
          "target": "5-hick_back_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hick_room_entrance",
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
        "yaw": 2.1905851683952235,
        "pitch": 0.011500938113691461,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": -1.8041028458382993,
          "pitch": -0.09575070253514362,
          "rotation": 0,
          "target": "6-hick_room_outside"
        },
        {
          "yaw": 2.179573500076412,
          "pitch": 0.3641798606182398,
          "rotation": 0,
          "target": "8-hick_room_middle"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3939767700627765,
          "pitch": -0.35702345728675766,
          "title": "Double Room",
          "text": "This bedroom accomodates two people and includes two twin XL beds with mattresses, two closets with curtains, two desks, two desk chairs, high-speed Wi-Fi access, vanity area and central heating. Each floor has a utility room that consists of one washing machine, a dryer, and a communal kitchen. Additionally, each floor has a communal bathroom that is gender specific to the floor."
        }
      ]
    },
    {
      "id": "8-hick_room_middle",
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
          "yaw": 1.9142486460221866,
          "pitch": 0.03809327898046,
          "rotation": 0,
          "target": "7-hick_room_entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10349889387485689,
          "pitch": -0.5728050268753044,
          "title": "Double Room",
          "text": "This bedroom accomodates two people and includes two twin XL beds with mattresses, two closets with curtains, two desks, two desk chairs, high-speed Wi-Fi access, vanity area and central heating."
        }
      ]
    },
    {
      "id": "9-hickersonhall_backside",
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
      "linkHotspots": [
        {
          "yaw": 1.8079856723334782,
          "pitch": 0.2062122916742002,
          "rotation": 0.7853981633974483,
          "target": "11-hickersonhall_middlesideleft"
        },
        {
          "yaw": 1.0936541098496786,
          "pitch": 0.17111863655807724,
          "rotation": 0.7853981633974483,
          "target": "10-hickersonhall_basementmiddle"
        },
        {
          "yaw": 0.3187713456406627,
          "pitch": 0.29559267657240085,
          "rotation": 0.7853981633974483,
          "target": "12-hickersonhall_middlesideright"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-hickersonhall_basementmiddle",
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
          "yaw": -2.6921567778233992,
          "pitch": 0.16713276987101544,
          "rotation": 5.497787143782138,
          "target": "13-hick-basement-elevators"
        },
        {
          "yaw": 0.13741610597436704,
          "pitch": 0.25180649208729733,
          "rotation": 0,
          "target": "9-hickersonhall_backside"
        },
        {
          "yaw": -1.3883688371588931,
          "pitch": 0.4118659731193457,
          "rotation": 0,
          "target": "11-hickersonhall_middlesideleft"
        },
        {
          "yaw": 1.8039192094850867,
          "pitch": 0.2840545771773719,
          "rotation": 0,
          "target": "12-hickersonhall_middlesideright"
        }
      ],
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
          "yaw": -0.08244837720962295,
          "pitch": 0.14692550692534212,
          "rotation": 0,
          "target": "13-hick-basement-elevators"
        },
        {
          "yaw": -1.7561552438487649,
          "pitch": 0.04623983338434279,
          "rotation": 0,
          "target": "9-hickersonhall_backside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-hickersonhall_middlesideright",
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
          "yaw": 2.879479264118215,
          "pitch": 0.2024615501475573,
          "rotation": 0.7853981633974483,
          "target": "13-hick-basement-elevators"
        },
        {
          "yaw": 0.46387727703151427,
          "pitch": 0.300088370279763,
          "rotation": 5.497787143782138,
          "target": "9-hickersonhall_backside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-hick-basement-elevators",
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
          "yaw": -2.6867083222549066,
          "pitch": -0.08854944072498228,
          "rotation": 0,
          "target": "0-hickersonhall_lobbyelevators"
        },
        {
          "yaw": -1.9655328344667673,
          "pitch": 0.07492022300359125,
          "rotation": 0,
          "target": "11-hickersonhall_middlesideleft"
        },
        {
          "yaw": -0.6057816479394926,
          "pitch": 0.13901495569813527,
          "rotation": 0,
          "target": "12-hickersonhall_middlesideright"
        },
        {
          "yaw": -1.415120526590787,
          "pitch": 0.2075198709886248,
          "rotation": 0,
          "target": "10-hickersonhall_basementmiddle"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4200343260574666,
          "pitch": 0.04335566932547685,
          "title": "Hickerson Basement",
          "text": "The basement is a communal space for residents to use. The space includes two pool tables, a table tennis table, a foosbal table, plenty of seating and a TV."
        }
      ]
    }
  ],
  "name": "HickersonHall",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
