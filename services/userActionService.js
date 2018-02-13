//import { Error } from 'mongoose';
const Error = require('mongoose').Error;

const userActionModel = require('../mongoose/userActions');

async function getAll() {
    return userActionModel.find({}).sort({ date: -1 })
}

async function getOne(actionId) {
    return userActionModel.find({ _id: actionId });
}

async function getByUserName(name) {
    return userActionModel.find({ userName: name });
}

async function getByActionName(action) {
    return userActionModel.find({ action });
}

async function getByDate(date) {
    return userActionModel.find({ date });
}

async function insertUserAction(data) {
    let userAction = new userActionModel(data);
    return userAction.save();
}

async function updateUserAction(actionId, data) {
    const actionItem = getOne(actionId);

    if (!actionItem) throw new Error(`not find action by id ${actionId}`);

    Object.keys(data).forEach((key) => {
        actionItem[key] = date[key];
    });

    return actionItem.save();
}

async function removeAction(query) {
    const result = await userActionModel.remove(query);
    return result.result.n;
}

module.exports = {
    getAll, getByActionName, getByDate, getByUserName , insertUserAction , updateUserAction ,getOne ,removeAction
}