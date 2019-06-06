expect = require("chai").expect;

const assert = require("assert");

describe("Attendance API test", async function() {
  this.beforeEach(function() {
    this.timeout(100000)
  })

  it("Checking whether the attendance api is throughing 200", async function() {
    this.timeout(10000)
    // Attendance
    try {
      var response = await this.microservice.attendance.get(
        "/attendance-stats/meal?hostel=12&date=2019-02-19"
      );
    } catch (error) {
      console.log("error", error);
    }
    expect(response.status).to.equal(200);
    console.log("sucessfull");
}
  );
  it("Checking whether the electricity api is throughing 200", async function() {
    this.timeout(10000)
    // electricityMeterCategory
    try {
      var response = await this.microservice.electricity.get(
        "/electricityMeterCategory"
      );
    } catch (error) {
      console.log("error", error);
    }
    expect(response.status).to.equal(200);
    console.log("electricityMeterCategory is sucessfull");
}
  );
  it("Checking whether the electricity api is throughing 200", async function() {
    this.timeout(10000)
    // Attendance
    try {
      var response = await this.microservice.electricity.get(
        "/electricityMeterDetails"
      );
    } catch (error) {
      console.log("error", error);
    }
    expect(response.status).to.equal(200);
    console.log("electricityMeterDetails is sucessfull");
}
  );
  it("Checking whether the electricity api is throughing 200", async function() {
    this.timeout(10000)
    // Attendance
    try {
      var response = await this.microservice.electricity.get(
        "/electricityMeterSubCategory"
      );
    } catch (error) {
      console.log("error", error);
    }
    expect(response.status).to.equal(200);
    console.log("electricityMeterSubCategory is sucessfull");
}
);
it("Checking whether the feedback - user response api is throughing 200", async function() {
  this.timeout(10000)
  console.log('marketing testcase')
   
  // Marketing
  try {
    var response = await this.microservice.marketing.get(
      "/user/responses"
    );
  } catch (error) {
    console.log("error", error);
  }
  expect(response.status).to.equal(200);
  console.log("user/responses is sucessfull");
});
it("Checking whether the feedback - template api is throughing 200", async function() {
  this.timeout(10000)
  // Marketing
  try {
    var response = await this.microservice.marketing.get(
      "/template"
    );
  } catch (error) {
    console.log("error", error);
  }
  expect(response.status).to.equal(200);
  console.log("template is sucessfull");
});
it("Checking whether the feedback - template category api is throughing 200", async function() {
  this.timeout(10000)
  // Marketing
  try {
    var response = await this.microservice.marketing.get(
      "/template/category/1"
    );
  } catch (error) {
    console.log("error", error);
  }
  expect(response.status).to.equal(200);
  console.log("template/category/1 is sucessfull");
});
it("Checking whether the feedback - scaleValue api is throughing 200", async function() {
  this.timeout(10000)
   
  // Marketing
  try {
    var response = await this.microservice.marketing.get(
      "/scaleValue"
    );
  } catch (error) {
    console.log("error", error);
  }
  expect(response.status).to.equal(200);
  console.log("scaleValue is sucessfull");
});
it("Checking whether the feedback - scaleType api is throughing 200", async function() {
  this.timeout(10000)
  // Marketing
  try {
    var response = await this.microservice.marketing.get(
      "/scaleType"
    );
  } catch (error) {
    console.log("error", error);
  }
  expect(response.status).to.equal(200);
  console.log("scaleType is sucessfull");
});
it("Checking whether the feedback - hostelsss api is throughing 200", async function() {
  this.timeout(10000)
   
  // Marketing
  try {
    var response = await this.microservice.marketing.get(
      "/feedback/100"
    );
  } catch (error) {
    console.log("error", error);
  }
  expect(response.status).to.equal(200);
  console.log("feedback hostelsss is sucessfull");
});
it("Checking whether the feedback Question api is throughing 200", async function() {
  this.timeout(10000)
   
  // Marketing
  try {
    var response = await this.microservice.marketing.get(
      "/feedbackQuestion"
    );
  } catch (error) {
    console.log("error", error);
  }
  expect(response.status).to.equal(200);
  console.log("feedbackQuestion is sucessfull");
});
it("Checking whether the feedback Category api is throughing 200", async function() {
  this.timeout(10000)
   
  // Marketing
  try {
    var response = await this.microservice.marketing.get(
      "/feedbackCategory"
    );
  } catch (error) {
    console.log("error", error);
  }
  expect(response.status).to.equal(200);
  console.log("feedbackCategory is sucessfull");
});
it("Checking whether the activatedFeedbacks api is throughing 200", async function() {
  this.timeout(10000)
   
  // Marketing
  try {
    var response = await this.microservice.marketing.get(
      "/activatedFeedbacks"
    );
  } catch (error) {
    console.log("error", error);
  }
  expect(response.status).to.equal(200);
  console.log("activatedFeedbacks is sucessfull");
});
});
