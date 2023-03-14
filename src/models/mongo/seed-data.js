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
      }
    },
    placemarks: {
      _model: "Placemark",
      Naas: {
        placeMark: "Naas",
        lat: "54",
        long: "-7",
        userid: "->users.homer"
      },
      Newbridge: {
        placeMark: "Newbridge",
        lat: "53",
        long: "-6",
        userid: "->users.homer"
      }
    },
    tracks: {
      _model : "Point",
      point_1 : {
        pointName: "Naas Ball",
        latitude: "54",
        longitude: "-6",
        category:"Nature",
        description:"eeeeeeee",
        placemarkid: "->placemarks.Naas"
      },
      point_2 : {
        pointName: "Naas Ball",
        latitude: "54",
        longitude: "-6",
        category:"Nature",
        description:"eeeeeeee",
        placemarkid: "->placemarks.Naas"
      },
      point_3 : {
        pointName: "Naas Ball",
        latitude: "54",
        longitude: "-6",
        category:"Nature",
        description:"eeeeeeee",
        placemarkid: "->placemarks.Naas"
      },
      point_4 : {
        pointName: "Naas Ball",
        latitude: "54",
        longitude: "-6",
        category:"Nature",
        description:"eeeeeeee",
        placemarkid: "->placemarks.Naas"
      },
      point_5 : {
        pointName: "Naas Ball",
        latitude: "54",
        longitude: "-6",
        category:"Nature",
        description:"eeeeeeee",
        placemarkid: "->placemarks.Naas"
      },
    }
  };
  