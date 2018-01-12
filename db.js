
var TBL_HISTORY = 'history';

function getLastRequestByIp(db, cb) {
    db.collection(TBL_HISTORY).findOne()
}