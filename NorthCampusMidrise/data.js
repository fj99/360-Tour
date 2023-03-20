var APP_DATA = {
  "scenes": [
    {
      "id": "0-midriselobby",
      "name": "MidriseLobby",
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
          "yaw": 0.8727678571452078,
          "pitch": 0.2852561477540121,
          "rotation": 18.06415775814132,
          "target": "8-midriserecroomentry"
        },
        {
          "yaw": 2.8361001357865643,
          "pitch": 0.1690010368945778,
          "rotation": 0,
          "target": "15-midriseroomhallway"
        },
        {
          "yaw": -1.7624226329628137,
          "pitch": 0.19104065233945278,
          "rotation": 0.7853981633974483,
          "target": "19-robertasentrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.828195611284956,
          "pitch": -0.04375913811103338,
          "title": "Tour a room!<br>",
          "text": "Take a walk through one of our suites!<br>"
        },
        {
          "yaw": -1.689771173526779,
          "pitch": 0.010267053783444169,
          "title": "Roberta's",
          "text": "Check out our mini-grocery store!<br>"
        },
        {
          "yaw": 0.8266811273814874,
          "pitch": 0.13217652617544573,
          "title": "Other Amenities<br>",
          "text": "North Campus offers many amenities for residents, these include a recreation room and computer lab. Take a peek at these resources!<br>"
        },
        {
          "yaw": 0.08936848076808168,
          "pitch": 0.0767662803217597,
          "title": "Front Desk<br>",
          "text": "The front desk is staffed 7 days a week from 10am to 2am. <br>"
        }
      ]
    },
    {
      "id": "1-midrisecomputerlab1",
      "name": "MidriseComputerLab1",
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
          "yaw": -1.547918865923286,
          "pitch": 0.08937576689125137,
          "rotation": 0,
          "target": "3-midrisecomputerlabentry"
        },
        {
          "yaw": -0.949762956925241,
          "pitch": 0.413951836415837,
          "rotation": 1.5707963267948966,
          "target": "2-midrisecomputerlab2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5649805947749567,
          "pitch": 0.18477362732172864,
          "title": "Printing",
          "text": "This printer offers black and white printing and is available to all students for a cost of $0.05 per page.<br>"
        }
      ]
    },
    {
      "id": "2-midrisecomputerlab2",
      "name": "MidriseComputerLab2",
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
          "yaw": 3.114199991336659,
          "pitch": 0.4851437696706604,
          "rotation": 0,
          "target": "1-midrisecomputerlab1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-midrisecomputerlabentry",
      "name": "MidriseComputerLabEntry",
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
          "yaw": -1.5664395429853037,
          "pitch": 0.3176779445834228,
          "rotation": 0,
          "target": "1-midrisecomputerlab1"
        },
        {
          "yaw": 0.13328714857448176,
          "pitch": 0.35551872611887525,
          "rotation": 0,
          "target": "8-midriserecroomentry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.543154029410541,
          "pitch": -0.01309917991806131,
          "title": "Computer Lab<br>",
          "text": "The Computer lab is equipped with both Windows and Apple Computers for student use.<br>"
        }
      ]
    },
    {
      "id": "4-midrisediningarea",
      "name": "MidriseDiningArea",
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
          "yaw": 2.621422664584527,
          "pitch": 0.39868063395809017,
          "rotation": 0,
          "target": "6-midrisekitchen"
        },
        {
          "yaw": -2.699087650377246,
          "pitch": 0.1661113873701261,
          "rotation": 0.7853981633974483,
          "target": "9-midriseroom1"
        },
        {
          "yaw": 0.6646440114299317,
          "pitch": 0.5633574899941713,
          "rotation": 0,
          "target": "7-midriselivingarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-midriseentrywayroom",
      "name": "MidriseEntrywayRoom",
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
          "yaw": -3.00982411250002,
          "pitch": 0.22549428086436407,
          "rotation": 0,
          "target": "16-midriseroomoutside"
        },
        {
          "yaw": -1.5468399250499907,
          "pitch": 0.5673398144764601,
          "rotation": 0,
          "target": "6-midrisekitchen"
        },
        {
          "yaw": 0.0466762569332726,
          "pitch": 0.5241161921605269,
          "rotation": 0,
          "target": "4-midrisediningarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-midrisekitchen",
      "name": "MidriseKitchen",
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
          "yaw": -1.751199336904282,
          "pitch": 0.48509911255468197,
          "rotation": 0,
          "target": "5-midriseentrywayroom"
        },
        {
          "yaw": 2.6976019126521233,
          "pitch": 0.43519872904365364,
          "rotation": 0,
          "target": "4-midrisediningarea"
        },
        {
          "yaw": 1.9840213824582484,
          "pitch": 0.2959018049788309,
          "rotation": 5.497787143782138,
          "target": "9-midriseroom1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.24657540608977158,
          "pitch": -0.13747418548793533,
          "title": "Kitchen<br>",
          "text": "Comes with a full sized fridge, microwave, dishwasher, induction stove and oven. <br>"
        }
      ]
    },
    {
      "id": "7-midriselivingarea",
      "name": "MidriseLivingArea",
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
          "yaw": 2.150759464964386,
          "pitch": 0.15623901308382315,
          "rotation": 5.497787143782138,
          "target": "12-midriseroom2"
        },
        {
          "yaw": -2.2384300740893828,
          "pitch": 0.1024915222788998,
          "rotation": 0.7853981633974483,
          "target": "9-midriseroom1"
        },
        {
          "yaw": 2.521038069479987,
          "pitch": 0.3356658714665297,
          "rotation": 0.7853981633974483,
          "target": "5-midriseentrywayroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-midriserecroomentry",
      "name": "MidriseRecRoomEntry",
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
          "yaw": -0.7698041397128801,
          "pitch": 0.30993982976371015,
          "rotation": 0,
          "target": "17-recroommidrise"
        },
        {
          "yaw": -2.263332597286686,
          "pitch": 0.23565007970569418,
          "rotation": 0,
          "target": "3-midrisecomputerlabentry"
        },
        {
          "yaw": 0.8885832909164719,
          "pitch": 0.2631406456914611,
          "rotation": 0,
          "target": "0-midriselobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7740887784691068,
          "pitch": 0.14416177311060707,
          "title": "Recreation Room<br>",
          "text": "The recreation room houses our very own Thrifty Owl as well as other amenities!<br>"
        },
        {
          "yaw": -2.2654708066021048,
          "pitch": 0.04524153858669955,
          "title": "Tour the Computer Lab!<br>",
          "text": "The Computer Lab has over 20 computers that are free to use by residents, check out the space!<br>"
        }
      ]
    },
    {
      "id": "9-midriseroom1",
      "name": "MidriseRoom1",
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
          "yaw": 0.035050668618271885,
          "pitch": 0.5637935013439392,
          "rotation": 0,
          "target": "10-midriseroom1back"
        },
        {
          "yaw": -0.5644401438510442,
          "pitch": 0.2417945590485786,
          "rotation": 5.497787143782138,
          "target": "4-midrisediningarea"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5439535571760956,
          "pitch": -0.09154912026645157,
          "title": "Bedroom A<br>",
          "text": "Each bedroom includes two twin XL beds, two desks, two chairs, two dressers, two desk lamps, and a full bathroom.<br>"
        }
      ]
    },
    {
      "id": "10-midriseroom1back",
      "name": "MidriseRoom1Back",
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
          "yaw": -1.308406245528813,
          "pitch": 0.24445991783394838,
          "rotation": 0,
          "target": "11-midriseroom1bath"
        },
        {
          "yaw": 0.36305082895809093,
          "pitch": 0.4612777011604763,
          "rotation": 0,
          "target": "9-midriseroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-midriseroom1bath",
      "name": "MidriseRoom1Bath",
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
          "yaw": -0.8156609266096471,
          "pitch": 0.7282089431901912,
          "rotation": 0,
          "target": "10-midriseroom1back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-midriseroom2",
      "name": "MidriseRoom2",
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
          "yaw": -1.34190609385087,
          "pitch": 0.4103289498003164,
          "rotation": 1.5707963267948966,
          "target": "7-midriselivingarea"
        },
        {
          "yaw": -1.7747633200342818,
          "pitch": 0.3013911781025236,
          "rotation": 0,
          "target": "13-midriseroom2back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7565125976051341,
          "pitch": 0.019832314704606446,
          "title": "Bedroom B<br>",
          "text": "Each bedroom includes two twin XL beds, two desks, two chairs, two dressers, two desk lamps, and a full bathroom."
        }
      ]
    },
    {
      "id": "13-midriseroom2back",
      "name": "MidriseRoom2Back",
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
          "yaw": 1.8853831238553402,
          "pitch": 0.3982794557070868,
          "rotation": 0,
          "target": "14-midriseroom2bath"
        },
        {
          "yaw": 0.030189911998212082,
          "pitch": 0.533736769116663,
          "rotation": 0,
          "target": "12-midriseroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-midriseroom2bath",
      "name": "MidriseRoom2Bath",
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
          "yaw": -1.5200566229948649,
          "pitch": 0.7190344168215077,
          "rotation": 0,
          "target": "13-midriseroom2back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-midriseroomhallway",
      "name": "MidriseRoomHallway",
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
        "yaw": 3.051045949867845,
        "pitch": 0.19310390108021025,
        "fov": 1.5520294491900453
      },
      "linkHotspots": [
        {
          "yaw": 2.957833484605713,
          "pitch": 0.13749366941438623,
          "rotation": 0,
          "target": "16-midriseroomoutside"
        },
        {
          "yaw": -0.18248698211374936,
          "pitch": 0.31664011034250805,
          "rotation": 0,
          "target": "0-midriselobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-midriseroomoutside",
      "name": "MIdriseRoomOutside",
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
          "yaw": 0.05213286666176664,
          "pitch": 0.07545410241083772,
          "rotation": 0,
          "target": "5-midriseentrywayroom"
        },
        {
          "yaw": 1.6548595261657137,
          "pitch": 0.2749000656060314,
          "rotation": 0,
          "target": "15-midriseroomhallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.05906771563338431,
          "pitch": -0.1281018069265656,
          "title": "Tour a suite!<br>",
          "text": "Each suite can accommodate up to 4 people, where 2 people are assigned to a&nbsp; bedroom. North Campus also offers a limited number of singles that come with the same amenities shown in this tour. <br>"
        }
      ]
    },
    {
      "id": "17-recroommidrise",
      "name": "RecRoomMidrise",
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
          "yaw": 1.3318605034562019,
          "pitch": 0.28206613830474936,
          "rotation": 0,
          "target": "21-thriftyowl"
        },
        {
          "yaw": -0.2576039918765698,
          "pitch": 0.17007763145226207,
          "rotation": 0,
          "target": "8-midriserecroomentry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3445350605361241,
          "pitch": 0.11175673516592788,
          "title": "Tour the Thrifty Owl!<br>",
          "text": "The Thrifty Owl is a student reuse store that is filled with a variety of donated items. Students can take up to 2 items for free every time they visit. Donations are collected throughout the year!<br>"
        },
        {
          "yaw": 2.8934959834418326,
          "pitch": -0.009387598716630308,
          "title": "Amenities in the Recreation Room<br>",
          "text": "The Recreation Room has an air hockey table, foosball table, gaming systems, a TV, vending machines and an ice machine. Equipment including controllers and games can be rented out at the front desk!<br>"
        }
      ]
    },
    {
      "id": "18-roberatsview1",
      "name": "RoberatsView1",
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
          "yaw": -3.054742640566028,
          "pitch": 0.28851384168052974,
          "rotation": 0.7853981633974483,
          "target": "19-robertasentrance"
        },
        {
          "yaw": 1.6138557395460786,
          "pitch": 0.4237971017670805,
          "rotation": 0.7853981633974483,
          "target": "20-robertasview2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-robertasentrance",
      "name": "RobertasEntrance",
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
          "yaw": -1.8657304034514492,
          "pitch": 0.19054837794376667,
          "rotation": 0,
          "target": "0-midriselobby"
        },
        {
          "yaw": -0.356330523686589,
          "pitch": 0.49466305065041993,
          "rotation": 0,
          "target": "18-roberatsview1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.34181754185524227,
          "pitch": 0.290545710266624,
          "title": "More about Roberta's<br>",
          "text": "Roberta's is our infamous mini-grocery store that is fully stocked with a variety of grocery staples. Don't forget to grab Roberta's famous chocolate chip cookie on your way out!<br>"
        }
      ]
    },
    {
      "id": "20-robertasview2",
      "name": "RobertasView2",
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
          "yaw": -0.8478280087212404,
          "pitch": 0.3561767605388262,
          "rotation": 0,
          "target": "18-roberatsview1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-thriftyowl",
      "name": "ThriftyOwl",
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
          "yaw": 1.7497879970872159,
          "pitch": 0.40066789511681833,
          "rotation": 11.780972450961727,
          "target": "17-recroommidrise"
        }
      ],
      "infoHotspots": []
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
