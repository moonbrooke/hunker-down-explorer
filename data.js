const campData = [
    {
        "title": "Hammock Camping Under Bridge",
        "url": "https://www.youtube.com/watch?v=AWMHmASqivM",
        "description": "I had an amazing camping trip! I secretly set up a #hammock under a bridge on a remote road. There was a store close by selling step 2's and a variety of grocery items I used to form a #campingmeal. I slept pretty well, aside from some occasional road noise.",
        "stealth": true,
        "date": "2023/09/22",
        "location": "44.053383911846296, -66.161722815107",
        "city": "Salmon River, NS",
        "note": ""
    },
    {
        "title": "Stealth Camping Behind Sign",
        "url": "https://www.youtube.com/watch?v=lblyg-NOVjE",
        "description": "This was one for the ages! I finally got out to go camping behind a sign. It took quite a while to find the perfect sign, but it was worth it! There was no view from the highway eastbound lanes and very minimal exposure on the westbound lanes. Basic backpack and general gear. I had a hammock, to use as a bivvy in case of rain, but the weather was pretty good.",
        "stealth": true,
        "date": "2020/10/02",
        "location": "53.0176608039331, -112.87689806170151",
        "city": "Salmon River, NS",
        "note": ""
    },
    {
        "title": "Police Station Stealth Camping In Hammock",
        "url": "https://www.youtube.com/watch?v=yMIA6zdUVCA",
        "description": "Well, I finally found my dream police station to camp behind. That was a strange sentence. When we traveled through after buying the school bus beautiful wife noticed a fantastic spot behind the police station. I gathered up my courage and my camping gear and headed into the woods there for a great stealth camping adventure in small-town Alberta.",
        "stealth": true,
        "date": "2021/09/06",
        "location": "53.94948185223092, -113.12309247232461",
        "city": "Redwater, AB",
        "note": ""
    },
    {
        "title": "Stealth Camping Beside Fire Station",
        "url": "https://www.youtube.com/watch?v=OeUXopzBOBc",
        "description": "I brought out my small camo tent and snuck into the woods beside a small fire hall to camp for the night. It was an interesting #camping location with some excitement throughout the night. It was a bit noisy, but it was much better than camping under a bridge. #Hunkerdown!",
        "stealth": true,
        "date": "2023/12/01",
        "location": "49.338892766266824, -124.44130184133331",
        "city": "Qualicum Beach, BC",
        "note": ""
    },
    {
        "title": "Welcome Sign Stealth Camping",
        "url": "https://www.youtube.com/watch?v=dQ9eImcE9cA",
        "description": "I went stealth camping in a small plot of trees behind a welcome sign. I've been trying to camp behind this sign for quite some time and finally, the timing and weather worked out for me! Was a decent night, road noise is expected of course but it made for an interesting night!",
        "stealth": true,
        "date": "2023/04/28",
        "location": "48.90281474019962, -123.72084919855675",
        "city": "Chemainus, BC",
        "note": ""
    },
    {
        "title": "Parking Garage Stealth Camping",
        "url": "https://www.youtube.com/watch?v=hBnlPd__Vg0",
        "description": "I camped for the night hidden in my SUV in a parking garage, or parkade depending on what you call them. I needed to apply for my passport and the lines are notoriously long unless you're there first thing in the morning. Let's be honest, first thing in the morning is not my friend so I decided to camp out to be there bright and early. The garage was quite hot, but the camping was nice and stealthy.",
        "stealth": true,
        "date": "2024/06/07",
        "location": "53.545021870257095, -113.49814503263497",
        "city": "Edmonton, AB",
        "note": ""
    },
    {
        "title": "Disguised Truck Stealth Camping",
        "url": "https://www.youtube.com/watch?v=DYuAxGxH-8E",
        "description": "A makeshift camper disguised as landscaping debris made a great little camping spot for the night. I camped out in a small town by a lake. The camper was just made with 4 pallets, 2 boards, 3 tarps, and some rachet straps. I crawled into the camper from the back of the truck and had a small mattress and some cooking equipment for a quick and easy meal.",
        "stealth": true,
        "date": "2024/08/16",
        "location": "53.67693471104305, -114.35484398041937",
        "city": "Alberta Beach, AB",
        "note": ""
    },
    {
        "title": "Business Park Roundabout Stealth Camping",
        "url": "https://www.youtube.com/watch?v=UTDpgEraPbA",
        "description": "I found another roundabout to camp in!! These are always so fun, and I generally don't like to do the same idea twice but this was TOO tempting. Almost like it was a trap to catch me stealth camping. It was close by to a hotel I stayed at the night before, stones throw from a Cabelas and a Princess Auto. Made some pad Thai and hunkered down for the night on a beautiful autumn evening.",
        "stealth": true,
        "date": "2024/10/28",
        "location": "45.297252297023, -75.94231119063862",
        "city": "Ottawa, ON",
        "note": ""
    },
    {
        "title": "Stealth Camping In Roundabout",
        "url": "https://www.youtube.com/watch?v=OPDvLaXuSHQ",
        "description": "I finally found the perfect roundabout to crawl into and go camping for the night. It was a very stealthy spot, and I've looked long and hard to find one like this. It was a typical night of hiding, drinking beer, and being quiet, but it was exciting as always. Overall a good camping trip, but I did find it a bit noisy of a night so likely wouldn't camp there again.",
        "stealth": true,
        "date": "2022/04/08",
        "location": "48.44346110452918, -123.52007583735924",
        "city": "Langford, BC",
        "note": ""
    },
    {
        "title": "Urban Roadside Stealth Camping",
        "url": "https://www.youtube.com/watch?v=Lwgexah08cg",
        "description": "Beautiful wife found the best sign to camp behind I've ever seen in my life. I headed out to camp behind the welcome to Nanaimo sign and set up my small bivy tent for a night of camping. It was a blast as always, and a very good camping test for the tent.",
        "stealth": true,
        "date": "2022/04/04",
        "location": "49.24228566463035, -124.06463387843944",
        "city": "Lantzville, BC",
        "note": ""
    },
    {
        "title": "Stealth Camping Beside Police Station In SUV",
        "url": "https://www.youtube.com/watch?v=cPiaf5wRaME",
        "description": "I've gotten a lot of requests to try this for a stealth camping trip, so I set up the back of the Hyundai for a stealther. I try out a Canadian MRE for dinner using a flameless ration heater, hunker down and zzz!",
        "stealth": true,
        "date": "2020/05/08",
        "location": "53.53838685439603, -113.60604662151006",
        "city": "Edmonton, AB",
        "note": ""
    },
    {
        "title": "Small Airport Stealth Camping",
        "url": "https://www.youtube.com/watch?v=M8jQdzwjmN8",
        "description": "I found a perfect camping spot in the woods beside the runway of a small airport. It was a stormy night with lots of wind and a bit of rain. I hammock camped in the trees and had a blast. Fortunately there was an airport lounge for me to warm up and dry off in for a bit before I hunkered down for the night. The wind became an issue for cooking so I had sleep for dinner that night.",
        "stealth": true,
        "date": "2025/03/14",
        "location": "49.33782903133404, -124.39794011136314",
        "city": "Qualicum Beach, BC",
        "note": ""
    },
    {
        "title": "Camper Disguised As Pallets",
        "url": "https://www.youtube.com/watch?v=QpO63kVjFb0",
        "description": "We put together a DIY camper on a trailer that looks like a bunch of pallets strapped down. It's all hollow on the inside and I set up a quick camper setup. I camped in for the night in a parking lot beside a strip mall and cooked up some good food. It was a little rainy, but rain makes for good camping sometimes!",
        "stealth": true,
        "date": "2025/05/23",
        "location": "53.54213534824041, -113.8735771515612",
        "city": "Spruce Grove, AB",
        "note": ""
    },
    {
        "title": "Residential Stealth Car Camping In Snow",
        "url": "https://www.youtube.com/watch?v=qpaVu2_WK7s",
        "description": "I got out to do a little bit of car camping during a heavy snowfall warning, it really took me back to the times I lived in a vehicle. Temperatures dropped to -14 Celsius, or 7f. I stayed fairly cozy through the night, but there were some cold moments.",
        "stealth": true,
        "date": "2020/11/20",
        "location": "53.531116661915654, -113.57855666421239",
        "city": "Edmonton, AB",
        "note": "This is the pizza place."
    },
    {
        "title": "Train Wreck Camping",
        "url": "https://www.youtube.com/watch?v=AUSWvSoQfZk",
        "description": "A historic train wreck from the 1950's outside of Whistler B.C. was this week's target for some camping. Not sure if I needed to be stealthy or not, but it never hurts to keep a low profile. Set up camp in a boxcar and had an enjoyable camping adventure!",
        "stealth": true,
        "date": "2022/11/18",
        "location": "50.0814275918263, -123.05548910016091",
        "city": "Whistler, BC",
        "note": ""
    },
    {
        "title": "Camping By Main Rail Line Tracks",
        "url": "https://www.youtube.com/watch?v=GXPy7wgWHsM",
        "description": "Well, not too crazy of a video for this week, we had a mouse invade our bus and we had to set up some traps and take a hotel break for a couple days. Fortunately, I noticed a trail heading right from the hotel to tracks with some ample room to camp! I went down to watch some trains for a bit then grabbed some pizza from town.",
        "stealth": true,
        "date": "2021/06/04",
        "location": "53.40944922318626, -117.56221154273317",
        "city": "Hinton, AB",
        "note": "Not the precise spot, but close enough around here."
    },
    {
        "title": "Stealth Camping In Airport Parking Lot With SUV (Highly Patrolled)",
        "url": "https://www.youtube.com/watch?v=IH69tW3yF-4",
        "description": "Well, for this Thursdays video I did something a little bit different than normal, I ended up heading down to the long term parking at the Edmonton International Airport for a quick stealth camp in the back of the SUV. Idea courtesy of Beautiful Wife! Some very close calls with security sniffing around the car! All in all, another fun night despite having a cold.",
        "stealth": true,
        "date": "2019/12/13",
        "location": "53.30896863642295, -113.5769102501329",
        "city": "Nisku, AB",
        "note": "Not the precise spot, but close enough around here."
    },
    {
        "title": "2 Nights Camping In Highway Median",
        "url": "https://www.youtube.com/watch?v=IzZ6MPxbR-A",
        "description": "I went out stealth camping in a highway median using a hunting blind for a shelter. It was a short walk from town through a rough trail and the town had all the camping supplies I could require for the trip. There was a little rain, a lot of traffic, and as always some good old fashioned camping with the usual awful food I cook.",
        "stealth": true,
        "date": "2026/04/20",
        "location": "49.128306576622926, -123.92944929324125",
        "city": "Nanaimo, BC",
        "note": "Not the precise spot, but close enough around here."
    },
    {
        "title": "Small Town Stealth Camping",
        "url": "https://www.youtube.com/watch?v=BW4zJSxFNto",
        "description": "Well, technically a hamlet, it used to be a village, but perfect for stealth camping. I packed my hammock to a great camp spot behind a ball diamond. Little towns are an excellent opportunity for stealth camping, there aren't the crowds of the big city, but there is the possibility locals will be more vigilant regarding people they don't recognize.",
        "stealth": true,
        "date": "2022/06/10",
        "location": "53.5635944880847, -114.47955573996508",
        "city": "Wabamun, AB",
        "note": "Not the precise spot, but close enough around here."
    },
    {
        "title": "Stealth Camping Beside Hiking Trail",
        "url": "https://www.youtube.com/watch?v=Qhf88k9MRZM",
        "description": "This video is kind of boring, but you never know how the videos will go. We are on a road trip taking the stealth camping to different places around Alberta. We came to Lethbridge for the weather, but it was a difficult city to find any cover for a stealther. I camped under the stars beside a hiking trail with some new gear that turned out to be a little on the cold side.",
        "stealth": true,
        "date": "2021/03/05",
        "location": "49.685589794559355, -112.86172232942731",
        "city": "Lethbridge, AB",
        "note": "Not the precise spot, but close enough around here."
    },
    {
        "title": "Overnight In Remote Cabin",
        "url": "https://www.youtube.com/watch?v=j_uGrUp9ydM",
        "description": "I went 'camping' up a winding mountain road in an #oldcabin. It was available to use on a first-come first-served basis. An amazing little lake and 2 little campsites were just perfect for me for the night. Mosquitoes were horrible, but in the #remotecabin was cozy and mosquito free for most of the night.",
        "stealth": false,
        "date": "2023/06/23",
        "location": "51.73060099803554, -120.22572189538599",
        "city": "Wells Gray Country, BC",
        "note": ""
    },
    {
        "title": "Kayak Urban Stealth Camping On The River",
        "url": "https://www.youtube.com/watch?v=FQZdbA-ikYQ",
        "description": "Well, here we are again with another stealth camping video. A lot of new subscribers since the last video had asked for a bit more stealth camping. I got a $100 inflatable kayak from Walmart and put it to the test in the river. I found a good spot only accessible via the river! More to come in the future.",
        "stealth": true,
        "date": "2019/09/06",
        "location": "53.52662313833788, -113.5567137022582",
        "city": "Edmonton, AB",
        "note": "Not the precise spot, but close enough around here."
    },
    {
        "title": "Stealth Camping In Ducks Unlimited Conservation Area",
        "url": "https://www.youtube.com/watch?v=8I0Il4Y78X8",
        "description": "Well, here we are again. I found a great stealth camping spot with questionable legality. It was a Ducks Unlimited easement shelter for bird watching on a lonely country road. There were no signs prohibiting camping, so I figured I should camp there! Of course, there was the normal trouble, things not going to plan, snow began to fall.",
        "stealth": true,
        "date": "2021/03/25",
        "location": "49.478354252499564, -111.44743950571137",
        "city": "Foremost, AB",
        "note": "The motel where Steve and his wife stay."
    },
    {
        "title": "Heat Wave Yurt Glamping",
        "url": "https://www.youtube.com/watch?v=n4515H2vaOE",
        "description": "I am in the US for a month having the adventure of my life. The only way to stay cool and go 'camping' in Georgia was to rent an air conditioned Yurt. It was my first time in a Yurt and I put together a little video to show what that whole thing is all about. The state parks here rent these out and they come equipped with some basic stuff (beds, seating, lights). Bring your own bedding, food, and cooking supplies.",
        "stealth": false,
        "date": "2024/07/12",
        "location": "33.178457876071704, -84.02047397486659",
        "city": "Jackson, GA",
        "note": "This is the glamping place. Not Steve's actual Yurt."
    },
    {
        "title": "Ferry Terminal Stealth Camping",
        "url": "https://www.youtube.com/watch?v=2A4o6mHXOr0",
        "description": "I camped out for the night in the lineup at a BC Ferries terminal. It proved to be a good place to enjoy the evening with a food truck. If anyone is in Earls Cove please check out Sharon's Grill It (The food truck). I highly recommend it :) Decent camping adventure!",
        "stealth": true,
        "date": "2023/01/13",
        "location": "49.75269857693627, -124.00880127334732",
        "city": "Earls Cove, BC",
        "note": ""
    },
    {
        "title": "Camping In Secret Bridge Fort",
        "url": "https://www.youtube.com/watch?v=pc20TjmKiPw",
        "description": "I built a secret camping fort under a highway overpass bridge and camped out in it for the night. It all went fairly smoothly eventually. It took a couple weeks to get the fort fully built and stocked but when it was done it was amazing. I color matched the paint of the bridge to paint the plywood to disguise my camping activities. We hauled up the fort, set it in place and had a very stealthy camping trip. No campsite required, earplugs optional.",
        "stealth": true,
        "date": "2025/11/24",
        "location": "44.16119510669392, -66.13924633122264",
        "city": "Saint Martin, NS",
        "note": ""
    },
    {
        "title": "Busy Intersection Stealth Camping",
        "url": "https://www.youtube.com/watch?v=My_eWYEOFmE",
        "description": "I crawled into some very sparse bushes beside a busy intersection for a night of stealth camping. Cooked up a quick and hearty dinner and tried to stay warm in temperatures around freezing. It was a fun camping adventure with many amenities nearby. Traffic was busy until quite late, and I packed up my camping gear early in the morning during rush hour.",
        "stealth": true,
        "date": "2025/01/24",
        "location": "48.46057764865947, -123.49708570316793",
        "city": "Langford, BC",
        "note": ""
    },
    {
        "title": "Musician Disguise Stealth Camping",
        "url": "https://www.youtube.com/watch?v=8JngEMxTjJA",
        "description": "I went into the woods in town disguised as a musician for a little bit of good old-fashioned stealth camping. I put all my camping gear in a guitar case and donned the appropriate attire. It was a relaxing evening of camping, cooking, and exploring the nearby amenities. There were some laughs, some beers, and a cozy night curled up in my hammock with the traffic putting me to sleep.",
        "stealth": true,
        "date": "2025/09/19",
        "location": "47.375203808255876, -68.3083395282461",
        "city": "Edmundston, NB",
        "note": ""
    },
];
