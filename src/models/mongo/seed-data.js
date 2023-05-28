export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "$2a$10$KCxlnMsqinGeIwUQHNcP3OZg22mVBdPocYj1yPnFfd32Pc/WMMg72"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "$2a$10$rLzs0pDdszgSCbM7J6oCqeUFRKD5oQnpCpB8AijGhK.jAVgJD5KfW"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "$2a$10$NH/EqoVMj/Wo/I7SyA141OGQ/JjgWhZGaPGLP//jQLW2NfGZH.89G"
      },
      pablo: {
        firstName: "Pablo",
        lastName: "Simpson",
        email: "pablo@simpson.com",
        password: "$2a$10$aDN1IOeSfKz.d6wOK1iNFu.IJjMqGvAbeCQ.vmCBW3k.gYlCYa8GK"
      },
      chapo: {
        firstName: "Chapo",
        lastName: "Simpson",
        email: "chapo@simpson.com",
        password: "$2a$10$7sviota8xFAb1I8zEjGFJOBmGjYHMNQTszfpxBtHx.l23fnATSa82"
      },
    },
    placemarks: {
      _model: "Placemark",
      Naas: {
        placeMark: "Naas",
        lat: "53.21",
        long: "-6.66",
        img: "https://res.cloudinary.com/dsagwvxx4/image/upload/v1679141481/qzybo3th6tkrjiyc4xux.jpg",
        userid: "->users.homer",
        isPrivate: false
      },
      Dublin: {
        placeMark: "Dublin",
        lat: "53.34",
        long: "-6.26",
        img: "https://res.cloudinary.com/dsagwvxx4/image/upload/v1685070459/ebb2pajkjqmbtw3opxyn.jpg",
        userid: "->users.homer",
        isPrivate: false
      },
      Galway: {
        placeMark: "Galway",
        lat: "53.27",
        long: "-9.05",
        img: "https://res.cloudinary.com/dsagwvxx4/image/upload/v1685070745/wkzhzgzriadgtwouwxqw.jpg",
        userid: "->users.marge",
        isPrivate: false
      },
      Cork: {
        placeMark: "Cork",
        lat: "51.89",
        long: "-8.48",
        img: "https://res.cloudinary.com/dsagwvxx4/image/upload/v1685070918/sdi4megrmpktnjgfrjbo.jpg",
        userid: "->users.pablo",
        isPrivate: false
      },
      Waterford: {
        placeMark: "Waterford",
        lat: "52.35",
        long: "-7.11",
        img: "https://res.cloudinary.com/dsagwvxx4/image/upload/v1685070828/bnyim3uqdkwpooyrtk1z.jpg",
        userid: "->users.chapo",
        isPrivate: false
      },
      Letterkenny: {
        placeMark: "Letterkenny",
        lat: "54.94",
        long: "-7.73",
        img: "https://res.cloudinary.com/dsagwvxx4/image/upload/v1685071024/zgmyhvuqwsd9diznvjux.jpg",
        userid: "->users.homer",
        isPrivate: false
      },
      Limerick: {
        placeMark: "Limerick",
        lat: "52.66",
        long: "-8.63",
        img: "https://your-image-link-here.jpg",
        userid: "->users.chapo",
        isPrivate: false
      },
      Kilkenny: {
        placeMark: "Kilkenny",
        lat: "52.65",
        long: "-7.25",
        img: "https://your-image-link-here.jpg",
        userid: "->users.marge",
        isPrivate: false
      },
      Sligo: {
        placeMark: "Sligo",
        lat: "54.27",
        long: "-8.47",
        img: "https://your-image-link-here.jpg",
        userid: "->users.homer",
        isPrivate: false
      },
      Athlone: {
        placeMark: "Athlone",
        lat: "53.42",
        long: "-7.93",
        img: "https://your-image-link-here.jpg",
        userid: "->users.pablo",
        isPrivate: false
      },
      Tralee: {
        placeMark: "Tralee",
        lat: "52.27",
        long: "-9.69",
        img: "https://your-image-link-here.jpg",
        userid: "->users.chapo",
        isPrivate: false
      }
    },
    points: {
      _model : "Point",
      point_1 : {
        pointName: "Naas Canal",
        latitude: "53.2172",
        longitude: "-6.6838",
        category:"Nature",
        description:"Naas canal is a man-made waterway that runs through County Kildare, Ireland, connecting the Grand Canal in Dublin to the River Barrow.",
        placemarkid: "->placemarks.Naas"
      },
      point_2 : {
        pointName: "Naas General Hospital",
        latitude: "53.2209",
        longitude: "-6.6685",
        category:"Health",
        description:"A public hospital located in Naas, County Kildare, Ireland. It provides a range of medical services to the local community and surrounding areas.",
        placemarkid: "->placemarks.Naas"
      },
      point_3 : {
        pointName: "Naas CBS",
        latitude: "53.2211",
        longitude: "-6.6663",
        category:"Education",
        description:"A secondary school located in Naas, County Kildare, Ireland. It offers a range of academic and extracurricular programs for students.",
        placemarkid: "->placemarks.Naas"
      },
      point_4 : {
        pointName: "Naas Ball",
        latitude: "53.2163",
        longitude: "-6.7081",
        category:"Landmark",
        description:"The Big Ball is a prominent landmark in the area and is visible from a distance along the N7 motorway.",
        placemarkid: "->placemarks.Naas"
      },
      point_5 : {
        pointName: "Punchestown Racecourse",
        latitude: "53.2232",
        longitude: "-6.6566",
        category:"Sports",
        description:" A world-famous horse racing venue located just outside of Naas, County Kildare, Ireland.",
        placemarkid: "->placemarks.Naas"
      },
      point_6 : {
        pointName: "Swan on the Green",
        latitude: "53.2154",
        longitude: "-6.6624",
        category:"Restaurant",
        description:" A popular pub and restaurant located in the town center of Naas, County Kildare, Ireland.",
        placemarkid: "->placemarks.Naas"
      },
      point_7 : {
        pointName: "Naas GAA (Gaelic Athletic Association)",
        latitude: "53.2209",
        longitude: "-6.6664",
        category:"Sports",
        description:" The Naas GAA grounds are a sports complex that serves as the home of the Naas GAA club. ",
        placemarkid: "->placemarks.Naas"
      },
      point_8 : {
        pointName: "Costa Coffee",
        latitude: "53.2191",
        longitude: "- 6.6598",
        category:"Restaurant",
        description:" The Costa Coffee in Naas is a popular coffee chain that offers a range of hot and cold drinks, snacks, and light meals.",
        placemarkid: "->placemarks.Naas"
      },
      point_9: {
        pointName: "Trinity College Dublin",
        latitude: "53.3438",
        longitude: "-6.2546",
        category: "Education",
        description: "Ireland's premier educational institution, Trinity College Dublin is renowned for its pursuit of excellence in teaching and research.",
        placemarkid: "->placemarks.Dublin"
      },
      point_10: {
        pointName: "Guinness Storehouse",
        latitude: "53.3419",
        longitude: "-6.2866",
        category: "Entertainment",
        description: "The Guinness Storehouse explains the history of Beer. The story is told through various interactive exhibition areas.",
        placemarkid: "->placemarks.Dublin"
      },
      point_11: {
        pointName: "Phoenix Park",
        latitude: "53.3614",
        longitude: "-6.3182",
        category: "Nature",
        description: "One of the largest and most magnificent city parks in Europe. A lively and entertaining green space for locals and tourists alike.",
        placemarkid: "->placemarks.Dublin"
      },
      point_12: {
        pointName: "Temple Bar",
        latitude: "53.3456",
        longitude: "-6.2642",
        category: "Entertainment",
        description: "Dublin's cultural quarter and the most visited area of the city, with a lively nightlife that is popular with tourists.",
        placemarkid: "->placemarks.Dublin"
      },
      point_13: {
        pointName: "Dublin Castle",
        latitude: "53.3430",
        longitude: "-6.2672",
        category: "Historic",
        description: "Off Dame Street, Dublin, Ireland, was until 1922 the seat of the United Kingdom government's administration in Ireland.",
        placemarkid: "->placemarks.Dublin"
      },
      point_14: {
        pointName: "Galway City Museum",
        latitude: "53.2719",
        longitude: "-9.0530",
        category: "Education",
        description: "Situated behind the famous Spanish Arch, Galway City Museum houses exhibitions on the history and heritage of Galway City.",
        placemarkid: "->placemarks.Galway"
      },
      point_15: {
        pointName: "Eyre Square",
        latitude: "53.2743",
        longitude: "-9.0491",
        category: "Landmark",
        description: "Eyre Square, in the heart of Galway City, is a bustling city park that serves as a meeting point and hosts many public events.",
        placemarkid: "->placemarks.Galway"
      },
      point_16: {
        pointName: "Quay Street",
        latitude: "53.2708",
        longitude: "-9.0533",
        category: "Entertainment",
        description: "Known for its lively atmosphere, Quay Street is lined with charming pubs, restaurants, and shops, making it a must-visit in Galway.",
        placemarkid: "->placemarks.Galway"
      },
      point_17: {
        pointName: "An Grianan Theatre",
        latitude: "54.9511",
        longitude: "-7.7351",
        category: "Entertainment",
        description: "An Grianan Theatre is the largest theatre in County Donegal. It has a seating capacity of 383 and hosts a variety of performances.",
        placemarkid: "->placemarks.Letterkenny"
      },
      point_18: {
        pointName: "Letterkenny Cathedral",
        latitude: "54.9530",
        longitude: "-7.7343",
        category: "Landmark",
        description: "St. Eunan's Cathedral or the Cathedral of St. Eunan and St Columba as it is also known, is a Roman Catholic cathedral in the parish of Conwal and Leck, part of the Diocese of Raphoe.",
        placemarkid: "->placemarks.Letterkenny"
      },
      point_19: {
        pointName: "Letterkenny Institute of Technology",
        latitude: "54.9530",
        longitude: "-7.7343",
        category: "Education",
        description: "Letterkenny Institute of Technology (LYIT) is a vibrant, dynamic, and modern learning environment where students can pursue their education and career ambitions.",
        placemarkid: "->placemarks.Letterkenny"
      },
      point_20: {
        pointName: "Aura Leisure Centre",
        latitude: "54.9465",
        longitude: "-7.7307",
        category: "Sports",
        description: "Aura Leisure Centre is a popular venue for sports and leisure activities, featuring a gym, swimming pool, and a variety of fitness classes.",
        placemarkid: "->placemarks.Letterkenny"
      },
      point_21: {
        pointName: "Letterkenny Town Park",
        latitude: "54.9473",
        longitude: "-7.7393",
        category: "Nature",
        description: "Letterkenny Town Park, near the town center, offers a green oasis with a playground, walking paths, and a skate park.",
        placemarkid: "->placemarks.Letterkenny"
      },
      point_22: {
        pointName: "Reginald's Tower",
        latitude: "52.2604",
        longitude: "-7.1063",
        category: "Landmark",
        description: "Reginald's Tower is a historic tower in Waterford, Ireland. It is the oldest urban civic building in Ireland and has been used for various purposes over its history.",
        placemarkid: "->placemarks.Waterford"
      },
      point_23: {
        pointName: "Waterford Crystal",
        latitude: "52.2567",
        longitude: "-7.1292",
        category: "Shopping",
        description: "Waterford Crystal is a manufacturer of crystal, named after the city of Waterford. It is renowned for its quality and beautiful craftsmanship.",
        placemarkid: "->placemarks.Waterford"
      },
      point_24: {
        pointName: "Waterford Institute of Technology",
        latitude: "52.2462",
        longitude: "-7.1402",
        category: "Education",
        description: "Waterford Institute of Technology is a state funded third-level educational institution situated in the city of Waterford, Ireland.",
        placemarkid: "->placemarks.Waterford"
      },
      point_25: {
        pointName: "Blarney Stone",
        latitude: "51.9289",
        longitude: "-8.5709",
        category: "Landmark",
        description: "The Blarney Stone is a block of Carboniferous limestone built into the battlements of Blarney Castle, Blarney. According to legend, kissing the stone endows the kisser with the gift of eloquence.",
        placemarkid: "->placemarks.Cork"
      },
      point_26: {
        pointName: "University College Cork",
        latitude: "51.8922",
        longitude: "-8.4929",
        category: "Education",
        description: "University College Cork – National University of Ireland, Cork is a constituent university of the National University of Ireland, and located in Cork.",
        placemarkid: "->placemarks.Cork"
      },
      point_27: {
        pointName: "English Market",
        latitude: "51.8979",
        longitude: "-8.4706",
        category: "Shopping",
        description: "The English Market, in the heart of Cork City, is a covered market for fish, fruit, meat and vegetable. It's one of the oldest municipal markets of its kind in the world.",
        placemarkid: "->placemarks.Cork"
      },
      point_28: {
        pointName: "King John's Castle",
        latitude: "52.6680",
        longitude: "-8.6305",
        category: "Landmark",
        description: "King John's Castle is a 13th-century castle located on King's Island in Limerick, next to the River Shannon.",
        placemarkid: "->placemarks.Limerick"
      },
      point_29: {
        pointName: "St. Mary's Cathedral",
        latitude: "52.6689",
        longitude: "-8.6233",
        category: "Landmark",
        description: "St. Mary's Cathedral, Limerick, is a cathedral of the Church of Ireland in Limerick, Ireland.",
        placemarkid: "->placemarks.Limerick"
      },
      point_30: {
        pointName: "Kilkenny Castle",
        latitude: "52.6504",
        longitude: "-7.2488",
        category: "Landmark",
        description: "Kilkenny Castle is a castle in Kilkenny, Ireland. It was the seat of the Butler family.",
        placemarkid: "->placemarks.Kilkenny"
      },
      point_31: {
        pointName: "St Canice's Cathedral",
        latitude: "52.6542",
        longitude: "-7.2478",
        category: "Landmark",
        description: "St Canice's Cathedral, also known as Kilkenny Cathedral, is a cathedral of the Church of Ireland in Kilkenny city, Ireland.",
        placemarkid: "->placemarks.Kilkenny"
      },

    }
  };
  