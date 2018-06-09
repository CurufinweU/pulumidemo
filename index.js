// Import the [cloud-aws](https://docs.pulumi.com/packages/pulumi-cloud/) package
const cloud = require("@pulumi/cloud-aws");

// Create a public HTTP endpoint (using AWS APIGateway)
const endpoint = new cloud.HttpEndpoint("hello");

// Serve static files from the `www` folder (using AWS S3)
endpoint.static("/", "www");

// Serve a simple REST API on `GET /name` (using AWS Lambda)
endpoint.get("/source", (req, res) => res.json({name: "other AWS"}));
endpoint.get("/source2", (req, res) => res.json({name2: "other AWS2"}));

// Export the public URL for the HTTP service
exports.url = endpoint.publish().url;
