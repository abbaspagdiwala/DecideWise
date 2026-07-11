export function buildPrompt(flow, answers) {
  let prompt = `You are an expert ${flow.title} decision advisor.\n\n`;

  prompt += `User Responses:\n`;

  flow.questions.forEach((question) => {
    prompt += `${question.label}: ${answers[question.id] || "Not Answered"}\n`;
  });

  prompt += `
Based on the above information, provide:

1. Executive Summary
2. Best Recommendation
3. Pros
4. Risks
5. Step-by-step Action Plan
6. Alternative Option
7. Confidence Score (0-100)

Return the response in clean markdown.
`;

  return prompt;
}