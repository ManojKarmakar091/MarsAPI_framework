// @ts-check

const config = {
  endpoint: "https://voyager-dev-westus-db-account.documents.azure.com:443/",
  key: "RnWjPI3Z8aYNqo5GERgswVnqxi58ms1dZ7me5278CPT5wE2vvYmSnWNpuiXnns5XgPpnbeCB2PFpmR7Ws8MRLg==",
  databaseId: "AccountDB",
  containerId: "Account",
  partitionKey: { kind: "id", paths: ["/accountId"] }
};

module.exports = config;
