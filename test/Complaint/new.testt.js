expect = require("chai").expect;

const assert = require("assert");

describe("Closed complaint feedback", async function () {
  it("get closed complaint and check whether campaign are getting generated properly", async function () {
    this.timeout(500000);

    let complaintId;
    let complaintStatus = 'Closed'

    let [rows, fields] = await this.DB.execute(
      `SELECT * from stanzacomplaint.COMPLAINT C where C.STATUS  ='Closed' order by CREATED_AT desc limit 1;`
    );
    console.log("printing output", rows[0].id);
    complaintId = rows[0].id;

    var sql = await this.DB.execute(`INSERT INTO stanzacomplaint.COMPLAINT_LIFECYCLE (COMPLAINT_ID, STATUS,CREATED_AT) VALUES (${complaintId}, 'Closed','2019-04-04 05:01:57')`);
    console.log("1 row inserted in Complaint_Lifecycle");
    var sql1 = await this.DB.execute(`INSERT INTO stanzacomplaint.CLOSED_COMPLAINT_FEEDBACK (COMPLAINT_ID, CREATED_AT) VALUES (${complaintId}, '2019-04-04 05:01:57')`);
    console.log("1 row inserted in CLOSED_COMPLAINT_FEEDBACK");

    try {
      var response = await this.microservice.complaint.get(
        "closedComplaintFeedback"
      );
    } catch (error) {
      console.log("error", error);
    }
    expect(response.status).to.equal(200);
   


    let [rows1, fields1] = await this.DB.execute(
      `SELECT * from stanzacomplaint.CLOSED_COMPLAINT_FEEDBACK where COMPLAINT_ID =${complaintId};`
    );
     console.log("printing output 2" , rows1[0].CAMPAIGN_ID);
     let campaignId = rows1[0].CAMPAIGN_ID;
});
});







    