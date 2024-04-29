//Thanks to https://webdesign.tutsplus.com/how-to-create-a-sortable-html-table-with-javascript--cms-92993t

const response = {
    "skerWeaponsT0": [
        {
            "weapon": "The Plague",
            "ammo": 40,
            "damageBase": 1260,
            "damageHeadshot": 4806,
            "totalBase": 50400,
            "totalHeadshot": 192240,
        },
        {
            "weapon": "Double-Barreled Shotgun",
            "ammo": 60,
            "damageBase": 708,
            "damageHeadshot": 2700,
            "totalBase": 42480,
            "totalHeadshot": 162000,
        },
        {
            "weapon": "Sie Regotti",
            "ammo": 280,
            "damageBase": 137,
            "damageHeadshot": 522,
            "totalBase": 38360,
            "totalHeadshot": 146160,
        },
        {
            "weapon": "RS10",
            "ammo": 48,
            "damageBase": 774,
            "damageHeadshot": 2952,
            "totalBase": 37152,
            "totalHeadshot": 141696,
        },
        {
            "weapon": "God Killer",
            "ammo": 26,
            "damageBase": 1100,
            "damageHeadshot": 4194,
            "totalBase": 28600,
            "totalHeadshot": 109044,
        },
        {
            "weapon": "Hunting Rifle",
            "ammo": 100,
            "damageBase": 250,
            "damageHeadshot": 953,
            "totalBase": 25000,
            "totalHeadshot": 95300,
        },
        {
            "weapon": "Joseph Heavy Automatic",
            "ammo": 291,
            "damageBase": 75,
            "damageHeadshot": 286,
            "totalBase": 21825,
            "totalHeadshot": 83226,
        },
        {
            "weapon": "MP18A",
            "ammo": 400,
            "damageBase": 48,
            "damageHeadshot": 183,
            "totalBase": 19200,
            "totalHeadshot": 73200,
        },
        {
            "weapon": "Crossbow",
            "ammo": 30,
            "damageBase": 600,
            "damageHeadshot": 2286,
            "totalBase": 18000,
            "totalHeadshot": 68580,
        },
        {
            "weapon": "Pavlov Avtomat",
            "ammo": 300,
            "damageBase": 55,
            "damageHeadshot": 210,
            "totalBase": 16500,
            "totalHeadshot": 63000,
        },
        {
            "weapon": "Revolver",
            "ammo": 72,
            "damageBase": 160,
            "damageHeadshot": 610,
            "totalBase": 11520,
            "totalHeadshot": 43920,
        },
        {
            "weapon": "Basil Automatic 1913",
            "ammo": 300,
            "damageBase": 37,
            "damageHeadshot": 141,
            "totalBase": 11100,
            "totalHeadshot": 42300,
        },
        {
            "weapon": "Thunderbolt",
            "ammo": 40,
            "damageBase": 270,
            "damageHeadshot": 1029,
            "totalBase": 10800,
            "totalHeadshot": 41160,
        },
        {
            "weapon": "MX1910",
            "ammo": 96,
            "damageBase": 50,
            "damageHeadshot": 191,
            "totalBase": 4800,
            "totalHeadshot": 18336,
        },
        {
            "weapon": "Baseball Bat",
            "ammo": 0,
            "damageBase": 330,
            "damageHeadshot": 1258,
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
        {
            "weapon": "Pioneer's Axe",
            "ammo": 0,
            "damageBase": 330,
            "damageHeadshot": 1258,
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
    ],
    "skerWeaponsT1": [
        {
            "weapon": "The Plague",
            "ammo": 50,
            "damageBase": 2520,
            "damageHeadshot": 9606,
            "totalBase": 126000,
            "totalHeadshot": 480300,
        },
        {
            "weapon": "Double-Barreled Shotgun",
            "ammo": 75,
            "damageBase": 1416,
            "damageHeadshot": 5400,
            "totalBase": 106200,
            "totalHeadshot": 405000,
        },
        {
            "weapon": "Sie Regotti",
            "ammo": 350,
            "damageBase": 274,
            "damageHeadshot": 1045,
            "totalBase": 95900,
            "totalHeadshot": 365750,
        },
        {
            "weapon": "RS10",
            "ammo": 60,
            "damageBase": 1548,
            "damageHeadshot": 5904,
            "totalBase": 92880,
            "totalHeadshot": 354240,
        },
        {
            "weapon": "God Killer",
            "ammo": 32,
            "damageBase": 2200,
            "damageHeadshot": 8388,
            "totalBase": 70400,
            "totalHeadshot": 268416,
        },
        {
            "weapon": "Hunting Rifle",
            "ammo": 125,
            "damageBase": 500,
            "damageHeadshot": 1906,
            "totalBase": 62500,
            "totalHeadshot": 238250,
        },
        {
            "weapon": "Joseph Heavy Automatic",
            "ammo": 364,
            "damageBase": 150,
            "damageHeadshot": 572,
            "totalBase": 54600,
            "totalHeadshot": 208208,
        },
        {
            "weapon": "MP18A",
            "ammo": 500,
            "damageBase": 96,
            "damageHeadshot": 366,
            "totalBase": 48000,
            "totalHeadshot": 183000,
        },
        {
            "weapon": "Crossbow",
            "ammo": 38,
            "damageBase": 1200,
            "damageHeadshot": 4575,
            "totalBase": 45600,
            "totalHeadshot": 173850,
        },
        {
            "weapon": "Pavlov Avtomat",
            "ammo": 375,
            "damageBase": 110,
            "damageHeadshot": 419,
            "totalBase": 41250,
            "totalHeadshot": 157125,
        },
        {
            "weapon": "Revolver",
            "ammo": 90,
            "damageBase": 320,
            "damageHeadshot": 1220,
            "totalBase": 28800,
            "totalHeadshot": 109800,
        },
        {
            "weapon": "Basil Automatic 1913",
            "ammo": 375,
            "damageBase": 74,
            "damageHeadshot": 282,
            "totalBase": 27750,
            "totalHeadshot": 105750,
        },
        {
            "weapon": "Thunderbolt",
            "ammo": 50,
            "damageBase": 540,
            "damageHeadshot": 2059,
            "totalBase": 27000,
            "totalHeadshot": 102950,
        },
        {
            "weapon": "MX1910",
            "ammo": 120,
            "damageBase": 100,
            "damageHeadshot": 381,
            "totalBase": 12000,
            "totalHeadshot": 45720,
        },
        {
            "weapon": "Baseball Bat",
            "ammo": 0,
            "damageBase": 600,
            "damageHeadshot": 2516,
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
        {
            "weapon": "Pioneer's Axe",
            "ammo": 0,
            "damageBase": 600,
            "damageHeadshot": 2516,
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
    ],
    "skerWeaponsT2": [
        {
            "weapon": "The Plague",
            "ammo": 60,
            "damageBase": 5040,
            "damageHeadshot": 19212,
            "totalBase": 302400,
            "totalHeadshot": 1152720,
        },
        {
            "weapon": "Double-Barreled Shotgun",
            "ammo": 90,
            "damageBase": 2832,
            "damageHeadshot": 10800,
            "totalBase": 254880,
            "totalHeadshot": 972000,
        },
        {
            "weapon": "Sie Regotti",
            "ammo": 420,
            "damageBase": 548,
            "damageHeadshot": 2089,
            "totalBase": 230160,
            "totalHeadshot": 873600,
        },
        {
            "weapon": "RS10",
            "ammo": 72,
            "damageBase": 3096,
            "damageHeadshot": 11802,
            "totalBase": 222912,
            "totalHeadshot": 849744,
        },
        {
            "weapon": "God Killer",
            "ammo": 39,
            "damageBase": 4400,
            "damageHeadshot": 16775,
            "totalBase": 171600,
            "totalHeadshot": 654225,
        },
        {
            "weapon": "Hunting Rifle",
            "ammo": 150,
            "damageBase": 1000,
            "damageHeadshot": 3812,
            "totalBase": 150000,
            "totalHeadshot": 571800,
        },
        {
            "weapon": "Joseph Heavy Automatic",
            "ammo": 436,
            "damageBase": 300,
            "damageHeadshot": 1144,
            "totalBase": 130800,
            "totalHeadshot": 498784,
        },
        {
            "weapon": "MP18A",
            "ammo": 600,
            "damageBase": 192,
            "damageHeadshot": 732,
            "totalBase": 115200,
            "totalHeadshot": 439200,
        },
        {
            "weapon": "Crossbow",
            "ammo": 45,
            "damageBase": 2400,
            "damageHeadshot": 9150,
            "totalBase": 108000,
            "totalHeadshot": 411750,
        },
        {
            "weapon": "Pavlov Avtomat",
            "ammo": 450,
            "damageBase": 220,
            "damageHeadshot": 839,
            "totalBase": 99000,
            "totalHeadshot": 377550,
        },
        {
            "weapon": "Revolver",
            "ammo": 108,
            "damageBase": 640,
            "damageHeadshot": 2440,
            "totalBase": 69120,
            "totalHeadshot": 263520,
        },
        {
            "weapon": "Basil Automatic 1913",
            "ammo": 450,
            "damageBase": 148,
            "damageHeadshot": 564,
            "totalBase": 66600,
            "totalHeadshot": 253800,
        },
        {
            "weapon": "Thunderbolt",
            "ammo": 60,
            "damageBase": 1080,
            "damageHeadshot": 4118,
            "totalBase": 64800,
            "totalHeadshot": 247080,
        },
        {
            "weapon": "MX1910",
            "ammo": 144,
            "damageBase": 200,
            "damageHeadshot": 762,
            "totalBase": 28800,
            "totalHeadshot": 109728,
        },
        {
            "weapon": "Baseball Bat",
            "ammo": 0,
            "damageBase": 1320,
            "damageHeadshot": 5032,
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
        {
            "weapon": "Pioneer's Axe",
            "ammo": 0,
            "damageBase": 1320,
            "damageHeadshot": 5032,
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
    ],
    "skerWeaponsT3": [
        {
            "weapon": "The Plague",
            "ammo": 70,
            "damageBase": 10080,
            "damageHeadshot": 38430,
            "totalBase": 705600,
            "totalHeadshot": 2690100,
        },
        {
            "weapon": "Double-Barreled Shotgun",
            "ammo": 105,
            "damageBase": 5664,
            "damageHeadshot": 21594,
            "totalBase": 594720,
            "totalHeadshot": 2267390,
        },
        {
            "weapon": "Sie Regotti",
            "ammo": 490,
            "damageBase": 1096,
            "damageHeadshot": 4178,
            "totalBase": 537040,
            "totalHeadshot": 2047220,
        },
        {
            "weapon": "RS10",
            "ammo": 84,
            "damageBase": 6192,
            "damageHeadshot": 23604,
            "totalBase": 520128,
            "totalHeadshot": 1982736,
        },
        {
            "weapon": "God Killer",
            "ammo": 46,
            "damageBase": 8800,
            "damageHeadshot": 33550,
            "totalBase": 404800,
            "totalHeadshot": 1543300,
        },
        {
            "weapon": "Hunting Rifle",
            "ammo": 175,
            "damageBase": 2000,
            "damageHeadshot": 7625,
            "totalBase": 350000,
            "totalHeadshot": 1334375,
        },
        {
            "weapon": "Joseph Heavy Automatic",
            "ammo": 509,
            "damageBase": 600,
            "damageHeadshot": 2288,
            "totalBase": 305400,
            "totalHeadshot": 1164592,
        },
        {
            "weapon": "MP18A",
            "ammo": 700,
            "damageBase": 384,
            "damageHeadshot": 1464,
            "totalBase": 268800,
            "totalHeadshot": 1024800,
        },
        {
            "weapon": "Crossbow",
            "ammo": 52,
            "damageBase": 4800,
            "damageHeadshot": 18300,
            "totalBase": 249600,
            "totalHeadshot": 951600,
        },
        {
            "weapon": "Pavlov Avtomat",
            "ammo": 525,
            "damageBase": 440,
            "damageHeadshot": 1678,
            "totalBase": 231000,
            "totalHeadshot": 880950,
        },
        {
            "weapon": "Revolver",
            "ammo": 126,
            "damageBase": 1280,
            "damageHeadshot": 4880,
            "totalBase": 161280,
            "totalHeadshot": 614880,
        },
        {
            "weapon": "Basil Automatic 1913",
            "ammo": 525,
            "damageBase": 296,
            "damageHeadshot": 1128,
            "totalBase": 155400,
            "totalHeadshot": 592200,
        },
        {
            "weapon": "Thunderbolt",
            "ammo": 70,
            "damageBase": 2160,
            "damageHeadshot": 8235,
            "totalBase": 151200,
            "totalHeadshot": 576450,
        },
        {
            "weapon": "MX1910",
            "ammo": 168,
            "damageBase": 400,
            "damageHeadshot": 1525,
            "totalBase": 67200,
            "totalHeadshot": 256200,
        },
        {
            "weapon": "Baseball Bat",
            "ammo": 0,
            "damageBase": 2640,
            "damageHeadshot": 10065,
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
        {
            "weapon": "Pioneer's Axe",
            "ammo": 0,
            "damageBase": 2640,
            "damageHeadshot": 10065,
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
    ],
    "skerWeaponsT4": [
        {
            "weapon": "The Plague",
            "ammo": 80,
            "damageBase": 20160,
            "damageHeadshot": 76860,
            "totalBase": 1612800,
            "totalHeadshot": 6148800,
        },
        {
            "weapon": "Double-Barreled Shotgun",
            "ammo": 120,
            "damageBase": 11328,
            "damageHeadshot": 43188,
            "totalBase": 1359360,
            "totalHeadshot": 5182560,
        },
        {
            "weapon": "Sie Regotti",
            "ammo": 560,
            "damageBase": 2192,
            "damageHeadshot": 8356,
            "totalBase": 1227520,
            "totalHeadshot": 4679360,
        },
        {
            "weapon": "RS10",
            "ammo": 94,
            "damageBase": 12384,
            "damageHeadshot": 47214,
            "totalBase": 1164096,
            "totalHeadshot": 4438116,
        },
        {
            "weapon": "God Killer",
            "ammo": 52,
            "damageBase": 17600,
            "damageHeadshot": 67100,
            "totalBase": 915200,
            "totalHeadshot": 3489200,
        },
        {
            "weapon": "Hunting Rifle",
            "ammo": 200,
            "damageBase": 4000,
            "damageHeadshot": 15250,
            "totalBase": 800000,
            "totalHeadshot": 3050000,
        },
        {
            "weapon": "MP18A",
            "ammo": 800,
            "damageBase": 768,
            "damageHeadshot": 2928,
            "totalBase": 614400,
            "totalHeadshot": 2342400,
        },
        {
            "weapon": "Joseph Heavy Automatic",
            "ammo": 582,
            "damageBase": 1200,
            "damageHeadshot": 4575,
            "totalBase": 610800,
            "totalHeadshot": 2328675,
        },
        {
            "weapon": "Crossbow",
            "ammo": 60,
            "damageBase": 9600,
            "damageHeadshot": 36600,
            "totalBase": 576000,
            "totalHeadshot": 2196000,
        },
        {
            "weapon": "Pavlov Avtomat",
            "ammo": 600,
            "damageBase": 880,
            "damageHeadshot": 3355,
            "totalBase": 528000,
            "totalHeadshot": 2013000,
        },
        {
            "weapon": "Revolver",
            "ammo": 144,
            "damageBase": 2560,
            "damageHeadshot": 9760,
            "totalBase": 368640,
            "totalHeadshot": 1405440,
        },
        {
            "weapon": "Basil Automatic 1913",
            "ammo": 600,
            "damageBase": 592,
            "damageHeadshot": 2257,
            "totalBase": 355200,
            "totalHeadshot": 1354200,
        },
        {
            "weapon": "Thunderbolt",
            "ammo": 80,
            "damageBase": 4320,
            "damageHeadshot": 16470,
            "totalBase": 345600,
            "totalHeadshot": 1317600,
        },
        {
            "weapon": "MX1910",
            "ammo": 192,
            "damageBase": 800,
            "damageHeadshot": 3050,
            "totalBase": 153600,
            "totalHeadshot": 585600,
        },
        {
            "weapon": "Baseball Bat",
            "ammo": 0,
            "damageBase": 5280,
            "damageHeadshot": 20130,
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
        {
            "weapon": "Pioneer's Axe",
            "ammo": 0,
            "damageBase": 5280,
            "damageHeadshot": 20130,
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
    ],
    "skerWeaponsT5": [
        {
            "weapon": "The Plague",
            "ammo": 90,
            "damageBase": 40320,
            "damageHeadshot": 153720,
            "totalBase": 3628800,
            "totalHeadshot": 13834800,
        },
        {
            "weapon": "Double-Barreled Shotgun",
            "ammo": 135,
            "damageBase": 22656,
            "damageHeadshot": 86376,
            "totalBase": 3058560,
            "totalHeadshot": 11660760,
        },
        {
            "weapon": "Sie Regotti",
            "ammo": 630,
            "damageBase": 4384,
            "damageHeadshot": 16714,
            "totalBase": 2761920,
            "totalHeadshot": 10529820,
        },
        {
            "weapon": "RS10",
            "ammo": 108,
            "damageBase": 24768,
            "damageHeadshot": 94428,
            "totalBase": 2674944,
            "totalHeadshot": 10198224,
        },
        {
            "weapon": "God Killer",
            "ammo": 58,
            "damageBase": 35200,
            "damageHeadshot": 134200,
            "totalBase": 2041600,
            "totalHeadshot": 7783600,
        },
        {
            "weapon": "Hunting Rifle",
            "ammo": 225,
            "damageBase": 8000,
            "damageHeadshot": 30500,
            "totalBase": 1800000,
            "totalHeadshot": 6862500,
        },
        {
            "weapon": "Joseph Heavy Automatic",
            "ammo": 655,
            "damageBase": 2400,
            "damageHeadshot": 9150,
            "totalBase": 1572000,
            "totalHeadshot": 5993250,
        },
        {
            "weapon": "MP18A",
            "ammo": 900,
            "damageBase": 1536,
            "damageHeadshot": 5856,
            "totalBase": 1382400,
            "totalHeadshot": 5270400,
        },
        {
            "weapon": "Crossbow",
            "ammo": 68,
            "damageBase": 19200,
            "damageHeadshot": 73200,
            "totalBase": 1305600,
            "totalHeadshot": 4977600,
        },
        {
            "weapon": "Pavlov Avtomat",
            "ammo": 675,
            "damageBase": 1760,
            "damageHeadshot": 6710,
            "totalBase": 1188000,
            "totalHeadshot": 4529250,
        },
        {
            "weapon": "Revolver",
            "ammo": 162,
            "damageBase": 5120,
            "damageHeadshot": 19520,
            "totalBase": 829440,
            "totalHeadshot": 3162240,
        },
        {
            "weapon": "Basil Automatic 1913",
            "ammo": 675,
            "damageBase": 1184,
            "damageHeadshot": 4514,
            "totalBase": 799200,
            "totalHeadshot": 3046950,
        },
        {
            "weapon": "Thunderbolt",
            "ammo": 90,
            "damageBase": 8640,
            "damageHeadshot": 32940,
            "totalBase": 777600,
            "totalHeadshot": 2964600,
        },
        {
            "weapon": "MX1910",
            "ammo": 216,
            "damageBase": 1600,
            "damageHeadshot": 6100,
            "totalBase": 345600,
            "totalHeadshot": 1317600,
        },
        {
            "weapon": "Baseball Bat",
            "ammo": 0,
            "damageBase": "10560",
            "damageHeadshot": "40,260",
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
        {
            "weapon": "Pioneer's Axe",
            "ammo": 0,
            "damageBase": "10560",
            "damageHeadshot": "40,260",
            "totalBase": "0 (&infin;)",
            "totalHeadshot": "0 (&infin;)",
        },
    ],
}

const tableContent = document.getElementById("tableContent");
const tableButtons = document.querySelectorAll("th button");

const createRow = (obj) => {
    const row = document.createElement("tr");
    const objKeys = Object.keys(obj);
    objKeys.map((key) => {
        const cell = document.createElement("td");
        cell.setAttribute("data-attr", key);
        cell.innerHTML = obj[key];
        row.appendChild(cell);
        });
    return row;
};

const getTableContent = (data) => {
    data.map((obj) => {
        const row = createRow(obj);
        tableContent.appendChild(row);
    });
};

const sortData = (data, param, direction = "asc") => {
    tableContent.innerHTML = '';
    const sortedData =
        direction == "asc"
            ? [...data].sort(function (a, b) {
                if (a[param] < b[param]) {
                    return -1;
                }
                if (a[param] > b[param]) {
                  return 1;
                }
                return 0;
            })
            : [...data].sort(function (a, b) {
                if (b[param] < a[param]) {
                    return -1;
                }
                if (b[param] > a[param]) {
                  return 1;
                }
                return 0;
            });
  getTableContent(sortedData);
};

const resetButtons = (event) => {
    [...tableButtons].map((button) => {
        if (button !== event.target) {
            button.removeAttribute("data-dir");
        }
    });
};

  window.addEventListener("load", () => {
    getTableContent(response.skerWeaponsT5);
    let skerTier0 = document.getElementById("skerTier0");
    let skerTier1 = document.getElementById("skerTier1");
    let skerTier2 = document.getElementById("skerTier2");
    let skerTier3 = document.getElementById("skerTier3");
    let skerTier4 = document.getElementById("skerTier4");
    let skerTier5 = document.getElementById("skerTier5");
    let skerTierActive = "skerTier5";
    let skerClass = document.getElementById(skerTierActive);
    [...tableButtons].map((button) => {
            button.addEventListener("click", (e) => {
            skerTier0.addEventListener("click", function(){
                sortData(response.skerWeaponsT0, e.target.id, "desc");
                skerClass.classList.remove("skerActive");
                skerTierActive = "skerTier0";
                skerClass = document.getElementById(skerTierActive);
                skerClass.classList.add("skerActive");
                resetButtons(e);
                document.getElementById("totalHeadshot").setAttribute("data-dir", "asc");
            });
            skerTier1.addEventListener("click", function(){
                sortData(response.skerWeaponsT1, e.target.id, "desc");
                skerClass.classList.remove("skerActive");
                skerTierActive = "skerTier1";
                skerClass = document.getElementById(skerTierActive);
                skerClass.classList.add("skerActive");
                resetButtons(e);
                document.getElementById("totalHeadshot").setAttribute("data-dir", "asc");
            });
            skerTier2.addEventListener("click", function(){
                sortData(response.skerWeaponsT2, e.target.id, "desc");
                skerClass.classList.remove("skerActive");
                skerTierActive = "skerTier2";
                skerClass = document.getElementById(skerTierActive);
                skerClass.classList.add("skerActive");
                resetButtons(e);
                document.getElementById("totalHeadshot").setAttribute("data-dir", "asc");
            });
                skerTier3.addEventListener("click", function(){
                sortData(response.skerWeaponsT3, e.target.id, "desc");
                skerClass.classList.remove("skerActive");
                skerTierActive = "skerTier3";
                skerClass = document.getElementById(skerTierActive);
                skerClass.classList.add("skerActive");
                resetButtons(e);
                document.getElementById("totalHeadshot").setAttribute("data-dir", "asc");
            });
            skerTier4.addEventListener("click", function(){
                sortData(response.skerWeaponsT4, e.target.id, "desc");
                skerClass.classList.remove("skerActive");
                skerTierActive = "skerTier4";
                skerClass = document.getElementById(skerTierActive);
                skerClass.classList.add("skerActive");
                resetButtons(e);
                document.getElementById("totalHeadshot").setAttribute("data-dir", "asc");
            });
            skerTier5.addEventListener("click", function(){
                sortData(response.skerWeaponsT5, e.target.id, "desc");
                skerClass.classList.remove("skerActive");
                skerTierActive = "skerTier5";
                skerClass = document.getElementById(skerTierActive);
                skerClass.classList.add("skerActive");
                resetButtons(e);
                document.getElementById("totalHeadshot").setAttribute("data-dir", "asc");
            });
            if (skerTierActive == "skerTier0") {
                resetButtons(e);
                if (e.target.getAttribute("data-dir") == "desc") {
                    sortData(response.skerWeaponsT0, e.target.id, "desc");
                    e.target.setAttribute("data-dir", "asc");
                } else {
                    sortData(response.skerWeaponsT0, e.target.id, "asc");
                    e.target.setAttribute("data-dir", "desc");
                }
            };
            if (skerTierActive == "skerTier1") {
                resetButtons(e);
                if (e.target.getAttribute("data-dir") == "desc") {
                    sortData(response.skerWeaponsT1, e.target.id, "desc");
                    e.target.setAttribute("data-dir", "asc");
                } else {
                    sortData(response.skerWeaponsT1, e.target.id, "asc");
                    e.target.setAttribute("data-dir", "desc");
                }
            };
            if (skerTierActive == "skerTier2") {
                resetButtons(e);
                if (e.target.getAttribute("data-dir") == "desc") {
                    sortData(response.skerWeaponsT2, e.target.id, "desc");
                    e.target.setAttribute("data-dir", "asc");
                } else {
                    sortData(response.skerWeaponsT2, e.target.id, "asc");
                    e.target.setAttribute("data-dir", "desc");
                }
            };
            if (skerTierActive == "skerTier3") {
                resetButtons(e);
                if (e.target.getAttribute("data-dir") == "desc") {
                    sortData(response.skerWeaponsT3, e.target.id, "desc");
                    e.target.setAttribute("data-dir", "asc");
                  } else {
                    sortData(response.skerWeaponsT3, e.target.id, "asc");
                    e.target.setAttribute("data-dir", "desc");
                }
            };
            if (skerTierActive == "skerTier4") {
                resetButtons(e);
                if (e.target.getAttribute("data-dir") == "desc") {
                    sortData(response.skerWeaponsT4, e.target.id, "desc");
                    e.target.setAttribute("data-dir", "asc");
                } else {
                    sortData(response.skerWeaponsT4, e.target.id, "asc");
                    e.target.setAttribute("data-dir", "desc");
                }
            };
            if (skerTierActive == "skerTier5") {
                resetButtons(e);
                if (e.target.getAttribute("data-dir") == "desc") {
                    sortData(response.skerWeaponsT5, e.target.id, "desc");
                    e.target.setAttribute("data-dir", "asc");
                } else {
                    sortData(response.skerWeaponsT5, e.target.id, "asc");
                    e.target.setAttribute("data-dir", "desc");
                }
            };
        });
    });
    skerTier4.click();
    skerTier5.click();
});