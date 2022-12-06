var APP_DATA = {
  "scenes": [
    {
      "id": "0-townhouse_livingarea1",
      "name": "Townhouse_LivingArea1",
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
          "yaw": 0.4792167020307936,
          "pitch": 0.3719844491784734,
          "rotation": 0,
          "target": "1-townhouse_livingarea2"
        },
        {
          "yaw": -0.9890656268688662,
          "pitch": 0.36993047491819375,
          "rotation": 0,
          "target": "3-townhouse_bedroomarea"
        },
        {
          "yaw": 1.8477602159362494,
          "pitch": 0.3661574978935107,
          "rotation": 0,
          "target": "2-townhouse_diningarea"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9640563603608623,
          "pitch": -0.756434586607142,
          "title": "Bedroom A<br>",
          "text": "This bedroom accomodates up to two people, and can be offered as a double or a single to residents."
        },
        {
          "yaw": -2.5744890997832446,
          "pitch": -0.10158132513998908,
          "title": "Bedroom B<br>",
          "text": "Identical to Room A, this is the second bedroom in the Townhouse."
        },
        {
          "yaw": 2.881598628489317,
          "pitch": -0.09014387004279811,
          "title": "Kitchen",
          "text": "A full kitchen that comes equipped with a full-size fridge, a microwave, a dishwasher, a sink and plenty of storage space."
        },
        {
          "yaw": 0.45291557318366316,
          "pitch": -0.1156960670888445,
          "title": "Patio/Balcony",
          "text": "The lower level Townhouse has a patio while the upper-level townhouse has a balcony."
        }
      ]
    },
    {
      "id": "1-townhouse_livingarea2",
      "name": "Townhouse_LivingArea2",
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
          "yaw": -1.7178553748251009,
          "pitch": 0.360176968998033,
          "rotation": 0,
          "target": "0-townhouse_livingarea1"
        },
        {
          "yaw": 2.990969857750631,
          "pitch": 0.3684343757424653,
          "rotation": 0.7853981633974483,
          "target": "2-townhouse_diningarea"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.0847050585453637,
          "pitch": -0.39624682652248566,
          "title": "<div>Patio/Balcony</div>",
          "text": "The lower level Townhouse has a patio while the upper-level townhouse has a balcony."
        },
        {
          "yaw": -1.6920432399298928,
          "pitch": -0.4330358663631966,
          "title": "Bedroom A<br>",
          "text": "This bedroom accomodates up to two people, and can be offered as a double or a single to residents."
        },
        {
          "yaw": -2.7407739737747665,
          "pitch": -0.07149040223566594,
          "title": "Kitchen",
          "text": "A full kitchen that comes equipped with a full-size fridge, a microwave, a dishwasher, a sink and plenty of storage space."
        }
      ]
    },
    {
      "id": "2-townhouse_diningarea",
      "name": "Townhouse_DiningArea",
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
          "yaw": -2.6667961575144083,
          "pitch": 0.07615699332159132,
          "rotation": 5.497787143782138,
          "target": "1-townhouse_livingarea2"
        },
        {
          "yaw": 2.486131931557365,
          "pitch": 0.0018237407159844565,
          "rotation": 5.497787143782138,
          "target": "0-townhouse_livingarea1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.31112634542739315,
          "pitch": -0.05110219984570463,
          "title": "Kitchen",
          "text": "A full kitchen that comes equipped with a full-size fridge, a microwave, a dishwasher, a sink and plenty of storage space."
        },
        {
          "yaw": 2.161271342626307,
          "pitch": -0.4264385743691754,
          "title": "Bedroom A<br>",
          "text": "This bedroom accomodates up to two people, and can be offered as a double or a single to residents."
        }
      ]
    },
    {
      "id": "3-townhouse_bedroomarea",
      "name": "Townhouse_BedroomArea",
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
          "yaw": -1.9787480233309687,
          "pitch": -0.00463447334639433,
          "rotation": 0,
          "target": "0-townhouse_livingarea1"
        },
        {
          "yaw": -0.8746768491455441,
          "pitch": 0.3854848346470465,
          "rotation": 0,
          "target": "4-townhouse_closets"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.44252076625148,
          "pitch": 0.44486848383365185,
          "title": "Bedroom A<br>",
          "text": "This bedroom accomodates up to two people, and can be offered as a double or a single to residents."
        }
      ]
    },
    {
      "id": "4-townhouse_closets",
      "name": "Townhouse_Closets",
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
          "yaw": 2.6431893234877997,
          "pitch": 0.0012470490700451364,
          "rotation": 0,
          "target": "5-townhouse_bathroom1"
        },
        {
          "yaw": -2.0602716712941422,
          "pitch": 0.32651756647347696,
          "rotation": 0,
          "target": "3-townhouse_bedroomarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-townhouse_bathroom1",
      "name": "Townhouse_Bathroom1",
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
          "yaw": -1.233523762261747,
          "pitch": -0.03183295883035342,
          "rotation": 0,
          "target": "4-townhouse_closets"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TownHouse",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
