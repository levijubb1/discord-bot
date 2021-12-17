_und = require('underscore');
const fs = require('fs');

function sample(a) {
    return _und.take(_und.shuffle(a));
}

function gen_event() {
    eventsdata = fs.readFileSync("./files/events.json","utf-8");
    events = JSON.parse(eventsdata)
    new_event = sample(events)
    return new_event //Object of event handle more in main
}

module.exports = gen_event