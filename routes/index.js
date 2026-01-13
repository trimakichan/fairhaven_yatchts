const url = require("url");
const express = require("express");
const router = express.Router();
const needle = require("needle");

//Env
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

//Init cache
router.get("/", async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });
    const apiRes = await needle(
      "get",
      `${API_BASE_URL}?${params}&status=active`
    );
    const apiResPending = await needle(
      "get",
      `${API_BASE_URL}?${params}&status=sale%20pending`
    );

    const activeData = apiRes.body;
    const pendingData = apiResPending.body;

    const combinedResults = [
      ...(activeData.results || []),
      ...(pendingData.results || []),
    ];

    const combinedData = {
      numResults: combinedResults.length,
      results: combinedResults,
    };

    res.status(200).json(combinedData);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
