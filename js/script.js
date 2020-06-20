"use strict";
let locationCard = `<div class="col mb-4">
<div class="card">
  <img src="" class="card-img-top d-none d-md-block">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-secondary">More info</a>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"></li>
  </ul>
  <div class="card-footer text-muted">
  </div>
</div>
</div>`;
let restaurantCard = `<div class="col mb-4">
<div class="card">
  <img src="" class="card-img-top d-none d-md-block">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-secondary">More info</a>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"></li>
    <li class="list-group-item"></li>
    <li class="list-group-item"><a></a></li>
  </ul>
  <div class="card-footer text-muted">
  </div>
</div>
</div>`;
let eventCard = `<div class="col mb-4">
<div class="card">
  <img class="card-img-top d-none d-md-block">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-secondary">More info</a>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"></li>
    <li class="list-group-item"></li>
  </ul>
  <div class="card-footer text-muted">
  </div>
</div>
</div>`;
let cards = [];
let calledSite = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
function parseElement(html) {
    return new DOMParser().parseFromString(html, 'text/html').body.children[0];
}
class CLocation {
    constructor(title, description, city, zip, address, teaserImg, created) {
        this.title = title;
        this.description = description;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.teaserImg = teaserImg;
        this.created = created;
        cards.push(this);
    }
    display(id) {
        let element = parseElement(locationCard);
        element.getElementsByClassName("card-img-top")[0].setAttribute("src", this.teaserImg);
        element.getElementsByClassName("card-title")[0].innerHTML = this.title;
        element.getElementsByClassName("card-text")[0].innerHTML = this.description;
        element.getElementsByClassName("list-group-item")[0].innerHTML = `${this.address}<br>${this.zip} ${this.city}`;
        element.getElementsByClassName("card-footer")[0].innerHTML = `Created: ${this.created.toLocaleString()}`;
        document.getElementById(id).appendChild(element);
    }
}
class CRestaurant extends CLocation {
    constructor(title, description, city, zip, address, teaserImg, created, phone, website) {
        super(title, description, city, zip, address, teaserImg, created);
        this.phone = phone;
        this.website = website;
    }
    display(id) {
        let element = parseElement(restaurantCard);
        element.getElementsByClassName("card-img-top")[0].setAttribute("src", this.teaserImg);
        element.getElementsByClassName("card-title")[0].innerHTML = this.title;
        element.getElementsByClassName("card-text")[0].innerHTML = this.description;
        element.getElementsByClassName("list-group-item")[0].innerHTML = `${this.address}<br>${this.zip} ${this.city}`;
        element.getElementsByClassName("list-group-item")[1].innerHTML = this.phone;
        element.getElementsByClassName("list-group-item")[2].children[0].innerHTML = this.website;
        element.getElementsByClassName("list-group-item")[2].children[0].setAttribute("href", this.website);
        element.getElementsByClassName("card-footer")[0].innerHTML = `Created: ${this.created.toLocaleString()}`;
        document.getElementById(id).appendChild(element);
    }
}
class CEvent extends CLocation {
    constructor(title, description, city, zip, address, teaserImg, created, eventDate, eventTime) {
        super(title, description, city, zip, address, teaserImg, created);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
    }
    display(id) {
        let element = parseElement(eventCard);
        element.getElementsByClassName("card-img-top")[0].setAttribute("src", this.teaserImg);
        element.getElementsByClassName("card-title")[0].innerHTML = this.title;
        element.getElementsByClassName("card-text")[0].innerHTML = this.description;
        element.getElementsByClassName("list-group-item")[0].innerHTML = `${this.eventDate} @ ${this.eventTime}`;
        element.getElementsByClassName("list-group-item")[1].innerHTML = `${this.address}<br>${this.zip} ${this.city}`;
        element.getElementsByClassName("card-footer")[0].innerHTML = `Created: ${this.created.toLocaleString()}`;
        document.getElementById(id).appendChild(element);
    }
}
new CLocation("Basilica de la Sagrada Familia", "One of Europe's most unconventional churches, this spectacular basilica is the most famous sight in Barcelona. The UNESCO-listed Basilica de la Sagrada Familia stands in the northern part of the city, dominating its surroundings with its 18 spindly towers soaring high above all other monuments. The Basilica of the Sacred Family is also known in Spanish by its official name: Temple Expiatori de la Sagrada Família.", "Barcelona", "08013", "Carrer de Mallorca, 401", "./img/sagrada_familia.jpg", new Date("September 17, 2019 20:24:00"));
new CLocation("Barri Gòtic (Gothic Quarter)", "For 2,000 years, the Gothic Quarter has been the spiritual and secular center of the city. Relics of ancient Roman buildings are still found here, but the Middle Ages are best represented by the historic monuments packed into this quarter. A masterpiece of Gothic architecture, the medieval cathedral stands on Monte Tabor, the highest point in the town center. The Gothic Quarter is where Christopher Columbus was received by the Catholic Monarchs after his first voyage to the New World, and since the 14th and 15th centuries, the city administrations have had their seat here.", "Barcelona", "08002", "Barri Gòtic", "./img/barri_gotic.jpg", new Date("August 7, 2019 19:21:00"));
new CLocation("Casa Mila (La Pedrera)", "In the Eixample district off the elegant boulevard of Passeig de Gràcia, the UNESCO-listed Casa Milà is Antoni Gaudí's most famous secular building. Casa Mila is also affectionately known as \"La Pedrera,\" which translates to \"The Stone Quarry\" because the building resembles an open quarry. Built between 1906 and 1912, this flamboyant avant-garde dwelling looks more like a sculpture than a functional building. Every line of the natural stone facade is curved, with rounded windows and metal balcony railings twining around in plant-like shapes. Even the roof has an undulating shape complemented by the decorative chimneys.", "Barcelona", "08008", "Passeig de Gràcia, 92", "./img/casa_mila.jpg", new Date("April 6, 2019 13:24:00"));
new CLocation("La Rambla: Barcelona's Social Hub", "The heart of Barcelona's social life is found on La Rambla, a broad, tree-shaded avenue that divides the Old Town into two parts. La Rambla stretches from the Plaça de Catalunya, where the beautiful Romanesque 12th-century Convent of Santa Anna stands, all the way down to the port. This wide street, featuring expansive pedestrian sidewalks, is lined with shops, restaurants, and outdoor cafés, making it one of the most popular hangouts in the city.", "Barcelona", "08002", "La Rambla", "./img/la_rambla.jpg", new Date("January 29, 2019 17:23:00"));
new CRestaurant("Dos Palillos", "Albert Raurich has earned a Michelin star for the masterful tasting menus at this small tapas restaurant in El Raval, which blend Japanese ingredients with Spanish panache. Dishes like Szechuan-style jellyfish, Iberian-Cantonese pork jowl, and chicken sashimi (served rare!) might well force you out of your comfort zone, but just go with it. Bring a date or a group of friends—the chummy, convivial vibe works equally well for both.", "Barcelona", "08001", "Carrer d'Elisabets, 9", "./img/dos_palillos.jpg", new Date("March 9, 2019 21:14:00"), "+34 93 304 05 13", "https://www.dospalillos.com/");
new CRestaurant("Hetta Cuisine", "There are two things that drive the menu at this minimally elegant restaurant in Sant Gervasi-Galvany: Scandi influence and heat (or lack thereof). Dishes are cooked at a range of temperatures, from raw to oven-baked to flame-torched. Standouts on the small and seasonally shifting menu include salt-baked onion risotto (rich, decadent, and housed within the onion’s outer layers), marinated egg yolk with parmesan buttermilk, a salty cod served with sweet, thyme-infused tomatoes, and pork feather loin served rare with red wine.", "Barcelona", "08021", "Passatge de Marimon, 5", "./img/hetta_cuisine.jpg", new Date("July 6, 2019 14:24:00"), "+34 932 52 95 94", "http://www.tribuwoki.com/restaurante/hetta/");
new CRestaurant("Hawker 45", "Barcelona's first proper, reputable Asian-fusion joint came on the scene in early 2017, just a few blocks from the Arc de Triomf—and all the hipsters and food pilgrims continue to descend on Hawker 45. They come for chef Laila Bazham’s innovative dishes, which are inspired by her life and travels throughout Southeast Asia and Latin America. (Can’t-miss ones include the Korean fried chicken wings, the Singaporean rice laksa with shrimp and squid, and the spicy fish sambal, also from Singapore.) The menu is designed for sharing, so bring a group of your hungriest pals and order one of everything.", "Barcelona", "08010", "Carrer de Casp, 45", "./img/hawker_45.jpg", new Date("February 28, 2019 11:02:00"), "+34 937 63 83 15", "http://mealkits.hawker45.com/");
new CRestaurant("Bicnic", "From the team behind the fantastic and hugely successful Betlem next door, Bicnic is a trendy, relatively new spot in Dreta de l'Eixample that has quickly established itself as a neighborhood favorite. This food truck-turned-restaurant has a clean, modern design and is divided into two sections, \"fast\" and \"slow.\" If you have more time to kill, opt for the latter: The menu in the slow section, divided into appetizers, starters to share, and main courses, includes the super ravioli in shiitake broth, beef and eel tartare served on roasted bone marrow, and monkfish with grilled green onions and lemon broth.", "Barcelona", "08009", "Carrer de Girona, 68", "./img/bicnic.jpg", new Date("July 17, 2019 19:24:00"), "+34 690 90 46 14", "https://bicnic.com/");
new CEvent("Mobile World Congress Barcelona", "The GSMA MWC series (formally known as Mobile World Congress) is the world’s largest exhibition for the mobile industry, and incorporates a thought-leadership conference featuring prominent executives representing global mobile operators, device manufacturers, technology providers, vendors, and content owners.", "Barcelona", "08004", "Avda. Reina Maria Cristina", "./img/mwc.jpg", new Date("February 27, 2019 20:24:00"), "February 25, 2019", "8:00 a.m.");
new CEvent("Epiphany", "Largely ignored in most countries, the arrival of the three kings (wisemen, magi, geezers…) to the Messiah’s manger is keenly awaited in Spain as this is when Spaniards and Catalans exchange gifts, Christmas style. The eve of the Epiphany (the 5th January) is marked by the arrival of the wise men by boat at Port Vell (usually around 4:30pm). After that, these extravagantly dressed gentlemen set off on the “Calvacada del Reis” – a grand parade of floats replete with acrobats, clowns and elves, from which the kings dish out sweets to local kids. The route normally starts at the lower entrance of Parc de la Ciutadella, running up Carrer de Marques de l’Argentera and Via Laietana.", "Barcelona", "08003", "Parc De la Ciutadella", "./img/epiphany.jpg", new Date("January 12, 2019 14:36:00"), "January 5, 2019", "18:00 p.m.");
new CEvent("Cruilla Festival", "The music never stops in the Catalan capital, especially over summer! Cruilla is the music fest with the broadest appeal in the city, showcasing great artists from every nation, genre and era without prejudice. There’s no pretentious criteria for who comes, just great sounds, meaning even Mystic Meg can’t predict who’s coming next. For example atists who have played over the years include Asian Dub Foundation, Robert Plant, Suede, Iggy & The Stooges, Damon Albarn, Cat Power, Gogol Bordello and M.I.A. As with Primavera Sound, the action takes place at the Parc del Forum, in easy reach from the city centre.", "Barcelona", "08930", "Carrer de la Pau, 12", "./img/cruilla.jpg", new Date("July 17, 2019 19:14:00"), "July 3, 2021", "6:00 p.m.");
new CEvent("Formula One Spanish Grand Prix", "The F1 set-up roars into the region in May each year for the Spanish Grand Prix, which takes place at the Circuit de Catalunya in Montmelo (20kms outside Barcelona). What with qualifiers, engine checks and pretty paddock girls roaming around this becomes a three day event of fuel, flags and Ferraris. Read our article for tickets and travel info on the Spanish Grand Prix for all the practical info you need to know to attend.", "Barcelona", "08160", "Carrer Mas Moreneta", "./img/gp_spain.jpg", new Date("May 16, 2019 09:24:00"), "May 12, 2019", "3:10 p.m.");
switch (calledSite) {
    case "index-asc.html":
        cards.sort(function (a, b) {
            if (a.created < b.created) {
                return -1;
            }
            if (a.created > b.created) {
                return 1;
            }
        });
        break;
    case "index-desc.html":
        cards.sort(function (a, b) {
            if (a.created > b.created) {
                return -1;
            }
            if (a.created < b.created) {
                return 1;
            }
        });
        break;
}
cards.forEach(function (element) {
    let i = 0;
    switch (element.constructor.name) {
        case "CLocation":
            element.display("locations-content");
            break;
        case "CRestaurant":
            if (i++ == 2) {
                element.pushInCarousel;
            }
            element.display("restaurants-content");
            break;
        case "CEvent":
            if (i++ == 3) {
                element.pushInCarousel;
            }
            element.display("events-content");
    }
});
