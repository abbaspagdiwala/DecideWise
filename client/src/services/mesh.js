const API_URL = "https://api.meshapi.ai/v1/chat/completions";

export async function analyzeDecision(prompt) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_MESH_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "ai21/jamba-1-5-large-v1",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const data = await response.json();

  return data.choices[0].message.content;
}