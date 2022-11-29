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
        "yaw": 0.49049770357771294,
        "pitch": 0.06687466062595782,
        "fov": 1.4963999539783934
      },
      "linkHotspots": [
        {
          "yaw": 0.5430856333215868,
          "pitch": 0.02304408763561483,
          "rotation": 3.141592653589793,
          "target": "8-hick-basement-elevators"
        },
        {
          "yaw": 2.491987201960569,
          "pitch": 0.20973890248184546,
          "rotation": 0,
          "target": "2-hick-side-lobby"
        },
        {
          "yaw": 1.3192880593342213,
          "pitch": 0.2203620212852222,
          "rotation": 5.497787143782138,
          "target": "3-hickersonhall_vendingarea"
        },
        {
          "yaw": -1.3749247540666811,
          "pitch": 0.0434027752189472,
          "rotation": 0,
          "target": "4-hick_back_entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.213101422914681,
          "pitch": 0.1374322097159819,
          "title": "<div>Hickerson Front desk</div>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-hick-front-lobby",
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
          "yaw": -1.4313067820569572,
          "pitch": 0.1818360411284612,
          "rotation": 1.5707963267948966,
          "target": "2-hick-side-lobby"
        },
        {
          "yaw": 1.539605546058394,
          "pitch": 0.3551618357706392,
          "rotation": 0,
          "target": "3-hickersonhall_vendingarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hick-side-lobby",
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
          "yaw": 0.2035521108531153,
          "pitch": 0.4040369307241072,
          "rotation": 0.7853981633974483,
          "target": "0-hickersonhall_lobbyelevators"
        },
        {
          "yaw": 2.4923884791589126,
          "pitch": 0.30719915143019527,
          "rotation": 10.995574287564278,
          "target": "1-hick-front-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hickersonhall_vendingarea",
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
          "yaw": 2.8135658579804064,
          "pitch": 0.2624115850073352,
          "rotation": 0,
          "target": "1-hick-front-lobby"
        },
        {
          "yaw": -1.9114551102470863,
          "pitch": 0.18450723215643805,
          "rotation": 5.497787143782138,
          "target": "0-hickersonhall_lobbyelevators"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.21817579838568157,
          "pitch": -0.07158528475028092,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-hick_back_entrance",
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
        "yaw": 0.7808843808491819,
        "pitch": 0.0401179612326672,
        "fov": 1.4963999539783934
      },
      "linkHotspots": [
        {
          "yaw": -2.8409536268819338,
          "pitch": 0.14432999672956726,
          "rotation": 0,
          "target": "0-hickersonhall_lobbyelevators"
        },
        {
          "yaw": 0.46257645087479027,
          "pitch": 0.13931932632562471,
          "rotation": 0,
          "target": "5-hick_room_outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hick_room_outside",
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
        "yaw": 1.7042995817881437,
        "pitch": -0.251472963262815,
        "fov": 1.4963999539783934
      },
      "linkHotspots": [
        {
          "yaw": 1.6859838503733986,
          "pitch": 0.015802639167713295,
          "rotation": 0,
          "target": "6-hick_room_entrance"
        },
        {
          "yaw": -3.0622447156126835,
          "pitch": 0.09374961216333233,
          "rotation": 0,
          "target": "4-hick_back_entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hick_room_entrance",
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
        "yaw": 2.1116968430265217,
        "pitch": -0.012035388369799449,
        "fov": 1.4963999539783934
      },
      "linkHotspots": [
        {
          "yaw": -1.5693385099112458,
          "pitch": 0.03548447600622495,
          "rotation": 0,
          "target": "5-hick_room_outside"
        },
        {
          "yaw": 2.123521712023628,
          "pitch": 0.35329196656295636,
          "rotation": 0,
          "target": "6-hick_room_entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4102907766573,
          "pitch": -0.4525116212686733,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-hick_room_middle",
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
          "yaw": 2.018519360366591,
          "pitch": 0.46691388724198823,
          "rotation": 0,
          "target": "6-hick_room_entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.06213452094706895,
          "pitch": -0.6076701549786954,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "8-hick-basement-elevators",
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
        "yaw": -1.4128139376057582,
        "pitch": -0.00802359224653415,
        "fov": 1.4963999539783934
      },
      "linkHotspots": [
        {
          "yaw": -2.7231816399111928,
          "pitch": -0.07253882568538828,
          "rotation": 0,
          "target": "0-hickersonhall_lobbyelevators"
        },
        {
          "yaw": 2.8749394587841213,
          "pitch": -0.0576514296012558,
          "rotation": 0,
          "target": "0-hickersonhall_lobbyelevators"
        },
        {
          "yaw": -1.9349072211496487,
          "pitch": 0.11789966376380079,
          "rotation": 5.497787143782138,
          "target": "9-hick-basement-leftside"
        },
        {
          "yaw": -1.3998620269931017,
          "pitch": 0.1763593623825841,
          "rotation": 0,
          "target": "7-hick_room_middle"
        },
        {
          "yaw": -0.6464713181560757,
          "pitch": 0.2274144811830361,
          "rotation": 0.7853981633974483,
          "target": "12-hickersonhall_middlesideright"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3833830654569823,
          "pitch": -0.06007919223400293,
          "title": "<div>Pool table</div>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "9-hick-basement-leftside",
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
      "linkHotspots": [
        {
          "yaw": -0.07371737706172432,
          "pitch": 0.1580774913794194,
          "rotation": 0,
          "target": "8-hick-basement-elevators"
        },
        {
          "yaw": -1.7039072135463282,
          "pitch": 0.17266791744064136,
          "rotation": 0,
          "target": "11-hick-basement-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-hick-basement-middle",
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
      "linkHotspots": [
        {
          "yaw": -2.684467420821303,
          "pitch": 0.13488479215372706,
          "rotation": 5.497787143782138,
          "target": "8-hick-basement-elevators"
        },
        {
          "yaw": -1.310184611093721,
          "pitch": 0.48321733074010176,
          "rotation": 6.283185307179586,
          "target": "9-hick-basement-leftside"
        },
        {
          "yaw": 0.14058093109509073,
          "pitch": 0.2922916255004555,
          "rotation": 0,
          "target": "11-hick-basement-back"
        },
        {
          "yaw": 1.6219309391736392,
          "pitch": 0.3997100510539564,
          "rotation": 0,
          "target": "12-hickersonhall_middlesideright"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-hick-basement-back",
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
          "yaw": 1.1497759452685568,
          "pitch": 0.1804848721590382,
          "rotation": 0,
          "target": "10-hick-basement-middle"
        },
        {
          "yaw": 1.8411897161627389,
          "pitch": 0.22021827450074483,
          "rotation": 0,
          "target": "9-hick-basement-leftside"
        },
        {
          "yaw": 0.31944041853224014,
          "pitch": 0.33862308943808017,
          "rotation": 0,
          "target": "12-hickersonhall_middlesideright"
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
          "yaw": 2.9208536571153747,
          "pitch": 0.17978704682665736,
          "rotation": 7.0685834705770345,
          "target": "8-hick-basement-elevators"
        },
        {
          "yaw": 0.4795365874756783,
          "pitch": 0.3248617286234392,
          "rotation": 5.497787143782138,
          "target": "11-hick-basement-back"
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
