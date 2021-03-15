# add your info
digitalCraftsStudent = {
    "name": "Tatien Miller",
    "city": "Kansas City",
    "computer": ["2012 Macbook Pro"],

}
# print out your computer information in the list to the terminal 
# print(digitalCraftsStudent["computer"][0])

gamer = {
    "platform": "ps4",
    "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
    "skill": 'not a noob'
}
# print out the time you would game
# print(gamer["gamingHours"][1]["weekends"])
# print(gamer["skill"])

stocks = {
  "name": "Game Doge", 
  "ticker": "GGDOG",
  "pricePerShare": 1,
  "denomination": "cent",
  "volume": 25, 
  "volatility": "low", 
  "startOfDayPrice": 2, 
  "endOfDayPrice": 4, 
  "market": ["US", "Europe"], 
  "shareholders": 
  [
    {"name": "James Walden"}, 
    {"name": "LeRon Rovira"}, 
    {"name": "Kendall Burdette"}
  ]
}
# print(stocks["name"])
# stocks["dividends"] = 1
# print(stocks["dividends"])
# print(stocks["shareholders"][0]["name"])

# 1. print out a list of engine choices (whole list)
# 2. print out the horsepower values only (all)
# 3. check to see if the key "trim" exist on the car dictionary
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings)
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value
car = {
    "model": "BMW M3",
    "image": "https://bit.ly/3bP4SUP",
    "year": "2003",
    "engineChoices": [

        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],

}
print(car["engineChoices"])

for hpValue in car["engineChoices"]:
  for key, value in hpValue.items():
    print(value["horsepower"])

# print(car["engineChoices"][0]["v4"]["horsepower"])

key_to_find = "trim"
if key_to_find in car:
  print("found")
else:
  print("not found") 

car["colors"] = ["red", "blue", "yellow", "green"]
print(car["colors"])