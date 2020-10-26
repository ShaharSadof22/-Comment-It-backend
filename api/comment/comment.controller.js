const commentService = require('./comment.service')

module.exports = {
    getComments,
    addComment
}

async function getComments(req, res) {
    try {
        const comments = await commentService.query(req.query)
        res.send(comments)
    } catch (err) {
        logger.error('Cannot get comments', err);
        res.status(500).send({ error: 'cannot get comments' })
    }
}

async function addComment(req, res) {
    comment = await commentService.add(req.body)
    res.send(comment)
}


