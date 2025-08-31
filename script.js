const DAYS = [
  {
    "id": 1,
    "date": "Sun Sep 7",
    "title": "Barcelona arrival and city",
    "steps": [
      {
        "name": "Barcelona El Prat Airport",
        "lat": 41.2974,
        "lng": 2.0833,
        "time": "05:40, 09:20",
        "note": "Arrivals TLV and BOS later"
      },
      {
        "name": "Airbnb, Girona 80, Barcelona",
        "lat": 41.3942,
        "lng": 2.162,
        "time": "11:30, 12:00",
        "note": "Arrive to Airbnb"
      },
      {
        "name": "Rec Comtal 17, Barcelona",
        "lat": 41.3877,
        "lng": 2.1802,
        "time": "13:30, 14:30",
        "note": "Groceries and settle"
      },
      {
        "name": "Dinner, Fismuler, Rec Comtal 17, Barcelona",
        "lat": 41.3877,
        "lng": 2.1802,
        "time": "19:00, 21:30",
        "note": "Dinner at Fismuler"
      },
      {
        "name": "Casino Barcelona, Marina 19",
        "lat": 41.3873,
        "lng": 2.1996,
        "time": "22:00, late",
        "note": "Strolling and drinks"
      }
    ]
  },
  {
    "id": 2,
    "date": "Mon Sep 8",
    "title": "Barcelona day and dinner",
    "steps": [
      {
        "name": "Dinner, Berbena, Minerva 6, Gràcia",
        "lat": 41.4022,
        "lng": 2.1537,
        "time": "19:00, 22:30",
        "note": "Dinner at Berbena"
      },
      {
        "name": "Casino Barcelona, Marina 19",
        "lat": 41.3873,
        "lng": 2.1996,
        "time": "23:00, late",
        "note": "Casino Barcelona"
      }
    ]
  },
  {
    "id": 3,
    "date": "Tue Sep 9",
    "title": "Drive to the Pyrenees and arrive to chalet",
    "steps": [
      {
        "name": "Airbnb, Girona 80, Barcelona",
        "lat": 41.3942,
        "lng": 2.162,
        "time": "10:00",
        "note": "Depart Barcelona"
      },
      {
        "name": "Chalet Casteret, 12 Rue du Pradet, 65170 Guchan",
        "lat": 42.8186,
        "lng": 0.3553,
        "time": "~14:30, 18:00",
        "note": "Via A-2, A-22, N-230, A-138 then D173"
      }
    ]
  },
  {
    "id": 4,
    "date": "Wed Sep 10",
    "title": "Canyoning then chef dinner",
    "steps": [
      {
        "name": "Chalet Casteret, 12 Rue du Pradet, 65170 Guchan",
        "lat": 42.8186,
        "lng": 0.3553,
        "time": "Morning",
        "note": "Start from chalet"
      },
      {
        "name": "Canyoning Saint Lary, Vignec télécabine parking",
        "lat": 42.8189,
        "lng": 0.3225,
        "time": "10:00, 15:00",
        "note": "Canyoning Saint Lary"
      },
      {
        "name": "Chalet Casteret, 12 Rue du Pradet, 65170 Guchan",
        "lat": 42.8186,
        "lng": 0.3553,
        "time": "19:00, 22:30",
        "note": "Chef dinner at chalet"
      }
    ]
  },
  {
    "id": 5,
    "date": "Thu Sep 11",
    "title": "Hiking day",
    "steps": [
      {
        "name": "Chalet Casteret, 12 Rue du Pradet, 65170 Guchan",
        "lat": 42.8186,
        "lng": 0.3553,
        "time": "10:00, 17:00",
        "note": "Hiking near Saint Lary, final track TBD"
      }
    ]
  },
  {
    "id": 6,
    "date": "Fri Sep 12",
    "title": "Rafting and massages",
    "steps": [
      {
        "name": "Chalet Casteret, 12 Rue du Pradet, 65170 Guchan",
        "lat": 42.8186,
        "lng": 0.3553,
        "time": "Morning",
        "note": "Start from chalet"
      },
      {
        "name": "Rafting Pyragua, 2A Route des Artisans, Arreau",
        "lat": 42.9068,
        "lng": 0.366,
        "time": "10:00, 14:00",
        "note": "Rafting on La Neste"
      },
      {
        "name": "Chalet Casteret, 12 Rue du Pradet, 65170 Guchan",
        "lat": 42.8186,
        "lng": 0.3553,
        "time": "16:00, 19:00",
        "note": "Massages at chalet"
      }
    ]
  },
  {
    "id": 7,
    "date": "Sat Sep 13",
    "title": "Mountain activities and departure",
    "steps": [
      {
        "name": "Chalet Casteret, 12 Rue du Pradet, 65170 Guchan",
        "lat": 42.8186,
        "lng": 0.3553,
        "time": "Morning",
        "note": "Pack and depart"
      },
      {
        "name": "Mountain Activities, 16 Rte d'Autun RD 929, Saint Lary",
        "lat": 42.8263,
        "lng": 0.327,
        "time": "10:00, 13:00",
        "note": "Mountain activities"
      },
      {
        "name": "Barcelona El Prat Airport",
        "lat": 41.2974,
        "lng": 2.0833,
        "time": "Evening",
        "note": "Return to BCN Airport for flights"
      }
    ]
  }
];


  {{DATA}}

  let map, markersLayer, router;
  let current = 0;

  function init() {
    map = L.map('map').setView([41.39, 2.17], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    markersLayer = L.layerGroup().addTo(map);

    document.getElementById('prevBtn').addEventListener('click', () => setDay(Math.max(0, current - 1)));
    document.getElementById('nextBtn').addEventListener('click', () => setDay(Math.min(DAYS.length - 1, current + 1)));

    const chips = document.getElementById('dayChips');
    DAYS.forEach((d, i) => {
      const chip = document.createElement('button');
      chip.className = 'chip';
      chip.textContent = d.date;
      chip.addEventListener('click', () => setDay(i));
      chips.appendChild(chip);
    });

    setDay(0);
  }

  function setDay(index) {
    current = index;
    const d = DAYS[index];

    // Update chips
    const chips = document.querySelectorAll('#dayChips .chip');
    chips.forEach((c, i) => c.classList.toggle('active', i === index));

    // Update toolbar
    document.getElementById('dayInfo').textContent = d.date + ' , ' + d.title;

    // Update sidebar
    document.getElementById('itineraryTitle').textContent = 'Itinerary for ' + d.date;
    const list = document.getElementById('itineraryList');
    list.innerHTML = '';
    d.steps.forEach((s, i) => {
      const li = document.createElement('li');
      li.innerHTML = '<div style="font-weight:500;">' + (i + 1) + '. ' + s.name + '</div>' +
                     '<div style="font-size:12px;">' + (s.time || '') + '</div>' +
                     (s.note ? '<div class="muted">' + s.note + '</div>' : '');
      list.appendChild(li);
    });

    // Clear previous markers and router
    markersLayer.clearLayers();
    if (router) {
      map.removeControl(router);
      router = null;
    }

    // Add markers
    const waypoints = d.steps.map(s => L.latLng(s.lat, s.lng));
    d.steps.forEach((s, i) => {
      const m = L.marker([s.lat, s.lng]).bindPopup(
        '<div style="font-weight:600;">' + (i + 1) + '. ' + s.name + '</div>' +
        '<div>' + (s.time || '') + '</div>' +
        (s.note ? '<div style="margin-top:4px; font-size:12px;">' + s.note + '</div>' : '')
      );
      markersLayer.addLayer(m);
    });

    // Draw routes between consecutive waypoints for the day
    if (waypoints.length >= 2) {
      router = L.Routing.control({
        waypoints: waypoints,
        router: L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1' }),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
        routeWhileDragging: false,
        lineOptions: { addWaypoints: false },
        altLineOptions: { styles: [{ opacity: 0.6 }, { opacity: 0.4 }] },
        createMarker: function() { return null; } // we already add markers
      }).addTo(map);
    } else if (waypoints.length === 1) {
      map.setView(waypoints[0], 13);
    }
  }

  window.addEventListener('load', init);
  