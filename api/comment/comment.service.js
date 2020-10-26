
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    add
}

async function query(filterBy = {}) {
    console.log("query -> ")

    // const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('comment')
    try {
        const comments = await collection.find().toArray();

        return comments
    } catch (err) {
        console.log('ERROR: cannot find comments')
        throw err;
    }
}

async function add(comment) {
    console.log("add -> ")
    const collection = await dbService.getCollection('comment')
    try {
        await collection.insertOne(comment);
        return comment;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

// function _buildCriteria(filterBy) {
//     const criteria = {};
//     return criteria;
// }




