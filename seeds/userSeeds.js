const { User } = require('../models');

const userData = [{
        username: 'johnson',
        password: '12345'

    },
    {
        username: 'mushu',
        password: 'branom'
    },
    {
        username: 'paige',
        password: 'Ruberg'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;