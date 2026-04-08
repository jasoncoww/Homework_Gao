var locations = {
  ny: {
    name: "New York",
    counties: {
      schenectady: {
        name: "Schenectady County",
        cities: {
          niskayuna: {
            name: "Niskayuna",
            villages: ["Scotia", "Delanson", "Glenville"]
          },
          rotterdam: {
            name: "Rotterdam",
            villages: ["Scotia", "Rotterdam Junction", "Pattersonville"]
          },
          duanesburg: {
            name: "Duanesburg",
            villages: ["Delanson", "Quaker Street", "Duanesburg Center"]
          }
        }
      },
      saratoga: {
        name: "Saratoga County",
        cities: {
          ballston: {
            name: "Ballston",
            villages: ["Ballston Spa", "Round Lake", "Burnt Hills"]
          },
          galway: {
            name: "Galway",
            villages: ["Galway Village", "Galway Lake", "West Galway"]
          },
          halfmoon: {
            name: "Halfmoon",
            villages: ["Waterford", "Mechanicville", "Clifton Park Center"]
          }
        }
      },
      ulster: {
        name: "Ulster County",
        cities: {
          kingston: {
            name: "Kingston",
            villages: ["Woodstock", "Saugerties", "New Paltz"]
          },
          hurley: {
            name: "Hurley",
            villages: ["Hurley Village", "West Hurley", "Marbletown"]
          },
          rosendale: {
            name: "Rosendale",
            villages: ["Rosendale Village", "Binnewater", "Tillson"]
          }
        }
      }
    }
  },
  vt: {
    name: "Vermont",
    counties: {
      chittenden: {
        name: "Chittenden County",
        cities: {
          burlington: {
            name: "Burlington",
            villages: ["Winooski", "Essex Junction", "Shelburne Village"]
          },
          williston: {
            name: "Williston",
            villages: ["Taft Corners", "Williston Village", "Oak Hill"]
          },
          shelburne: {
            name: "Shelburne",
            villages: ["Shelburne Village", "Shelburne Falls", "Bay View"]
          }
        }
      },
      windsor: {
        name: "Windsor County",
        cities: {
          woodstock: {
            name: "Woodstock",
            villages: ["Woodstock Village", "South Woodstock", "Taftsville"]
          },
          hartland: {
            name: "Hartland",
            villages: ["Hartland Village", "North Hartland", "Hartland Four Corners"]
          },
          windsor: {
            name: "Windsor",
            villages: ["Windsor Village", "Brownsville", "Ascutney"]
          }
        }
      },
      franklin: {
        name: "Franklin County",
        cities: {
          st_albans: {
            name: "St. Albans",
            villages: ["St. Albans Village", "Swanton Village", "Fairfax Village"]
          },
          highgate: {
            name: "Highgate",
            villages: ["Highgate Center", "Highgate Springs", "Highgate Falls"]
          },
          richford: {
            name: "Richford",
            villages: ["Richford Village", "North Richford", "East Richford"]
          }
        }
      }
    }
  },
  oh: {
    name: "Ohio",
    counties: {
      cuyahoga: {
        name: "Cuyahoga County",
        cities: {
          cleveland: {
            name: "Cleveland",
            villages: ["Linndale", "Oakwood", "Bratenahl"]
          },
          parma: {
            name: "Parma",
            villages: ["Valley View", "Seven Hills", "Newburgh Heights"]
          },
          lakewood: {
            name: "Lakewood",
            villages: ["North Olmsted", "Rocky River", "Bay Village"]
          }
        }
      },
      franklin: {
        name: "Franklin County",
        cities: {
          columbus: {
            name: "Columbus",
            villages: ["Bexley", "Marble Cliff", "Obetz"]
          },
          worthington: {
            name: "Worthington",
            villages: ["Worthington Village", "Sharon Township", "Linworth"]
          },
          dublin: {
            name: "Dublin",
            villages: ["Plain City", "Hilliard", "Amlin"]
          }
        }
      },
      summit: {
        name: "Summit County",
        cities: {
          akron: {
            name: "Akron",
            villages: ["Lakemore", "Mogadore", "Tallmadge"]
          },
          cuyahoga_falls: {
            name: "Cuyahoga Falls",
            villages: ["Silver Lake", "Boston Heights", "Peninsula"]
          },
          barberton: {
            name: "Barberton",
            villages: ["Norton", "Coventry Township", "Clinton"]
          }
        }
      }
    }
  }
};

