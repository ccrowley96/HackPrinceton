## Inspiration

_ "According to Portio Research, the world will send 8.3 trillion SMS messages this year alone – 23 billion per day or almost 16 million per minute. According to Statistic Brain, the number of SMS messages sent monthly increased by more than 7,700% over the last decade" _ 

The inspiration for TextNet came from the crazy mobile internet data rates in Canada and throughout North America.    The idea was to provide anyone with an SMS enabled device to access the internet!

## What it does
TextNet exposes the following internet primitives through basic SMS: 
1. Business and restaurant recommendations
2. Language translation
3. Directions between locations by bike/walking/transit/driving
4. Image content recognition
5. Search queries.
6. News update

TextNet can be used by anyone with an SMS enabled mobile device.  Are you _ roaming _ in a country without access to internet on your device? Are you tired of paying the steep mobile data prices?  Are you living in an area with poor or no data connection?  Have you gone over your monthly data allowance?  TextNet is for you!

## How we built it
TextNet is built using the Stdlib API with node.js and a number of third party APIs.  The Stdlib endpoints connect with Twilio's SMS messaging service, allowing two way SMS communication with any mobile device.  When a user sends an SMS message to our TextNet number, their request is matched with the most relevant internet primitive supported, parsed for important details, and then routed to an API.  These API's include Google Cloud Vision, Yelp Business Search, Google Translate, Google Directions, and Wolfram Alpha.  Once data is received from the appropriate API, the data is formatted and sent back to the user over SMS.  This data flow provides a form of text-only internet access to offline devices.

## Challenges we ran into
Challenge #1 - We arrived at HackPrinceton at 1am Saturday morning.
Challenge #2 - Stable SMS data flow between multiple mobile phones and internet API endpoints.
Challenge #3 - Google .json credential files working with our Stdlib environment
Challenge #4 - Sleep deprivation ft. car and desks
Challenge #5 -  Stdlib error logging

## Accomplishments that we're proud of
We managed to build a basic offline portal to the internet in a weekend.  TextNet has real world applications and is built with exciting technology.  We integrated an image content recognition machine learning algorithm which given an image over SMS, will return a description of the contents!  Using the Yelp Business Search API, we built a recommendation service that can find all of the best Starbucks near you!

Two of our planned team members from Queen's University couldn't make it to the hackathon, yet we still managed to complete our project and we are very proud of the results (only two of us) :)

## What we learned
We learned how to use Stdlib to build a server-less API platform.  We learned how to interface SMS with the internet.  We learned *all* about async / await and modern Javascript practices.  We learned about recommendation, translate, maps, search queries, and image content analysis APIs.

## What's next for TextNet
Finish integrate of P2P payment using stripe 
