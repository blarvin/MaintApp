// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event, context) => {
  const mockData = [
    ["Item 1", "Spec A", "Spec B", "Spec C"],
    ["Item 2", "Spec A", "Spec B", "Spec C"]
  ];

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allows any origin to access the resource
      // If you need to be more specific, replace "*" with your front-end app's origin
      // e.g., "Access-Control-Allow-Origin": "https://myfrontendapp.com"
    },
    body: JSON.stringify(mockData)
  };
}

module.exports = { handler }
