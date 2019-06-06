expect = require("chai").expect;

const assert = require("assert");

describe("Test Meter readings", async function() {
  it("get meter reading increase 1 to it, post meter reading and again get meter reading", async function() {
    this.timeout(10000);
    let oldMeterReading;
    let oldMeterReading1;
    // get meter reading
    try {
      var response = await this.microservice.electricity.get(
        "electricityMeterReadings/7"
      );
    } catch (error) {
      console.log("error", error);
    }
    expect(response.status).to.equal(200);
    oldMeterReading = response.data[0].readingKwah;
    oldMeterReading1 = response.data[0].readingKwh;
   

    let newMeterReading = JSON.stringify(JSON.parse(oldMeterReading) + 1);
    let newMeterReading1 = JSON.stringify(JSON.parse(oldMeterReading1) + 1);
    // post new reading
    let payload = [
      {
        id: 7,
        imgUrls: [
          "https://stanza-website.s3.ap-south-1.amazonaws.com/2DB40E68-0185-437A-9767-0564B3AD1693.jpg",
          "https://stanza-website.s3.ap-south-1.amazonaws.com/33A49592-22EA-4DC8-ABE9-4E617258679B.jpg"
        ],
        readingKwah: newMeterReading,
        readingKwh: newMeterReading1,
    
      }
    ];
    try {
      var response = await this.microservice.electricity.post(
        "electricityMeterReadings",
        payload
      );
    } catch (error) {
      console.log("error", error);
    }
    expect(response.status).to.equal(200);
    // verify the new reading
    try {
      var response = await this.microservice.electricity.get(
        "electricityMeterReadings/7"
      );
    } catch (error) {
      console.log("error", error);
    }

    expect(response.status).to.equal(200);

    expect(response.data[0].readingKwah).to.equal(newMeterReading);
    var newMeterReadingId = response.data[0].id;

    let [rows, fields] = await this.DB.execute(
      `SELECT * from stanzaelectricity.ELECTRICITY_METER_READINGS where id=${newMeterReadingId};`
    );
    expect(rows[0].READING_KWAH).to.equal(newMeterReading);
  });

  it("Throws conflict 409 on reading units if new reading is lesser than or equal to old reading", async function() {});
});
