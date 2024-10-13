const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });
    afterAll(async () => {
        await sequelize.drop();  // Drop all tables from the database
        await sequelize.close(); // Close the connection to the database
      });

    test('can create a Restaurant', async () => {
        // TODO - write test
        let restaurant = await Restaurant.create({name: "Nusret", location: "London", cuisie: "Steaks"});

        expect(restaurant.name).toEqual('Nusret')
    });

    test('can create a Menu', async () => {
        // TODO - write test
        let menu = await Menu.create({title: "Wines"})
        expect(menu.title).toEqual('Wines')
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        let foundRestaurants = await Restaurant.findAll({where: {location: "London"}});
        expect(foundRestaurants.length).toBeGreaterThan(0);
    });

    test('can find Menus', async () => {
        // TODO - write test
        let foundMenus = await Menu.findAll({where: {title: "Wines"}})
        expect(foundMenus[0].title).toEqual('Wines')
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        let foundRestaurants = await Restaurant.findOne({where: {location: "London"}});
         await foundRestaurants.destroy();
         let deletedRestaurant = await Restaurant.findOne({ where: { location: "London" } });
        expect(deletedRestaurant).toBeNull()
    });
})