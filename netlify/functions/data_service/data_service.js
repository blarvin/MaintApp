// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event, context) => {
  const mockData = [
    ["Item 1", "Spec A", "Spec B", "Spec C"],
    ["Item 2", "Spec A", "Spec B", "Spec C"]
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(mockData)
  };
}

module.exports = { handler }
