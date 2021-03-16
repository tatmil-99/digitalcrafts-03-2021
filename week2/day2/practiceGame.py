# two characters
# goal is to let them fight, whoever wins will be printed out 
# in a victory message (function that prints)
# 

class Hero:
  def __init__(self, name, health):
    self.name = name
    self.health = health
  def damage(self):
    self.health -= 5


class Goblin:
  def __init__(self, name, health):
    self.name = name
    self.health = health
  def damage(self):
    self.health -= 5


class Knight:
  def __init__(self, name, health):
    self.name = name
    self.health = health

def HeroAttacksGoblin(hero, goblin):
  print("%s attacks %s " %(hero.name, goblin.name))
  goblin.damage()
  print("%s takes 5 damage " %(goblin.name))
  print("%s has %s health" %(goblin.name, goblin.health))

# try taking input to create characters
Phil = Hero("Phil", 10)
Bob = Goblin("Bob", 10)
Carlo = Knight("Carlo", 10)

print("The name of this character is", Phil.name)
print("The name of this character is", Bob.name)
# print("The name of this character is", Carlo.name)


# Phil will punch Bob
# Bob will recieve damage

while Bob.health > 0:
  HeroAttacksGoblin(Phil, Bob)
  if Bob.health == 0:
    print("Phil wins!")







