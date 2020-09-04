"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeFind: () => {
      console.log("beforeFind");
    },
    afterFind: (results, params, populate) => {
      console.log("afterFind", params, populate);
      results.forEach((product, idx) => {
        results[idx].priceSort = 1000 * Math.random();
      });
      if (params._sort === "priceSort") {
        results.sort((a, b) => {
          return a.priceSort - b.priceSort;
        });
      }
    },
    beforeFindOne: () => {
      console.log("beforeFindOne");
    },
    afterFindOne: () => {
      console.log("afterFindOne");
    },
    beforeCount: () => {
      console.log("beforeCount");
    },
    afterCount: () => {
      console.log("afterCount");
    },
    beforeSearch: () => {
      console.log("beforeSearch");
    },
    afterSearch: () => {
      console.log("afterSearch");
    },
    beforeCountSearch: () => {
      console.log("beforeCountSearch");
    },
    afterCountSearch: () => {
      console.log("afterCountSearch");
    },
  },
};
