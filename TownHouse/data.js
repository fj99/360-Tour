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
      "infoHotspots": []
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
      "infoHotspots": []
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
          "yaw": -2.6305621540115283,
          "pitch": 0.3086403716898154,
          "rotation": 0,
          "target": "1-townhouse_livingarea2"
        },
        {
          "yaw": 2.8069767138141852,
          "pitch": 0.4956655706646256,
          "rotation": 5.497787143782138,
          "target": "0-townhouse_livingarea1"
        }
      ],
      "infoHotspots": []
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
      "infoHotspots": []
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
          "yaw": -1.4914066387682805,
          "pitch": -0.0052808083529782834,
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
