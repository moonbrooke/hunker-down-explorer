const campData = [
    {
        "title": "Hammock Camping Under Bridge",
        "video_id": "AWMHmASqivM",
        "description": "I had an amazing camping trip! I secretly set up a #hammock under a bridge on a remote road. There was a store close by selling step 2's and a variety of grocery items I used to form a #campingmeal. I slept pretty well, aside from some occasional road noise.",
        "stealth": true,
        "date": "2023/09/22",
        "location": "44.053383911846296, -66.161722815107",
        "city": "Salmon River, NS",
        "note": ""
    },
    {
        "title": "Stealth Camping Behind Sign",
        "video_id": "lblyg-NOVjE",
        "description": "This was one for the ages! I finally got out to go camping behind a sign. It took quite a while to find the perfect sign, but it was worth it! There was no view from the highway eastbound lanes and very minimal exposure on the westbound lanes. Basic backpack and general gear. I had a hammock, to use as a bivvy in case of rain, but the weather was pretty good.",
        "stealth": true,
        "date": "2020/10/02",
        "location": "53.0176608039331, -112.87689806170151",
        "city": "Camrose, AB",
        "note": ""
    },
    {
        "title": "Police Station Stealth Camping In Hammock",
        "video_id": "yMIA6zdUVCA",
        "description": "Well, I finally found my dream police station to camp behind. That was a strange sentence. When we traveled through after buying the school bus beautiful wife noticed a fantastic spot behind the police station. I gathered up my courage and my camping gear and headed into the woods there for a great stealth camping adventure in small-town Alberta.",
        "stealth": true,
        "date": "2021/09/06",
        "location": "53.94948185223092, -113.12309247232461",
        "city": "Redwater, AB",
        "note": ""
    },
    {
        "title": "Stealth Camping Beside Fire Station",
        "video_id": "OeUXopzBOBc",
        "description": "I brought out my small camo tent and snuck into the woods beside a small fire hall to camp for the night. It was an interesting #camping location with some excitement throughout the night. It was a bit noisy, but it was much better than camping under a bridge. #Hunkerdown!",
        "stealth": true,
        "date": "2023/12/01",
        "location": "49.338892766266824, -124.44130184133331",
        "city": "Qualicum Beach, BC",
        "note": ""
    },
    {
        "title": "Welcome Sign Stealth Camping",
        "video_id": "dQ9eImcE9cA",
        "description": "I went stealth camping in a small plot of trees behind a welcome sign. I've been trying to camp behind this sign for quite some time and finally, the timing and weather worked out for me! Was a decent night, road noise is expected of course but it made for an interesting night!",
        "stealth": true,
        "date": "2023/04/28",
        "location": "48.90281474019962, -123.72084919855675",
        "city": "Chemainus, BC",
        "note": ""
    },
    {
        "title": "Parking Garage Stealth Camping",
        "video_id": "hBnlPd__Vg0",
        "description": "I camped for the night hidden in my SUV in a parking garage, or parkade depending on what you call them. I needed to apply for my passport and the lines are notoriously long unless you're there first thing in the morning. Let's be honest, first thing in the morning is not my friend so I decided to camp out to be there bright and early. The garage was quite hot, but the camping was nice and stealthy.",
        "stealth": true,
        "date": "2024/06/07",
        "location": "53.545021870257095, -113.49814503263497",
        "city": "Edmonton, AB",
        "note": ""
    },
    {
        "title": "Disguised Truck Stealth Camping",
        "video_id": "DYuAxGxH-8E",
        "description": "A makeshift camper disguised as landscaping debris made a great little camping spot for the night. I camped out in a small town by a lake. The camper was just made with 4 pallets, 2 boards, 3 tarps, and some rachet straps. I crawled into the camper from the back of the truck and had a small mattress and some cooking equipment for a quick and easy meal.",
        "stealth": true,
        "date": "2024/08/16",
        "location": "53.67693471104305, -114.35484398041937",
        "city": "Alberta Beach, AB",
        "note": ""
    },
    {
        "title": "Business Park Roundabout Stealth Camping",
        "video_id": "UTDpgEraPbA",
        "description": "I found another roundabout to camp in!! These are always so fun, and I generally don't like to do the same idea twice but this was TOO tempting. Almost like it was a trap to catch me stealth camping. It was close by to a hotel I stayed at the night before, stones throw from a Cabelas and a Princess Auto. Made some pad Thai and hunkered down for the night on a beautiful autumn evening.",
        "stealth": true,
        "date": "2024/10/28",
        "location": "45.297252297023, -75.94231119063862",
        "city": "Ottawa, ON",
        "note": ""
    },
    {
        "title": "Stealth Camping In Roundabout",
        "video_id": "OPDvLaXuSHQ",
        "description": "I finally found the perfect roundabout to crawl into and go camping for the night. It was a very stealthy spot, and I've looked long and hard to find one like this. It was a typical night of hiding, drinking beer, and being quiet, but it was exciting as always. Overall a good camping trip, but I did find it a bit noisy of a night so likely wouldn't camp there again.",
        "stealth": true,
        "date": "2022/04/08",
        "location": "48.44346110452918, -123.52007583735924",
        "city": "Langford, BC",
        "note": ""
    },
    {
        "title": "Urban Roadside Stealth Camping",
        "video_id": "Lwgexah08cg",
        "description": "Beautiful wife found the best sign to camp behind I've ever seen in my life. I headed out to camp behind the welcome to Nanaimo sign and set up my small bivy tent for a night of camping. It was a blast as always, and a very good camping test for the tent.",
        "stealth": true,
        "date": "2022/04/04",
        "location": "49.24228566463035, -124.06463387843944",
        "city": "Lantzville, BC",
        "note": ""
    },
    {
        "title": "Stealth Camping Beside Police Station In SUV",
        "video_id": "cPiaf5wRaME",
        "description": "I've gotten a lot of requests to try this for a stealth camping trip, so I set up the back of the Hyundai for a stealther. I try out a Canadian MRE for dinner using a flameless ration heater, hunker down and zzz!",
        "stealth": true,
        "date": "2020/05/08",
        "location": "53.53838685439603, -113.60604662151006",
        "city": "Edmonton, AB",
        "note": ""
    },
    {
        "title": "Small Airport Stealth Camping",
        "video_id": "M8jQdzwjmN8",
        "description": "I found a perfect camping spot in the woods beside the runway of a small airport. It was a stormy night with lots of wind and a bit of rain. I hammock camped in the trees and had a blast. Fortunately there was an airport lounge for me to warm up and dry off in for a bit before I hunkered down for the night. The wind became an issue for cooking so I had sleep for dinner that night.",
        "stealth": true,
        "date": "2025/03/14",
        "location": "49.33782903133404, -124.39794011136314",
        "city": "Qualicum Beach, BC",
        "note": ""
    },
    {
        "title": "Camper Disguised As Pallets",
        "video_id": "QpO63kVjFb0",
        "description": "We put together a DIY camper on a trailer that looks like a bunch of pallets strapped down. It's all hollow on the inside and I set up a quick camper setup. I camped in for the night in a parking lot beside a strip mall and cooked up some good food. It was a little rainy, but rain makes for good camping sometimes!",
        "stealth": true,
        "date": "2025/05/23",
        "location": "53.54213534824041, -113.8735771515612",
        "city": "Spruce Grove, AB",
        "note": ""
    },
    {
        "title": "Residential Stealth Car Camping In Snow",
        "video_id": "qpaVu2_WK7s",
        "description": "I got out to do a little bit of car camping during a heavy snowfall warning, it really took me back to the times I lived in a vehicle. Temperatures dropped to -14 Celsius, or 7f. I stayed fairly cozy through the night, but there were some cold moments.",
        "stealth": true,
        "date": "2020/11/20",
        "location": "53.531116661915654, -113.57855666421239",
        "city": "Edmonton, AB",
        "note": "This is the place where he gets the pizza."
    },
    {
        "title": "Train Wreck Camping",
        "video_id": "AUSWvSoQfZk",
        "description": "A historic train wreck from the 1950's outside of Whistler B.C. was this week's target for some camping. Not sure if I needed to be stealthy or not, but it never hurts to keep a low profile. Set up camp in a boxcar and had an enjoyable camping adventure!",
        "stealth": true,
        "date": "2022/11/18",
        "location": "50.0814275918263, -123.05548910016091",
        "city": "Whistler, BC",
        "note": ""
    },
    {
        "title": "Camping By Main Rail Line Tracks",
        "video_id": "GXPy7wgWHsM",
        "description": "Well, not too crazy of a video for this week, we had a mouse invade our bus and we had to set up some traps and take a hotel break for a couple days. Fortunately, I noticed a trail heading right from the hotel to tracks with some ample room to camp! I went down to watch some trains for a bit then grabbed some pizza from town.",
        "stealth": true,
        "date": "2021/06/04",
        "location": "53.40944922318626, -117.56221154273317",
        "city": "Hinton, AB",
        "note": "Might not be the exact spot, but it's around this area."
    },
    {
        "title": "Stealth Camping In Airport Parking Lot With SUV (Highly Patrolled)",
        "video_id": "IH69tW3yF-4",
        "description": "Well, for this Thursdays video I did something a little bit different than normal, I ended up heading down to the long term parking at the Edmonton International Airport for a quick stealth camp in the back of the SUV. Idea courtesy of Beautiful Wife! Some very close calls with security sniffing around the car! All in all, another fun night despite having a cold.",
        "stealth": true,
        "date": "2019/12/13",
        "location": "53.30896863642295, -113.5769102501329",
        "city": "Nisku, AB",
        "note": "Might not be the exact spot, but it's around this area."
    },
    {
        "title": "2 Nights Camping In Highway Median",
        "video_id": "IzZ6MPxbR-A",
        "description": "I went out stealth camping in a highway median using a hunting blind for a shelter. It was a short walk from town through a rough trail and the town had all the camping supplies I could require for the trip. There was a little rain, a lot of traffic, and as always some good old fashioned camping with the usual awful food I cook.",
        "stealth": true,
        "date": "2026/04/20",
        "location": "49.128306576622926, -123.92944929324125",
        "city": "Nanaimo, BC",
        "note": "Might not be the exact spot, but it's around this area."
    },
    {
        "title": "Small Town Stealth Camping",
        "video_id": "BW4zJSxFNto",
        "description": "Well, technically a hamlet, it used to be a village, but perfect for stealth camping. I packed my hammock to a great camp spot behind a ball diamond. Little towns are an excellent opportunity for stealth camping, there aren't the crowds of the big city, but there is the possibility locals will be more vigilant regarding people they don't recognize.",
        "stealth": true,
        "date": "2022/06/10",
        "location": "53.5635944880847, -114.47955573996508",
        "city": "Wabamun, AB",
        "note": "Might not be the exact spot, but it's around this area."
    },
    {
        "title": "Stealth Camping Beside Hiking Trail",
        "video_id": "Qhf88k9MRZM",
        "description": "This video is kind of boring, but you never know how the videos will go. We are on a road trip taking the stealth camping to different places around Alberta. We came to Lethbridge for the weather, but it was a difficult city to find any cover for a stealther. I camped under the stars beside a hiking trail with some new gear that turned out to be a little on the cold side.",
        "stealth": true,
        "date": "2021/03/05",
        "location": "49.685589794559355, -112.86172232942731",
        "city": "Lethbridge, AB",
        "note": "Might not be the exact spot, but it's around this area."
    },
    {
        "title": "Overnight In Remote Cabin",
        "video_id": "j_uGrUp9ydM",
        "description": "I went 'camping' up a winding mountain road in an #oldcabin. It was available to use on a first-come first-served basis. An amazing little lake and 2 little campsites were just perfect for me for the night. Mosquitoes were horrible, but in the #remotecabin was cozy and mosquito free for most of the night.",
        "stealth": false,
        "date": "2023/06/23",
        "location": "51.73060099803554, -120.22572189538599",
        "city": "Wells Gray Country, BC",
        "note": ""
    },
    {
        "title": "Kayak Urban Stealth Camping On The River",
        "video_id": "FQZdbA-ikYQ",
        "description": "Well, here we are again with another stealth camping video. A lot of new subscribers since the last video had asked for a bit more stealth camping. I got a $100 inflatable kayak from Walmart and put it to the test in the river. I found a good spot only accessible via the river! More to come in the future.",
        "stealth": true,
        "date": "2019/09/06",
        "location": "53.52662313833788, -113.5567137022582",
        "city": "Edmonton, AB",
        "note": "Might not be the exact spot, but it's around this area."
    },
    {
        "title": "Stealth Camping In Ducks Unlimited Conservation Area",
        "video_id": "8I0Il4Y78X8",
        "description": "Well, here we are again. I found a great stealth camping spot with questionable legality. It was a Ducks Unlimited easement shelter for bird watching on a lonely country road. There were no signs prohibiting camping, so I figured I should camp there! Of course, there was the normal trouble, things not going to plan, snow began to fall.",
        "stealth": true,
        "date": "2021/03/25",
        "location": "49.478354252499564, -111.44743950571137",
        "city": "Foremost, AB",
        "note": "This is the motel shown in the intro where Steve and his wife stay."
    },
    {
        "title": "Heat Wave Yurt Glamping",
        "video_id": "n4515H2vaOE",
        "description": "I am in the US for a month having the adventure of my life. The only way to stay cool and go 'camping' in Georgia was to rent an air conditioned Yurt. It was my first time in a Yurt and I put together a little video to show what that whole thing is all about. The state parks here rent these out and they come equipped with some basic stuff (beds, seating, lights). Bring your own bedding, food, and cooking supplies.",
        "stealth": false,
        "date": "2024/07/12",
        "location": "33.178457876071704, -84.02047397486659",
        "city": "Jackson, GA",
        "note": "This is the glamping place. Not Steve's actual Yurt."
    },
    {
        "title": "Ferry Terminal Stealth Camping",
        "video_id": "2A4o6mHXOr0",
        "description": "I camped out for the night in the lineup at a BC Ferries terminal. It proved to be a good place to enjoy the evening with a food truck. If anyone is in Earls Cove please check out Sharon's Grill It (The food truck). I highly recommend it :) Decent camping adventure!",
        "stealth": true,
        "date": "2023/01/13",
        "location": "49.75269857693627, -124.00880127334732",
        "city": "Earls Cove, BC",
        "note": ""
    },
    {
        "title": "Camping In Secret Bridge Fort",
        "video_id": "pc20TjmKiPw",
        "description": "I built a secret camping fort under a highway overpass bridge and camped out in it for the night. It all went fairly smoothly eventually. It took a couple weeks to get the fort fully built and stocked but when it was done it was amazing. I color matched the paint of the bridge to paint the plywood to disguise my camping activities. We hauled up the fort, set it in place and had a very stealthy camping trip. No campsite required, earplugs optional.",
        "stealth": true,
        "date": "2025/11/24",
        "location": "44.16119510669392, -66.13924633122264",
        "city": "Saint Martin, NS",
        "note": ""
    },
    {
        "title": "Busy Intersection Stealth Camping",
        "video_id": "My_eWYEOFmE",
        "description": "I crawled into some very sparse bushes beside a busy intersection for a night of stealth camping. Cooked up a quick and hearty dinner and tried to stay warm in temperatures around freezing. It was a fun camping adventure with many amenities nearby. Traffic was busy until quite late, and I packed up my camping gear early in the morning during rush hour.",
        "stealth": true,
        "date": "2025/01/24",
        "location": "48.46057764865947, -123.49708570316793",
        "city": "Langford, BC",
        "note": ""
    },
    {
        "title": "Musician Disguise Stealth Camping",
        "video_id": "8JngEMxTjJA",
        "description": "I went into the woods in town disguised as a musician for a little bit of good old-fashioned stealth camping. I put all my camping gear in a guitar case and donned the appropriate attire. It was a relaxing evening of camping, cooking, and exploring the nearby amenities. There were some laughs, some beers, and a cozy night curled up in my hammock with the traffic putting me to sleep.",
        "stealth": true,
        "date": "2025/09/19",
        "location": "47.375203808255876, -68.3083395282461",
        "city": "Edmundston, NB",
        "note": ""
    },
    {
        "title": "Luxury U-Haul Camping",
        "video_id": "vqU7-ZEbpiE",
        "description": "The perfect camping opportunity presented itself with a U-Haul rental depot directly across from a campground! It just took a quick trip to Canadian Tire and a thrift store to get the van ready for camping and I was all set. It turned out to be a surprisingly appropriate vehicle to camp in for the night!",
        "stealth": false,
        "date": "2023/04/14",
        "location": "48.46205431611329, -123.5617658642171",
        "city": "Victoria, BC",
        "note": "This is the campground he's staying at."
    },
    {
        "title": "Stealth Camping Behind Billboard",
        "video_id": "RTt4O8q0acI",
        "description": "Things finally fell into place and I found my dream stealth camping billboard. I've been searching for years and finally found the perfect one to camp behind. I made it back from the ill-fated trip to the coast, I only got half way there before the floods washed out all the highways connecting the interior to the coast. I will have to make another camping trip as soon as things are back to normal and roads are reopened.",
        "stealth": true,
        "date": "2021/12/03",
        "location": "53.381570830370045, -117.62344186676476",
        "city": "Hinton, AB",
        "note": ""
    },
    {
        "title": "DIY Bike Trailer Camping",
        "video_id": "3c8c9QEM8AY",
        "description": "My friends and I built a tiny camper that can be pulled by an e-bike and I took it out camping. The total build weighs approximately 160 pounds and I pulled it with an off the shelf 250 watt bike. Many improvements to come but this was a first test camping trip for it.",
        "stealth": false,
        "date": "2024/05/17",
        "location": "53.5662296414073, -114.4563124446957",
        "city": "Wabamun, AB",
        "note": "This is the campground he's staying at."
    },
    {
        "title": "DIY E-Bike Stealth Camping",
        "video_id": "_QJbgUxNnRg",
        "description": "I picked up an electric bike conversion kit on amazon and slapped it on an old mountain bike with a trailer to try it out for stealth camping. There was a little rain, a few mishaps, but a bad day camping is better than a good day at work. Big potential for stealth camping transportation to get into the camping spots I can't access with a vehicle.",
        "stealth": true,
        "date": "2022/06/24",
        "location": "53.71490262483156, -114.65745564675949",
        "city": "Silver Sands, AB",
        "note": ""
    },
    {
        "title": "Camping On Abandoned Highway",
        "video_id": "S0EykVi_2e0",
        "description": "I went camping with an e-bike to access an old stretch of #abandoned #highway. The highway was straightened and made wider to go around small towns and that left the perfect spot to sneak into camp. Defiantly an acceptable spot for a quick overnight camping trip on bike!",
        "stealth": false,
        "date": "2023/09/15",
        "location": "44.16761697818376, -64.64252649645586",
        "city": "Charleston, NS",
        "note": "Might not be the exact spot, but it's around this area."
    },
    {
        "title": "Secret Seaside Cabin Overnight",
        "video_id": "o0csl_J6IUU",
        "description": "I was lucky enough to hear about this secret cabin from Way of the Roads, you can check out their Channel here: @wayoftheroads. It took a total of 8 hours of driving, much of it on remote mountain logging roads, then a final hike out to the most remote secret cabin I've ever seen. It was a cozy night with a wood stove, waves crashing on the beach and some delicious food.",
        "stealth": true,
        "date": "2023/12/08",
        "location": "50.60218093483054, -128.26989516087798",
        "city": "Mount Waddington B, BC",
        "note": "Might not be the exact spot, but it's around this area. The cabin is located within Cape Palmerston area."
    },
    {
        "title": "Camping In Abandoned Cold War Nuclear Bunker",
        "video_id": "RNGgcrYsgo0",
        "description": "For this week's camping trip we took a drive down to the Heart Creek Bunker near Canmore Alberta. This was a Cold War-era bunker built around 1969. It was built by a private company planning to store documents in case of a nuclear attack. It was never fully completed and remains not far off the Trans Canada Trail. It was a great place to camp for the night without needing to bring a shelter.",
        "stealth": true,
        "date": "2022/01/17",
        "location": "51.04648771987874, -115.18832749186282",
        "city": "Canmore, AB",
        "note": ""
    },
    {
        "title": "No Shelter Thunder Storm Stealth Camping",
        "video_id": "dhHyftzgrGY",
        "description": "Things didn't quite go to plan on this trip, the weather forecast was severely off! I planned a nice relaxing simple stealth camping trip in the city. The forecast for my camping night called for just a few sprinkles and then a quiet but cold night. The skies opened up at about 10 and the hail and thunder began. The night was an adventure, I got soaked, but it was a blast.",
        "stealth": true,
        "date": "2021/09/20",
        "location": "53.40382399580919, -113.5418002302112",
        "city": "Edmonton, AB",
        "note": ""
    },
    {
        "title": "Rest Area Tailgate Camping",
        "video_id": "jAy8N3ilRmg",
        "description": "I went looking for a unique place to camp and the best I found was a highway rest area. Simple but effective overnighter, the tarp 'tent' on the back of the SUV added much-needed room to a small space.",
        "stealth": false,
        "date": "2022/07/15",
        "location": "53.239008882449774, -117.79479444975067",
        "city": "Brule, AB",
        "note": ""
    },
    {
        "title": "Coffee Shop Stealth Camping",
        "video_id": "GR1ob5Gt_6w",
        "description": "I crawled behind a Tim Hortons drive-thru for an action-filled night of camping without being caught. Fantastic camping place out of view from the restaurant and drive-thru! A storm blew through but I was cozy in my camping hammock. A delicious meal and lots of hunkering down were had.",
        "stealth": true,
        "date": "2025/10/24",
        "location": "43.77744108479217, -65.34080100960671",
        "city": "Shelburne, NS",
        "note": ""
    },
    {
        "title": "Blatant Stealth Camping Under Tree",
        "video_id": "1NGa_Xt77xU",
        "description": "I finally got back out to do a night of stealth camping in a very exposed spot. There was heavy traffic and very minimal cover, but I managed to camp underneath two trees for the night and remained hidden from view. It's still winter so it was a bit chilly, but sitting still really got me feeling cold. It was a fun trip nonetheless! Once I crawled into my sleeping bag it got quite warm and aside from the traffic noise and bumpy ground it was a great sleep!",
        "stealth": true,
        "date": "2024/02/23",
        "location": "54.116700003649996, -115.64754529270392",
        "city": "Whitecourt, AB",
        "note": ""
    },
    {
        "title": "Dump Truck Stealth Camping",
        "video_id": "2vQazcz-opg",
        "description": "I got my hands on a dump truck for the night and crawled in the back for some camping. I set up a tarp and my sleeping bag in the back of the truck and brought security cameras to keep an eye on things outside. There was a beautiful view and a wonderful sky full of stars to camp under. Who needs a campsite when you can just crawl into a dump truck!",
        "stealth": true,
        "date": "2025/01/31",
        "location": "48.41262975595661, -123.48363671430937",
        "city": "Colwood, BC",
        "note": ""
    },
    {
        "title": "Simple Car Camping",
        "video_id": "rm6jEH93RbM",
        "description": "To make camping life easier on the road I've set up my car to have a half bunk in the back with a small table (shoe organizing rack) to use as a desk and table to put my laptop on. I have a 100 amp hour lithium iron phosphate battery to provide me with enough power to run a coffee maker and lighting. My bed is leveled out with some pine boards and shims so I can sleep level. The whole camping setup can be removed in minutes to return the car to normal.",
        "stealth": false,
        "date": "2024/01/19",
        "location": "49.96563023441148, -125.58078124151291",
        "city": "Quinsam, BC",
        "note": "This is the campground he's staying at."
    },
    {
        "title": "Donation Bin Stealth Camping",
        "video_id": "frXdtNI3Ylg",
        "description": "Rest In Peace Mom, This video is for you. It's been a tough month and a half, but it feels good to get back out and do some camping. For my return video I've found a bank of clothing donation bins that turned out to be the perfect place for a little #stealthcamping. I'm still in #NovaScotia for a bit longer and will be getting much, much more camping done. Stay tuned my friends!",
        "stealth": true,
        "date": "2023/09/08",
        "location": "43.84579416439893, -66.11117018169583",
        "city": "Yarmouth, NS",
        "note": ""
    },
    {
        "title": "McDonalds Drive-Thru Stealth Camping",
        "video_id": "GyVFg80Z2H8",
        "description": "I stealth camped behind a #McDonalds drive through last night! I have been looking for a camping spot like this for years. I wanted to do a drive-thru but for some reason (probably safety) they seem to always be clear around with no hiding spots. After years of searching and looking at every Google satellite view, I could find I found my dream McDonalds #camping spot.",
        "stealth": true,
        "date": "2023/10/01",
        "location": "46.50259609254467, -80.95810397634634",
        "city": "Sudbury, ON",
        "note": ""
    },
    {
        "title": "River Camping Under Highway Bridge",
        "video_id": "fStFbNPqenU",
        "description": "I found a great camping spot underneath a highway bridge. A beautiful river ran right beside the campsite and was the perfect place to hunker down and camp for the night. Some highway noise made it hit and miss overnight, but the white noise of the river made camping far more enjoyable than expected!",
        "stealth": false,
        "date": "2023/03/24",
        "location": "49.67980646738036, -125.0653419814418",
        "city": "Courtenay, BC",
        "note": ""
    },
    {
        "title": "Highway Scale Stealth Camping",
        "video_id": "UvNlpeOsCpI",
        "description": "I stealth camped at a commercial vehicle inspection station and weigh scale along the side of the highway. There was ample tree cover and plenty of spots to set up camp for the night. The camping was acceptable considering the location. As always it's not quite a camping trip without something going wrong.",
        "stealth": true,
        "date": "2023/02/24",
        "location": "49.29585917799101, -124.25645092574364",
        "city": "Parksville, BC",
        "note": ""
    },
    {
        "title": "Abandoned Rail Stealth Camping",
        "video_id": "Wh4uUodS40E",
        "description": "I headed down an abandoned #rail line for some stealth camping. I hoped to find a nice little spot along the tracks and fortune was on my side. Perhaps a bit too stealthy of a #camping spot as I would say there was about a 0% chance of anyone finding me. Perhaps not a nail-biting night, but any night outdoors is always good.",
        "stealth": true,
        "date": "2023/05/05",
        "location": "48.97244637758702, -123.79434137229637",
        "city": "Ladysmith, BC",
        "note": ""
    },
    {
        "title": "Camping On Canada-U.S. Border",
        "video_id": "AaNgdIbCRe0",
        "description": "To celebrate 1 Million subscribers I went out to camp on the Canada/U.S. border with Crazy Neighbor. There was a trail going right to the border from the campground and plenty of stealthy camping spots around the border. We ended up getting a little more extreme than originally planned.",
        "stealth": true,
        "date": "2022/08/19",
        "location": "48.99800183153532, -113.46080357982258",
        "city": "Carway, AB",
        "note": ""
    },
    {
        "title": "Camping On My Old Beach 'Home'",
        "video_id": "cBGdc2-G_6I",
        "description": "I got back to do a night of camping at the place I lived for years. The campground was kind of abandoned for a year or so and I parked my RV there for ages for free. Some of this adventure was filmed for an old Boondocking documentary I filmed. Truly a beautiful campground and my favorite place on earth.",
        "stealth": false,
        "date": "2022/04/29",
        "location": "48.42095706311002, -124.05389622401879",
        "city": "Jordan River, BC",
        "note": ""
    },
    {
        "title": "Abandoned Power Plant Stealth Camping",
        "video_id": "jnJLkyyfR9Q",
        "description": "This old hydroelectric generating station made a perfect camping spot for the night. Crazy Neighbor came out with me for this trip and it was great to have company. It was a little rainy but most of the power plant was dry enough to camp comfortably.",
        "stealth": true,
        "date": "2022/11/04",
        "location": "48.423582508268595, -124.04843770863393",
        "city": "Jordan River, BC",
        "note": ""
    },
    {
        "title": "Urban Island Stealth Camping",
        "video_id": "y3DV8_s7lo8",
        "description": "I picked up a cheap inflatable raft and paddled over to an island in the middle of a lake in a residential area for some camping. Many very nice homes were close by, so I had to be stealthy. I brought a couple of stealth camping shelter options with me but ended up using a surprise shelter instead. It was a blast as always!",
        "stealth": true,
        "date": "2022/04/22",
        "location": "48.45071768378323, -123.53305892287655",
        "city": "Langford, BC",
        "note": ""
    },
    {
        "title": "Hotel Parking Lot Stealth Camping",
        "video_id": "R8AW3FNJDtQ",
        "description": "I borrowed crazy neighbors Suburban to do urban stealth camping in the parking lot of the Courtyard Marriott Hotel. I blacked out the windows with landscaping fabric to camp for the night. I hunkered down after a quick parking lot picnic of grilled cheese sandwiches and tomato soup! Was an absolute blast.",
        "stealth": true,
        "date": "2021/11/12",
        "location": "53.53831308097059, -113.63856363739097",
        "city": "Edmonton, AB",
        "note": ""
    },
    {
        "title": "Urban Stealth Camping Behind Warehouse",
        "video_id": "LCENMi57vwQ",
        "description": "I found a beautiful camping spot in a thin strip of trees between a warehouse and a rail line. This week I camped with my hammock because the trees were spaced perfectly and there was lots of open room. The warehouse was mostly vacant and for lease so there was very little traffic in the area. I whipped up some pulled pork sandwiches for dinner and hunkered down for a very cozy, albeit noisy sleep.",
        "stealth": true,
        "date": "2021/08/20",
        "location": "53.568901802630506, -113.64350424825352",
        "city": "Edmonton, AB",
        "note": ""
    },
    {
        "title": "Urban Stealth Camping Disguised As Businessman",
        "video_id": "HdBTEMOM0y4",
        "description": "I threw together a quick disguise from the thrift store and went out camping behind some houses on a residential trail. I brought the hammock with me for a shelter this trip and used a fairly small kit. A whole new world of possibilities for camping secretly has opened up!",
        "stealth": true,
        "date": "2021/07/23",
        "location": "53.508446505177666, -113.60231353930558",
        "city": "Edmonton, AB",
        "note": ""
    },
    {
        "title": "Highway Rest Area Stealth Camping",
        "video_id": "2dsX4Moy7ws",
        "description": "I dug out the old hammock for a quick overnight stealther. Things got pretty delicious later on when I cooked up a little beef and broccoli with a satisfying step 2 to wash it down. Best camping is stealth camping any day of the week in my books.",
        "stealth": true,
        "date": "2020/07/04",
        "location": "53.57676029516075, -116.15312424491742",
        "city": "Pinedale, AB",
        "note": ""
    },
    {
        "title": "Stealth Camping In Unfamiliar City",
        "video_id": "9tPmEC8O78o",
        "description": "I had the urge to do a quick stealther on our camping trip/vacation. This one was different as I haven't stealth camped in such a large unfamiliar place yet. I got to try out the zipper model of the Hennessy Hammock that beautiful wife got me for our anniversary!",
        "stealth": true,
        "date": "2020/08/14",
        "location": "50.65084246195155, -120.38233283440928",
        "city": "Kamloops, BC",
        "note": ""
    },
    {
        "title": "Stealth Camping At Canadian Tire Repair Shop",
        "video_id": "WahOKTQfsCU",
        "description": "I went to do a stealth camp at Canadian Tire! It didn't turn out as long of a video as I thought it would when I was filming, but it was fun. Parking lot camping at it's finest. Late into the lot, early out in the morning. Next weeks video will be longer I promise haha, I had no idea how little footage I got after 20 hours in a car.",
        "stealth": true,
        "date": "2021/01/24",
        "location": "53.3855502610344, -117.62417281581212",
        "city": "Hinton, AB",
        "note": ""
    },
    {
        "title": "Stealth Camping In Garbage Castle",
        "video_id": "micGRgZsji8",
        "description": "This week I went camping in a beautiful garbage sculpture in Lethbridge Alberta known as The Thing, Rust Rock Cathedral, or simply Garbage Castle. I had to be a little stealthy as I wasn't sure of the actual laws regarding camping in the city river valley. Set up camp as usual and had a reasonably good sleep hunkered down under the stars.",
        "stealth": true,
        "date": "2021/03/19",
        "location": "49.684500615083905, -112.85814729448231",
        "city": "Lethbridge, AB",
        "note": ""
    },
];
