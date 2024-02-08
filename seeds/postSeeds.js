const { Post } = require('../models');

const postData = [{
        title: ' Albert Einstein',
        content: 'Was he really one of the smartest men alive or weird man?',
        user_id: 1

    },
    {
        title: 'Martin Luther king',
        content: 'Seing the childhood of a great man',
        user_id: 2
    },
    {
        title: 'Albert branom',
        content: 'The true story of a man turned god.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;