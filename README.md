# RuneWordFinder
A toy application for discovering which rune words can be made in Diablo II.

### Why?
Because I am bad at inventory management and can never remember which runes go to which rune words.

### ...you realize making this takes way more time than googling it, right?
Fine. In reality, I had been searching for a mini-project to pursue while working with a new tech stack.

This project is being built with **React** for its front-end, **C#** for the backend, and **Mongo** as it's database. This particular \
stack was chosen primarily because I either had not worked with or had limited experience with each technology.

### Alright, that makes sense. Why is your main directory post-fixed with a 4?
It's called iterative design. Theoretically, I would be working with a client and incorporating feedback on a regular basis.

### The other three don't even start, do they?
Oh god no. Not even a little.

# Setup
## Seeding Mongo
This project uses the [mongo-seeding](https://github.com/pkosiec/mongo-seeding "mongo-seeding github") repository to seed the database. The repository has a gob of features, but this project specifically takes advantage of the [cli sub repository](https://github.com/pkosiec/mongo-seeding/tree/master/cli "mongo-seeding-cli github").

If you wish to seed the database programatically, there are some known issues getting webpack to package mongoose, another populer Mongo package that mongo-seeding relies on. Spend time at your own risk.

### Seeding local instance
To seed a local instance of Mongo, run `npm run seed-db` to run a predefined seeding command. If you are using non-default configurations for your mongo instance (e.g. not using port 27017), you will need to peruse the documentation for mongo-seeding-cli at the link above and modify the command in `package.json`.
