function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const defaultRestaurants = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "290680",
      name: "Chutneys hub",
      uuid: "0bfc862e-7694-430a-9300-673977bd497a",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "r3nsfltko8u1uj9r81gf",
      cuisines: ["Indian", "Biryani"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 4.5,
      slugs: {
        restaurant: "chutneys-hub-kukatpally-kukatpally",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "plot no 1-146,Beside sri sai batmentan court,80ft road,  gokul Plots,  Kphb 9th phase, Hyderabad,  Pin : 500072",
      locality: "Kphb 9th phase",
      parentId: 19382,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4700,
        message: "",
        title: "Delivery Charge",
        amount: "4700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "290680",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 4.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "292360",
      name: "Raju Gari Biryani",
      uuid: "5349b9c5-0404-4d1d-8dc7-fdad94afbe48",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "ggx0mggjl3wli70y1oi8",
      cuisines: ["Biryani"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 4.699999809265137,
      slugs: {
        restaurant:
          "rajugaribiryani-nizampet-&-pragathi-nagar-nizampet-&-pragathi-nagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Gurram Jashuva St, Sreenivasa Nagar, Kukatpally, Hyderabad, Telangana 500090, India",
      locality: "Nizampet & Pragathi Nagar",
      parentId: 165947,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4700,
        message: "",
        title: "Delivery Charge",
        amount: "4700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.6 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "292360",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 4.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "724486",
      name: "Hitex Bawarchi",
      uuid: "2d637283-a446-4633-8be5-d6a91e3c54d8",
      city: "3",
      area: "Miyapur",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "7f6d14430f3fa2415cb505ee83f65d20",
      cuisines: ["Arabian", "Tandoor"],
      tags: [],
      costForTwo: 34800,
      costForTwoString: "₹348 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "hitex-bawarchi-miyapur-miyapur",
        city: "hyderabad",
      },
      cityState: "3",
      address: "F9X6+5J3, Kalapuram Basti, Miyapur, Telangana 500049, India",
      locality: "kalapuram basti",
      parentId: 4977,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3100,
        message: "",
        title: "Delivery Charge",
        amount: "3100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹159",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "724486",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.0",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "45580",
      name: "Pizza House",
      uuid: "9fcb587a-8454-499d-ab81-456cb4b91749",
      city: "3",
      area: "Safari Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "lijwvp3da31boxvfn59z",
      cuisines: ["American", "Fast Food"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.099999904632568,
      slugs: {
        restaurant: "pizza-house-kondapur-kondapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "H No:1-20/1/L, Beside, SS Mini Market, Lotus Park Apartment Back Side Road, Safari Nagar, Kondapur, Hyderabad ,  Hyderabad  West Zone, Telangana-500084 ",
      locality: "Safari Nagar,Kondapur",
      parentId: 7782,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7400,
        message: "",
        title: "Delivery Charge",
        amount: "7400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "45580",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "96944",
      name: "NIC Ice Creams",
      uuid: "5a2baa45-e537-45b9-b43e-13b4d4c02539",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "d461cb7eac503656a2b4bb13e7c60b97",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 12000,
      costForTwoString: "₹120 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 6.099999904632568,
      slugs: {
        restaurant: "nic-natural-ice-cream-kukatpally-kukatpally",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "SHOP AT PLOT NO 448, SURVEY NO 1009, KUKATPALLY VILLAGE, KPHB COLONY, MALKAJGIRI, MEDCHAL - MALKAJGIRI, TELANGANA -501401, Circle No.14 (Kukatpally), Hyderabad - West Zone, Telangana, 501401",
      locality: "Malkajgiri",
      parentId: 6249,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7400,
        message: "",
        title: "Delivery Charge",
        amount: "7400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "96944",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 6.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "150652",
      name: "Cream Stone Ice Cream",
      uuid: "6422b591-0f51-417f-900a-16acdc524905",
      city: "3",
      area: "Lingampally",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "0465abc3ad7327522519d6a195d10dfc",
      cuisines: ["Ice Cream", "Desserts", "Beverages", "Ice Cream Cakes"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 6.699999809265137,
      slugs: {
        restaurant: "cream-stone-lingampally-nalagandla-lingampally-nalagandla",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Plot No. 20, Tara Nagar, Nallagandla, Hyderabad, Telangana 500019.",
      locality: "Lingampally",
      parentId: 289,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7400,
        message: "",
        title: "Delivery Charge",
        amount: "7400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.6 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "150652",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 6.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "15810",
      name: "Being Hungry",
      uuid: "db3cf71d-6aa5-48f8-b48c-71d43db14cc6",
      city: "3",
      area: "Hanuman Nagar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "qqyrvjpy8x41dwyjysxt",
      cuisines: ["North Indian", "Chinese", "Biryani"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "being-hungry-towards-rto-office-kondapur",
        city: "hyderabad",
      },
      cityState: "3",
      address: "1-112/90/3,Opp To Kims Hospital, Kondapur",
      locality: "Kondapur",
      parentId: 105,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 6400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 6400,
        message: "",
        title: "Delivery Charge",
        amount: "6400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "15810",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "577939",
      name: "Burger King",
      uuid: "85474036-cff4-4bc4-92c1-6d4576faf73b",
      city: "3",
      area: "Miyapur",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: "burger-king-miyapur-miyapur",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "GROUND FLOOR, PLOT NO.10 & 13,D.NO.1-22/10/KM/1, KALIKI MANSION,MIYAPUR, Chandanagar circle No 21,Hyderabad, Telangana-500049",
      locality: "Chandanagar Circle No 21",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3100,
        message: "",
        title: "Delivery Charge",
        amount: "3100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "577939",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "16164",
      name: "Lucky Multicuisine Restaurant",
      uuid: "8aa8fdd1-c537-4f78-991d-f40029aa30d9",
      city: "3",
      area: "Kalapuram Basti",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "bv7eioaorni0demvwih4",
      cuisines: ["Indian", "Chinese", "Tandoor"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "lucky-multicuisine-restaurant-bollaram-road-miyapur",
        city: "hyderabad",
      },
      cityState: "3",
      address: "2-69 Bollaram Road , Miyapur , Hyderabad",
      locality: "Bollaram Road",
      parentId: 18963,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3100,
        message: "",
        title: "Delivery Charge",
        amount: "3100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "16164",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "597101",
      name: "Aha Vantillu",
      uuid: "d0c54695-8973-4c19-bdaf-6d123ee0fe25",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "f4tcryyd8vulwmrf3cja",
      cuisines: ["Chinese", "Indian", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant:
          "aha-vantillu-nizampet-&-pragathi-nagar-nizampet-&-pragathi-nagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "62A, No 3 St, Addagutta, Samatha Nagar, Kukatpally, Hyderabad, Telangana 500085, India",
      locality: "Samatha Nagar",
      parentId: 357003,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 6400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 6400,
        message: "",
        title: "Delivery Charge",
        amount: "6400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "597101",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "584599",
      name: "Biryani Spice",
      uuid: "6ace9907-9a7d-4f7e-a01e-abdcdd286243",
      city: "3",
      area: "Nizampet & Pragathi Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "pgyfzyknw9xsgyhdak30",
      cuisines: ["Biryani", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant:
          "biryani-spice-nizampet-&-pragathi-nagar-nizampet-&-pragathi-nagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "62A, No 3 St, Addagutta, Samatha Nagar, Kukatpally, Hyderabad, Telangana 500085, India",
      locality: "Samatha Nagar",
      parentId: 46975,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 6400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 6400,
        message: "",
        title: "Delivery Charge",
        amount: "6400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "584599",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "503883",
      name: "Tasty Shawarmas",
      uuid: "3fc36c5d-37e0-4613-bcad-13d72df3b80e",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "iheys7uzirstowgfdahx",
      cuisines: ["Arabian", "Lebanese", "Biryani", "Beverages"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "tasty-shawarma's-kukatpally-kukatpally",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "749, K P H B Phase 1, Kukatpally, Hyderabad, Telangana 500072, India",
      locality: "K P H B Phase 1",
      parentId: 301788,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7400,
        message: "",
        title: "Delivery Charge",
        amount: "7400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "503883",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "389222",
      name: "Biggies Burger",
      uuid: "e539d3b3-e1c0-4ec1-9f05-8e4156851f95",
      city: "3",
      area: "Kukatpally",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "u0obmm4lmucvriidjcdp",
      cuisines: ["American", "Fast Food", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 6.099999904632568,
      slugs: {
        restaurant: "biggies-burger-kukatpally-kukatpally",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "15-31-2L-10/1-6, Kukatpally Housing Board Rd, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072, India",
      locality: "3rd Phase",
      parentId: 45723,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7400,
        message: "",
        title: "Delivery Charge",
        amount: "7400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "389222",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 6.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "675695",
      name: "Biryani Company",
      uuid: "81c485bb-54cb-4215-9915-9cf5e20fe88c",
      city: "3",
      area: "Nizampet & Pragathi Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "932cc952a243203d505fcdeffa302653",
      cuisines: ["Biryani"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant:
          "biryani-company-nizampet-&-pragathi-nagar-nizampet-&-pragathi-nagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "62A, No 3 St, Addagutta, Samatha Nagar, Kukatpally, Hyderabad, Telangana 500085, India",
      locality: "Samatha Nagar",
      parentId: 46641,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 6400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 6400,
        message: "",
        title: "Delivery Charge",
        amount: "6400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "675695",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "636401",
      name: "Sha Sha - Shandaar Shawarma",
      uuid: "2490c93f-35c7-40d6-a72a-29e17fb0cc28",
      city: "3",
      area: "Nizampet & Pragathi Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "blf47ub6pdfgpz59tynd",
      cuisines: ["Lebanese"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant:
          "sha-sha---shandaar-shawarma-nizampet-&-pragathi-nagar-nizampet-&-pragathi-nagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Kiosk No: C 2 , Near Miyapur Metro Depot, Under Miyapur Metro Station LHS, Miyapur, Chandanagar circle No 21, Hyderabad, , Telangana, 500049",
      locality: "Miyapur",
      parentId: 387839,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "636401",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

const restaurants = shuffle(defaultRestaurants);

module.exports = { restaurants };
