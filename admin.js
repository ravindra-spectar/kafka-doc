const { kafka } = require("./client")


async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting....");
    admin.connect();
    console.log("Admin connected....");

    // Create a topic
    console.log("Creating topic [rider-update]...");
   await admin.createTopics({
        topics:[{
            topic:"rider-update",
            numPartitions:2
        }]
    })
    console.log("Topic Created Success [rider-update]...");

    console.log("Disconnecting Admin...");
    await admin.disconnect();
    console.log("Admin Disconnected...");

}


init()