import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log("========== PROMPT ==========");
    console.log(prompt);
    console.log("============================");

    res.json({
      success: true,
      message: "Backend is working!",
      promptReceived: prompt,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;