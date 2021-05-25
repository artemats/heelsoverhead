import moment from "moment";

const currentDate = moment().format('YYYY-MM-DDTHH:mm:ss.sssZ');

export function getSubscriberData(name, email, diet, tags) {
    const data = {
        "firstName": name || "",
        "tags": tags || [],
        "identifiers": [
            {
                "type": "email",
                "id": email || "",
                "channels": {
                    "email": {
                        "status": "subscribed",
                        "statusDate": currentDate
                    }
                }
            }
        ]
    };

    if(!!diet) {
        data.customProperties = { Diet: "Vegan, Name diet" }
    }

    return data;
}