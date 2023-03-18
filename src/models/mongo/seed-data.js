export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "123"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "123"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "123"
      },
      pablo: {
        firstName: "Pablo",
        lastName: "Simpson",
        email: "pablo@simpson.com",
        password: "123"
      },
      chapo: {
        firstName: "Chapo",
        lastName: "Simpson",
        email: "chapo@simpson.com",
        password: "123"
      },
    },
    placemarks: {
      _model: "Placemark",
      Naas: {
        placeMark: "Naas",
        lat: "53.21",
        long: "-6.66",
        img: "https://res.cloudinary.com/dsagwvxx4/image/upload/v1679141481/qzybo3th6tkrjiyc4xux.jpg",
        userid: "->users.homer"
      },
      Dublin: {
        placeMark: "Dublin",
        lat: "53.34",
        long: "-6.26",
        userid: "->users.homer"
      },
      Galway: {
        placeMark: "Galway",
        lat: "53.27",
        long: "-9.05",
        userid: "->users.homer"
      },
      Cork: {
        placeMark: "Cork",
        lat: "51.89",
        long: "-8.48",
        userid: "->users.homer"
      },
      Waterford: {
        placeMark: "Waterford",
        lat: "52.35",
        long: "-7.11",
        userid: "->users.homer"
      },
      Letterkenny: {
        placeMark: "Letterkenny",
        lat: "54.94",
        long: "-7.73",
        userid: "->users.homer"
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
    }
  };
  