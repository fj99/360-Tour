var APP_DATA = {
  "scenes": [
    {
      "id": "0-neff-front-desk",
      "name": "Neff Front Desk",
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
          "yaw": -2.5060566009999548,
          "pitch": 0.3429886594349334,
          "rotation": 0.7853981633974483,
          "target": "3-main-lobby-elevators"
        },
        {
          "yaw": 2.173704399737958,
          "pitch": 0.37374353159092166,
          "rotation": 5.497787143782138,
          "target": "1-neff-main-lobby-back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5874955569819154,
          "pitch": -0.036424997834295425,
          "title": "Neff Front Desk",
          "text": "The front desk is staffed 7 days a week from 10:00am - 2:00am. Residents can utilise the front desk to rent out cleaning equipment, games, mail and get any additional assistance as needed.&nbsp;"
        }
      ]
    },
    {
      "id": "1-neff-main-lobby-back",
      "name": "Neff Main Lobby Back",
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
          "yaw": -2.996624194124882,
          "pitch": 0.2845416432958512,
          "rotation": 0.7853981633974483,
          "target": "0-neff-front-desk"
        },
        {
          "yaw": -0.2689395139344928,
          "pitch": 0.23780265983351967,
          "rotation": 6.283185307179586,
          "target": "2-neff-vending-machines"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-neff-vending-machines",
      "name": "Neff Vending Machines",
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
      "id": "3-main-lobby-elevators",
      "name": "Main Lobby Elevators",
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
          "yaw": 0.6394631109888458,
          "pitch": 0.028255166227573625,
          "rotation": 0,
          "target": "9-3rd-floor-elevators"
        },
        {
          "yaw": -0.5775989015158878,
          "pitch": 0.005039559232329793,
          "rotation": 9.42477796076938,
          "target": "5-neff-basement-elevators"
        },
        {
          "yaw": 1.6631512482910296,
          "pitch": 0.4371986893572313,
          "rotation": 7.853981633974483,
          "target": "4-neff-main-lobby"
        },
        {
          "yaw": -1.4324451277658934,
          "pitch": 0.30986142873610945,
          "rotation": 0,
          "target": "0-neff-front-desk"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6524486706364385,
          "pitch": -0.08626824626009011,
          "title": "Tour a room upstairs!",
          "text": "Max room occupancy: 1"
        },
        {
          "yaw": -0.5664229505398701,
          "pitch": -0.09954986644207153,
          "title": "Tour the basement!",
          "text": "Check out some of the amenties!"
        }
      ]
    },
    {
      "id": "4-neff-main-lobby",
      "name": "Neff Main Lobby",
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
          "yaw": -0.7276632292238858,
          "pitch": 0.2941740038791245,
          "rotation": 5.497787143782138,
          "target": "3-main-lobby-elevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-neff-basement-elevators",
      "name": "Neff Basement Elevators",
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
          "yaw": 0.7427359493960104,
          "pitch": -0.0041731296480342905,
          "rotation": 0,
          "target": "3-main-lobby-elevators"
        },
        {
          "yaw": -0.5556144820389193,
          "pitch": -0.039270522231580784,
          "rotation": 0,
          "target": "3-main-lobby-elevators"
        },
        {
          "yaw": 1.9404186242842743,
          "pitch": 0.34558924421895654,
          "rotation": 0,
          "target": "6-neff-basement-right-side"
        },
        {
          "yaw": -1.4282298595165717,
          "pitch": 0.29493563702987124,
          "rotation": 0,
          "target": "7-neff-basement-left-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.19900979454794943,
          "pitch": -0.09816171045224387,
          "title": "Return to Main Lobby",
          "text": ""
        }
      ]
    },
    {
      "id": "6-neff-basement-right-side",
      "name": "Neff Basement Right Side",
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
          "yaw": 1.8016691343276703,
          "pitch": 0.3171970393890895,
          "rotation": 0,
          "target": "5-neff-basement-elevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-neff-basement-left-side",
      "name": "Neff Basement Left Side",
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
          "yaw": -0.4206405362829031,
          "pitch": 0.35142876172505844,
          "rotation": 18.84955592153877,
          "target": "8-neff-basement-left-side-2"
        },
        {
          "yaw": 1.9197326783496491,
          "pitch": 0.2254859916831613,
          "rotation": 0,
          "target": "5-neff-basement-elevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-neff-basement-left-side-2",
      "name": "Neff Basement Left Side 2",
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
          "yaw": 0.26265208956452213,
          "pitch": 0.2975227657547137,
          "rotation": 0.7853981633974483,
          "target": "7-neff-basement-left-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-3rd-floor-elevators",
      "name": "3rd Floor Elevators",
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
          "yaw": 0.24109794176783872,
          "pitch": -0.019498427911059935,
          "rotation": 3.141592653589793,
          "target": "3-main-lobby-elevators"
        },
        {
          "yaw": -1.1929567626093416,
          "pitch": -0.07249876213965223,
          "rotation": 3.141592653589793,
          "target": "3-main-lobby-elevators"
        },
        {
          "yaw": -2.1316019132314707,
          "pitch": 0.42279862765109044,
          "rotation": 0,
          "target": "10-left-wing-entrance"
        },
        {
          "yaw": 0.9376358395170445,
          "pitch": 0.2773778670369502,
          "rotation": 0,
          "target": "17-neff-single-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4121481858810174,
          "pitch": -0.11503069210987782,
          "title": "Exit to main lobby",
          "text": ""
        },
        {
          "yaw": 0.9832411993929338,
          "pitch": 0.10084924096627645,
          "title": "Tour a room!",
          "text": ""
        }
      ]
    },
    {
      "id": "10-left-wing-entrance",
      "name": "Left Wing Entrance",
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
          "yaw": -0.5837171047689385,
          "pitch": 0.49069288241128106,
          "rotation": 0,
          "target": "15-left-wing-entrance-2"
        },
        {
          "yaw": 1.1506159880062672,
          "pitch": 0.3178160420320424,
          "rotation": 0,
          "target": "9-3rd-floor-elevators"
        },
        {
          "yaw": 2.4263886376367543,
          "pitch": 0.4064665413894346,
          "rotation": 12.566370614359176,
          "target": "11-neff-common-room-entryway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.36901846135774363,
          "pitch": -0.08504360113785658,
          "title": "Male Bathrooms",
          "text": "Each floor is separated by gender. All gender restrooms are accessible on the first floor. The shared bathrooms consist of shower stalls, sinks, vanity areas and bathroom stalls.&nbsp;"
        },
        {
          "yaw": 2.796943397147528,
          "pitch": -0.05578026834982097,
          "title": "Neff Common Room",
          "text": "There is a common room on each floor containing ample seating options, study areas and access to technology."
        }
      ]
    },
    {
      "id": "11-neff-common-room-entryway",
      "name": "Neff Common Room Entryway",
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
          "yaw": 0.7415488466213862,
          "pitch": 0.7191346440693991,
          "rotation": 0,
          "target": "10-left-wing-entrance"
        },
        {
          "yaw": -2.6528965555185096,
          "pitch": 0.5350125750975838,
          "rotation": 0,
          "target": "14-neff-common-room-front"
        },
        {
          "yaw": -0.9334706373964057,
          "pitch": 0.5462014917716633,
          "rotation": 0,
          "target": "13-neff-common-room-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-neff-3rd-floor-common-room",
      "name": "Neff 3rd Floor Common Room",
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
      "id": "13-neff-common-room-back",
      "name": "Neff Common Room Back",
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
          "yaw": -1.0800974169968,
          "pitch": 0.4796004369522606,
          "rotation": 11.780972450961727,
          "target": "11-neff-common-room-entryway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-neff-common-room-front",
      "name": "Neff Common Room Front",
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
          "yaw": -0.5678875537595083,
          "pitch": 0.5878341381964685,
          "rotation": 6.283185307179586,
          "target": "11-neff-common-room-entryway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-left-wing-entrance-2",
      "name": "Left Wing Entrance 2",
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
        "yaw": -2.4467412065963323,
        "pitch": 0.28845097499424455,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.5876492972110565,
          "pitch": 0.5714751523502191,
          "rotation": 5.497787143782138,
          "target": "16-neff-utility-room-entrance"
        },
        {
          "yaw": 1.137328105247132,
          "pitch": 0.6265038225497648,
          "rotation": 0,
          "target": "10-left-wing-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-neff-utility-room-entrance",
      "name": "Neff Utility Room Entrance",
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
          "yaw": -3.107739394372185,
          "pitch": 0.3869062103685721,
          "rotation": 0,
          "target": "15-left-wing-entrance-2"
        },
        {
          "yaw": 1.3328129958135673,
          "pitch": 0.1636262550367853,
          "rotation": 0,
          "target": "18-neff-utility-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-neff-single-entrance",
      "name": "Neff Single Entrance",
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
          "yaw": -1.7996809614784421,
          "pitch": 0.29549338460478936,
          "rotation": 0,
          "target": "9-3rd-floor-elevators"
        },
        {
          "yaw": 2.815283210662173,
          "pitch": 0.365697505708777,
          "rotation": 0,
          "target": "19-neff-single-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8347022250200284,
          "pitch": -0.12276240602981048,
          "title": "Neff Single Room",
          "text": ""
        }
      ]
    },
    {
      "id": "18-neff-utility-room",
      "name": "Neff Utility Room",
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
          "yaw": 1.0082063005069735,
          "pitch": 0.399093429571046,
          "rotation": 0,
          "target": "16-neff-utility-room-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5270533377959126,
          "pitch": -0.32388542451047186,
          "title": "Neff Utility Room",
          "text": "Each floor has a utility room that consists of a washer, dryer, folding table and a shared kitchen.&nbsp;"
        }
      ]
    },
    {
      "id": "19-neff-single-room",
      "name": "Neff Single Room",
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
        "yaw": 2.4483034097530645,
        "pitch": 0.08859930145639794,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.5235699320138387,
          "pitch": 0.29310555365674773,
          "rotation": 0,
          "target": "17-neff-single-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.004027213240544,
          "pitch": -0.15920223348199158,
          "title": "Neff Single Room",
          "text": "Each room includes a twin XL bed frame and mattress, a desk, a chair, a microfridge, a microwave, a closet, and chests of drawers."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
