require("datejs");

function combineUsers(...arrays) {
  return {

    users: arrays.flat(),
    merge_date: Date.today().toString("M/d/yyyy")
  };
}

module.exports = {
  combineUsers
};