const asyncHandler = require("express-async-handler");

const getAASA = asyncHandler(async (_req, res) => {
  try {
    const content = {
      applinks: {
        apps: [],
        details: [
          {
            appID: "5TY9P9S7PP.com.anyapp.develop",
            paths: ["NOT /_/*", "/*"],
          },
          {
            appID: "5TY9P9S7PP.com.anyapp.develop",
            paths: ["NOT /_/*", "/*"],
          },
        ],
      },
    };

    res.setHeader("Content-Type", "application/json");
    res.json(content);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getAASA,
};
