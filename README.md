# RuneWordFinder
A toy application for discovering which rune words can be made in Diablo II.

## What and Why?

### What is a Runeword?
In the game Diablo II, slain enemies have a chance of dropping a magical rune. There are a variety of runes that have different properties. Runes may be added to a weapon or a piece of armor with sockets in them. If the correct runes are socketed into an item in the correct order, a Runeword is created. A Runeword is an extremely powerful magic item that often has a large number of magical properties and is more powerful than most other magic items of a similar level.

### Why a Runeword Finder?
As the player progresses through the game, the player can amass a large number of runes, and it can be difficult to keep track of which runes can make which Runewords. Online resources exist that list Runewords and their required runes, but often the information is spread across multiple pages and does not take into account the runes the player owns. The purpose of this application is to make finding which Runewords simpler by starting with the runes the player owns and returning a list of which Runewords a player can make.

# Setup

## Stack
**Front**: React
**Back**: C#
**Database**: Mongo
**Framework**: ASP.Net

## Seeding Mongo
This project uses the [mongo-seeding](https://github.com/pkosiec/mongo-seeding "mongo-seeding github") repository to seed the database. The repository has a gob of features, but this project specifically takes advantage of the [cli sub repository](https://github.com/pkosiec/mongo-seeding/tree/master/cli "mongo-seeding-cli github").

If you wish to seed the database programatically, there are some known issues getting webpack to package mongoose, another populer Mongo package that mongo-seeding relies on. Spend time at your own risk.

### Seeding local instance
To seed a local instance of Mongo, run `npm run seed-db` to run a predefined seeding command. If you are using non-default configurations for your mongo instance (e.g. not using port 27017), you will need to peruse the documentation for mongo-seeding-cli at the link above and modify the command in `package.json`.
