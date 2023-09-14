import asyncHandler from "express-async-handler";

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
        ],
      },
      webcredentials: {
        apps: ["5TY9P9S7PP.com.anyapp.develop"],
      },
    };

    res.setHeader("Content-Type", "application/json");
    res.json(content);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getApplinks = asyncHandler(async (_req, res) => {
  try {
    const content = [
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: "com.anyapp.develop",
          sha256_cert_fingerprints: [
            "BA:49:60:A7:0C:A5:FE:AD:FF:44:BA:F0:65:71:69:83:1E:6E:A8:62:EA:E6:25:D5:CB:CA:B6:DC:69:09:49:EF",
          ],
        },
      },
    ];
    res.setHeader("Content-Type", "application/json");
    res.json(content);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
export { getAASA, getApplinks };
