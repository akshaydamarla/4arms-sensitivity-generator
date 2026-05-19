const devices = {
  android: {
    Samsung: {
      // S26 Series
      "S26 Ultra": {
        tier: "flagship",
        touch: 10,
        smoothness: 10,
        displaySize: 7,
      },

      "S26 Plus": {
        tier: "flagship",
        touch: 10,
        smoothness: 10,
        displaySize: 7,
      },

      "S26": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 6,
      },

      // S25 Series
      "S25 Ultra": {
        tier: "flagship",
        touch: 10,
        smoothness: 10,
        displaySize: 7,
      },

      "S25 Plus": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "S25": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 6,
      },

      // S24 Series
      "S24 Ultra": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "S24 Plus": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "S24": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 6,
      },

      // S23 Series
      "S23 Ultra": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "S23 Plus": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 7,
      },

      "S23": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 6,
      },

      // S22 Series
      "S22 Ultra": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 7,
      },

      "S22 Plus": {
        tier: "flagship",
        touch: 7,
        smoothness: 7,
        displaySize: 7,
      },

      "S22": {
        tier: "flagship",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },

      // A Series
      "A74": {
        tier: "midrange",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },

      "A54": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },

      "A34": {
        tier: "midrange",
        touch: 5,
        smoothness: 5,
        displaySize: 6,
      },

      // Budget
      "M14": {
        tier: "lowend",
        touch: 4,
        smoothness: 4,
        displaySize: 6,
      },

      "F14": {
        tier: "lowend",
        touch: 4,
        smoothness: 4,
        displaySize: 6,
      },
    },

    OnePlus: {
      "OnePlus 13": {
        tier: "flagship",
        touch: 10,
        smoothness: 10,
        displaySize: 7,
      },

      "OnePlus 12": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "OnePlus 12R": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "OnePlus 11": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 7,
      },

      "OnePlus Nord 4": {
        tier: "midrange",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },

      "OnePlus Nord 3": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },

      "OnePlus Nord CE 4": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },

      "OnePlus Nord N30": {
        tier: "lowend",
        touch: 4,
        smoothness: 4,
        displaySize: 6,
      },
    },

    Xiaomi: {
      "Xiaomi 15 Pro": {
        tier: "flagship",
        touch: 10,
        smoothness: 10,
        displaySize: 7,
      },

      "Xiaomi 14": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 6,
      },

      "Xiaomi 13 Pro": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 7,
      },

      "Redmi Note 14 Pro": {
        tier: "midrange",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },

      "Redmi Note 13 Pro": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },

      "Redmi Note 12": {
        tier: "midrange",
        touch: 5,
        smoothness: 5,
        displaySize: 6,
      },

      "POCO X6": {
        tier: "midrange",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },

      "POCO M2": {
        tier: "lowend",
        touch: 4,
        smoothness: 4,
        displaySize: 6,
      },

      "POCO X3": {
        tier: "lowend",
        touch: 5,
        smoothness: 5,
        displaySize: 6,
      },

      "Redmi 13C": {
        tier: "lowend",
        touch: 4,
        smoothness: 4,
        displaySize: 6,
      },
    },

    Google: {
      "Pixel 9 Pro": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 6,
      },

      "Pixel 9": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 6,
      },

      "Pixel 8 Pro": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 6,
      },

      "Pixel 8": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 6,
      },

      "Pixel 7a": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },

      "Pixel 6a": {
        tier: "midrange",
        touch: 5,
        smoothness: 5,
        displaySize: 6,
      },
    },

    iQOO: {
      "iQOO 13": {
        tier: "flagship",
        touch: 10,
        smoothness: 10,
        displaySize: 7,
      },

      "iQOO 12": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "iQOO Neo 10": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "iQOO Neo 10R": {
        tier: "midrange",
        touch: 8,
        smoothness: 8,
        displaySize: 7,
      },

      "iQOO Neo 9": {
        tier: "midrange",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },

      Z9: {
        tier: "lowend",
        touch: 5,
        smoothness: 5,
        displaySize: 6,
      },
    },

    Realme: {
      "GT 7 Pro": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "GT 6": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 7,
      },

      "GT 30 5G": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "Realme 13 5G": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },

      "Realme 13 Pro": {
        tier: "midrange",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },

      "Realme 12 Pro": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },

      "Narzo 70": {
        tier: "midrange",
        touch: 5,
        smoothness: 5,
        displaySize: 6,
      },

      C55: {
        tier: "lowend",
        touch: 4,
        smoothness: 4,
        displaySize: 6,
      },
    },

    Vivo: {
      "Vivo V30": {
        tier: "midrange",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },

      "Vivo T3x": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },
    },
    Infinix: {
      "GT 30 Pro": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 7,
      },

      "GT 30": {
        tier: "midrange",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },
          POCO: {
      "POCO F6": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "POCO X6 Pro": {
        tier: "flagship",
        touch: 8,
        smoothness: 8,
        displaySize: 7,
      },

      "POCO X5 Pro": {
        tier: "midrange",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },

      "POCO M6 Pro": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },

      "POCO M2": {
        tier: "lowend",
        touch: 4,
        smoothness: 4,
        displaySize: 6,
      },
    },

    OPPO: {
      "Find X8 Pro": {
        tier: "flagship",
        touch: 9,
        smoothness: 9,
        displaySize: 7,
      },

      "Reno 12 Pro": {
        tier: "midrange",
        touch: 7,
        smoothness: 7,
        displaySize: 6,
      },

      "Reno 11": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },

      "F27 Pro": {
        tier: "midrange",
        touch: 6,
        smoothness: 6,
        displaySize: 6,
      },

      "A79": {
        tier: "lowend",
        touch: 4,
        smoothness: 4,
        displaySize: 6,
      },
    },
    },
  },

  apple: {
    iPhone: {
      // iPhone 17 Series
      "iPhone 17": {
        Base: {
          tier: "flagship",
          touch: 10,
          smoothness: 10,
          displaySize: 6,
        },

        Air: {
          tier: "flagship",
          touch: 10,
          smoothness: 10,
          displaySize: 6,
        },

        Pro: {
          tier: "flagship",
          touch: 10,
          smoothness: 10,
          displaySize: 6,
        },

        ProMax: {
          tier: "flagship",
          touch: 10,
          smoothness: 10,
          displaySize: 7,
        },
      },

      // iPhone 16 Series
      "iPhone 16": {
        Base: {
          tier: "flagship",
          touch: 9,
          smoothness: 9,
          displaySize: 6,
        },

        Plus: {
          tier: "flagship",
          touch: 9,
          smoothness: 9,
          displaySize: 7,
        },

        Pro: {
          tier: "flagship",
          touch: 10,
          smoothness: 10,
          displaySize: 6,
        },

        ProMax: {
          tier: "flagship",
          touch: 10,
          smoothness: 10,
          displaySize: 7,
        },
      },

      // iPhone 15 Series
      "iPhone 15": {
        Base: {
          tier: "flagship",
          touch: 9,
          smoothness: 9,
          displaySize: 6,
        },

        Plus: {
          tier: "flagship",
          touch: 9,
          smoothness: 9,
          displaySize: 7,
        },

        Pro: {
          tier: "flagship",
          touch: 10,
          smoothness: 10,
          displaySize: 6,
        },

        ProMax: {
          tier: "flagship",
          touch: 10,
          smoothness: 10,
          displaySize: 7,
        },
      },

      // iPhone 14 Series
      "iPhone 14": {
        Base: {
          tier: "flagship",
          touch: 8,
          smoothness: 8,
          displaySize: 6,
        },

        Plus: {
          tier: "flagship",
          touch: 8,
          smoothness: 8,
          displaySize: 7,
        },

        Pro: {
          tier: "flagship",
          touch: 9,
          smoothness: 9,
          displaySize: 6,
        },

        ProMax: {
          tier: "flagship",
          touch: 9,
          smoothness: 9,
          displaySize: 7,
        },
      },

      // iPhone 13 Series
"iPhone 13": {
  Mini: {
    tier: "flagship",
    touch: 8,
    smoothness: 8,
    displaySize: 5,
  },

  Base: {
    tier: "flagship",
    touch: 8,
    smoothness: 8,
    displaySize: 6,
  },

  Pro: {
    tier: "flagship",
    touch: 9,
    smoothness: 9,
    displaySize: 6,
  },

  ProMax: {
    tier: "flagship",
    touch: 9,
    smoothness: 9,
    displaySize: 7,
  },
},

// iPhone 12 Series
"iPhone 12": {
  Mini: {
    tier: "flagship",
    touch: 7,
    smoothness: 7,
    displaySize: 5,
  },

  Base: {
    tier: "flagship",
    touch: 7,
    smoothness: 7,
    displaySize: 6,
  },

  Pro: {
    tier: "flagship",
    touch: 8,
    smoothness: 8,
    displaySize: 6,
  },

  ProMax: {
    tier: "flagship",
    touch: 8,
    smoothness: 8,
    displaySize: 7,
  },
},

// iPhone 11 Series
"iPhone 11": {
  Base: {
    tier: "midrange",
    touch: 6,
    smoothness: 6,
    displaySize: 6,
  },

  Pro: {
    tier: "flagship",
    touch: 7,
    smoothness: 7,
    displaySize: 6,
  },

  ProMax: {
    tier: "flagship",
    touch: 8,
    smoothness: 8,
    displaySize: 7,
  },
},

// Older iPhones
"iPhone XS": {
  Base: {
    tier: "midrange",
    touch: 6,
    smoothness: 6,
    displaySize: 5,
  },

  Max: {
    tier: "midrange",
    touch: 7,
    smoothness: 7,
    displaySize: 6,
  },
},

"iPhone XR": {
  Base: {
    tier: "midrange",
    touch: 6,
    smoothness: 6,
    displaySize: 6,
  },
},

"iPhone X": {
  Base: {
    tier: "midrange",
    touch: 5,
    smoothness: 5,
    displaySize: 5,
  },
},

"iPhone 8": {
  Base: {
    tier: "lowend",
    touch: 4,
    smoothness: 4,
    displaySize: 5,
  },

  Plus: {
    tier: "lowend",
    touch: 5,
    smoothness: 5,
    displaySize: 6,
  },
},

"iPhone 7": {
  Base: {
    tier: "lowend",
    touch: 4,
    smoothness: 4,
    displaySize: 5,
  },

  Plus: {
    tier: "lowend",
    touch: 5,
    smoothness: 5,
    displaySize: 6,
  },
},

// SE Models
"iPhone SE": {
  "2nd Gen": {
    tier: "midrange",
    touch: 5,
    smoothness: 5,
    displaySize: 5,
  },

  "3rd Gen": {
    tier: "midrange",
    touch: 6,
    smoothness: 6,
    displaySize: 5,
  },
      },
    },
  },
};

export default devices;