const { Comment } = require('../models');

const commentData = [{
        comment_text: "Of course einstien was a genoious crazy",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Before i had a dream lol",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "This guy was and is and will be a true legend.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;