// Resets a dropdown to its placeholder and disables it
function resetSelect(id, placeholder) {
  var sel = document.getElementById(id);
  sel.innerHTML = "<option value=''>" + placeholder + "</option>";
  sel.disabled = true;
}

// Called when the user picks a state
function updateCounties() {
  var stateKey = document.getElementById("state-select").value;

  // Reset everything below state
  resetSelect("county-select", "-- select a county --");
  resetSelect("city-select", "-- select a city --");
  resetSelect("village-select", "-- select a village --");
  document.getElementById("result-box").style.display = "none";

  if (stateKey === "") return;

  var counties = locations[stateKey].counties;
  var countySelect = document.getElementById("county-select");
  countySelect.disabled = false;

  for (var key in counties) {
    var opt = document.createElement("option");
    opt.value = key;
    opt.text = counties[key].name;
    countySelect.appendChild(opt);
  }
}

// Called when the user picks a county
function updateCities() {
  var stateKey = document.getElementById("state-select").value;
  var countyKey = document.getElementById("county-select").value;

  resetSelect("city-select", "-- select a city --");
  resetSelect("village-select", "-- select a village --");
  document.getElementById("result-box").style.display = "none";

  if (countyKey === "") return;

  var cities = locations[stateKey].counties[countyKey].cities;
  var citySelect = document.getElementById("city-select");
  citySelect.disabled = false;

  for (var key in cities) {
    var opt = document.createElement("option");
    opt.value = key;
    opt.text = cities[key].name;
    citySelect.appendChild(opt);
  }
}

// Called when the user picks a city
function updateVillages() {
  var stateKey = document.getElementById("state-select").value;
  var countyKey = document.getElementById("county-select").value;
  var cityKey = document.getElementById("city-select").value;

  resetSelect("village-select", "-- select a village --");
  document.getElementById("result-box").style.display = "none";

  if (cityKey === "") return;

  var villages = locations[stateKey].counties[countyKey].cities[cityKey].villages;
  var villageSelect = document.getElementById("village-select");
  villageSelect.disabled = false;

  for (var i = 0; i < villages.length; i++) {
    var opt = document.createElement("option");
    opt.value = villages[i];
    opt.text = villages[i];
    villageSelect.appendChild(opt);
  }
}

// Called when the user picks a village — shows the result summary
function showResult() {
  var stateKey = document.getElementById("state-select").value;
  var countyKey = document.getElementById("county-select").value;
  var cityKey = document.getElementById("city-select").value;
  var village = document.getElementById("village-select").value;

  if (village === "") {
    document.getElementById("result-box").style.display = "none";
    return;
  }

  var stateName = locations[stateKey].name;
  var countyName = locations[stateKey].counties[countyKey].name;
  var cityName = locations[stateKey].counties[countyKey].cities[cityKey].name;

  document.getElementById("result-text").innerHTML =
    "<span>" + village + "</span> is a village in " +
    "<span>" + cityName + "</span>, " +
    "<span>" + countyName + "</span>, " +
    "<span>" + stateName + "</span>.";

  document.getElementById("result-box").style.display = "block";
}

// Attach event listeners after the page loads
document.getElementById("state-select").addEventListener("change", updateCounties);
document.getElementById("county-select").addEventListener("change", updateCities);
document.getElementById("city-select").addEventListener("change", updateVillages);
document.getElementById("village-select").addEventListener("change", showResult);