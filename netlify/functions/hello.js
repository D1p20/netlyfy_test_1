exports.handler = async () => {
  const { PRIVATE_KEY, ...safeEnvVariables } = process.env;

  return {
    statusCode: 200,
    body: JSON.stringify(safeEnvVariables, null, 2),
  };
};
