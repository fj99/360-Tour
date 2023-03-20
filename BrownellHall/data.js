var APP_DATA = {
  "scenes": [
    {
      "id": "0-brownelldesk",
      "name": "BrownellDesk",
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
          "yaw": 2.327445719314973,
          "pitch": 0.30834891118116126,
          "rotation": 0,
          "target": "7-brownellelevators"
        },
        {
          "yaw": -0.2094575916394188,
          "pitch": 0.3158308855852816,
          "rotation": 0,
          "target": "9-brownelllaundry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.32077211574920916,
          "pitch": 0.3314336936709079,
          "title": "Front Desk<br>",
          "text": "The front desk is staffed 7 days a week from 10am to 2am.<br>"
        },
        {
          "yaw": -0.2736894035836226,
          "pitch": -0.05409435712279631,
          "title": "Laundry Room<br>",
          "text": "Take a peek at the laundry room!<br>"
        },
        {
          "yaw": 2.3472644453169096,
          "pitch": 0.1288895089801425,
          "title": "Explore Brownell<br>",
          "text": "Tour one of our rooms and check out the community spaces!<br>"
        }
      ]
    },
    {
      "id": "1-brownell2ndfloorlobby",
      "name": "Brownell2ndFloorLobby",
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
          "yaw": -3.062469300368928,
          "pitch": -0.021053104549359603,
          "rotation": 0,
          "target": "2-brownell3rdfloorelevators"
        },
        {
          "yaw": 3.0092588396715465,
          "pitch": -0.018294088155435873,
          "rotation": 3.141592653589793,
          "target": "7-brownellelevators"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7077322841433293,
          "pitch": 0.2107899669478499,
          "title": "Pool Table<br>",
          "text": "Equipment can be rented out at the front desk!<br>"
        }
      ]
    },
    {
      "id": "2-brownell3rdfloorelevators",
      "name": "Brownell3rdFloorElevators",
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
          "yaw": -0.1903579033180023,
          "pitch": -0.022729077812607912,
          "rotation": 3.141592653589793,
          "target": "1-brownell2ndfloorlobby"
        },
        {
          "yaw": -2.834610560018941,
          "pitch": 0.36190953400154946,
          "rotation": 0,
          "target": "3-brownell3rdlobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.813410252695485,
          "pitch": 0.11318155147860942,
          "title": "Foosball Table<br>",
          "text": "Equipment can be rented from the front desk!<br>"
        }
      ]
    },
    {
      "id": "3-brownell3rdlobby",
      "name": "Brownell3rdLobby",
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
          "yaw": -0.933545579256057,
          "pitch": 0.4339567471841832,
          "rotation": 0,
          "target": "2-brownell3rdfloorelevators"
        },
        {
          "yaw": -3.1021360448028883,
          "pitch": 0.2368649198666759,
          "rotation": 0,
          "target": "5-brownellcommonroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.08830778431296,
          "pitch": 0.01684338004410435,
          "title": "Community Room<br>",
          "text": "The community room is lounge area and also includes a community bathroom and kitchen!<br>"
        }
      ]
    },
    {
      "id": "4-brownellbathroom",
      "name": "BrownellBathroom",
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
          "yaw": 0.18940662523646878,
          "pitch": 0.6129161026602397,
          "rotation": 1.5707963267948966,
          "target": "12-brownellroom2"
        },
        {
          "yaw": -0.28887608993464653,
          "pitch": 0.5695353318399867,
          "rotation": 0,
          "target": "16-brownellvanityarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-brownellcommonroom",
      "name": "BrownellCommonRoom",
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
          "yaw": 1.539452039112886,
          "pitch": 0.31850563798487386,
          "rotation": 0.7853981633974483,
          "target": "6-brownellcommunitykitchen"
        },
        {
          "yaw": 1.2062257421296199,
          "pitch": 0.30823035252912767,
          "rotation": 0,
          "target": "3-brownell3rdlobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.373656898598056,
          "pitch": 0.02662603453165069,
          "title": "Community Room<br>",
          "text": "This space includes a TV and gaming systems.<br>"
        }
      ]
    },
    {
      "id": "6-brownellcommunitykitchen",
      "name": "BrownellCommunityKitchen",
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
          "yaw": 2.3799534211688034,
          "pitch": 0.3169994253101187,
          "rotation": 0,
          "target": "5-brownellcommonroom"
        },
        {
          "yaw": -3.0983497645315516,
          "pitch": 0.49906128630899715,
          "rotation": 1.5707963267948966,
          "target": "3-brownell3rdlobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-brownellelevators",
      "name": "BrownellElevators",
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
        "yaw": -1.478941360028081,
        "pitch": 0.0635819391767285,
        "fov": 1.5520294491900453
      },
      "linkHotspots": [
        {
          "yaw": 1.263422690666891,
          "pitch": 0.4037420554790323,
          "rotation": 0,
          "target": "0-brownelldesk"
        },
        {
          "yaw": -1.4061766872381867,
          "pitch": 0.02622592244366473,
          "rotation": 0,
          "target": "1-brownell2ndfloorlobby"
        },
        {
          "yaw": -2.0850000419350536,
          "pitch": 0.1862217889780986,
          "rotation": 0.7853981633974483,
          "target": "8-brownellhallwayentry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.04855842751922,
          "pitch": -0.023969436343135087,
          "title": "Tour a Room!<br>",
          "text": "Check out one of our 4-person suites!<br>"
        },
        {
          "yaw": -1.4030004021312408,
          "pitch": -0.1374935150517267,
          "title": "Brownell Community Spaces<br>",
          "text": "Take a tour of some of the amenities in this building<br>"
        }
      ]
    },
    {
      "id": "8-brownellhallwayentry",
      "name": "BrownellHallwayEntry",
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
          "yaw": 3.050991137337091,
          "pitch": 0.23337780511307393,
          "rotation": 0,
          "target": "15-brownellroomoutside"
        },
        {
          "yaw": -0.23696678453998032,
          "pitch": 0.4100969711198026,
          "rotation": 0,
          "target": "7-brownellelevators"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-brownelllaundry",
      "name": "BrownellLaundry",
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
          "yaw": 0.6873511627376434,
          "pitch": 0.2487179094467038,
          "rotation": 0,
          "target": "0-brownelldesk"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8367491836331222,
          "pitch": -0.14596963149462638,
          "title": "Laundry Room<br>",
          "text": "The laundry room is equipped with many high speed washers and dryers. Each load costs $2.00.<br>"
        }
      ]
    },
    {
      "id": "10-brownelllivingarea",
      "name": "BrownellLivingArea",
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
          "yaw": 0.9321711256380301,
          "pitch": 0.4070806550134627,
          "rotation": 0.7853981633974483,
          "target": "13-brownellroomentrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-brownellroom1",
      "name": "BrownellRoom1",
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
          "yaw": -0.07209246311074047,
          "pitch": 0.6440209089462794,
          "rotation": 11.780972450961727,
          "target": "16-brownellvanityarea"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.47059621893517445,
          "pitch": -0.12378301399030534,
          "title": "Bedroom A<br>",
          "text": "<div>Each bedroom includes two twin XL beds, two desks, two chairs, two dressers, two desk lamps, and ample storage.</div>"
        }
      ]
    },
    {
      "id": "12-brownellroom2",
      "name": "BrownellRoom2",
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
          "yaw": 0.043669584429235186,
          "pitch": 0.4197415380825422,
          "rotation": 5.497787143782138,
          "target": "16-brownellvanityarea"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5445397544131563,
          "pitch": 0.08390131462116379,
          "title": "Bedroom B<br>",
          "text": "Each bedroom includes two twin XL beds, two desks, two chairs, two dressers, two desk lamps, and ample storage<br>"
        }
      ]
    },
    {
      "id": "13-brownellroomentrance",
      "name": "BrownellRoomEntrance",
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
          "yaw": -2.0873723765938212,
          "pitch": 0.370589571810644,
          "rotation": 0,
          "target": "15-brownellroomoutside"
        },
        {
          "yaw": 0.9206992204384257,
          "pitch": 0.6392923946605542,
          "rotation": 0,
          "target": "10-brownelllivingarea"
        },
        {
          "yaw": 2.520744956490713,
          "pitch": 0.5630552120087433,
          "rotation": 0,
          "target": "14-brownellroomhallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6043220765947694,
          "pitch": 0.34711787456452825,
          "title": "Storage Area<br>",
          "text": "Each suite includes 2 micro-fridges and microwaves.<br>"
        }
      ]
    },
    {
      "id": "14-brownellroomhallway",
      "name": "BrownellRoomHallway",
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
          "yaw": 2.9423444032478816,
          "pitch": 0.5843857008849991,
          "rotation": 0,
          "target": "16-brownellvanityarea"
        },
        {
          "yaw": 2.3576991890469694,
          "pitch": 0.6060076395417564,
          "rotation": 10.995574287564278,
          "target": "11-brownellroom1"
        },
        {
          "yaw": -0.21849824389012795,
          "pitch": 0.6423623923061719,
          "rotation": 0,
          "target": "13-brownellroomentrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-brownellroomoutside",
      "name": "BrownellRoomOutside",
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
          "yaw": 2.99611508347901,
          "pitch": 0.20189673124857954,
          "rotation": 0,
          "target": "8-brownellhallwayentry"
        },
        {
          "yaw": 1.2162315197230225,
          "pitch": 0.11460511589405442,
          "rotation": 0,
          "target": "13-brownellroomentrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2487768875593055,
          "pitch": -0.17767562410303306,
          "title": "4-Person Suite<br>",
          "text": "This suite consists of a living area, a full bathroom, vanity area and two bedrooms.<br>"
        }
      ]
    },
    {
      "id": "16-brownellvanityarea",
      "name": "BrownellVanityArea",
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
        "yaw": 2.2621673301405805,
        "pitch": 0.172483921699909,
        "fov": 1.5520294491900453
      },
      "linkHotspots": [
        {
          "yaw": 0.3942714988458782,
          "pitch": 0.6161939868573612,
          "rotation": 0.7853981633974483,
          "target": "11-brownellroom1"
        },
        {
          "yaw": -0.14534656276789626,
          "pitch": 0.4538690191638004,
          "rotation": 0,
          "target": "13-brownellroomentrance"
        },
        {
          "yaw": 1.7172773245285526,
          "pitch": 0.8088149914428335,
          "rotation": 0,
          "target": "12-brownellroom2"
        },
        {
          "yaw": 2.951354886347662,
          "pitch": 0.30513339201790046,
          "rotation": 0,
          "target": "4-brownellbathroom"
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
