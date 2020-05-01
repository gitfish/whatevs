const fs = require("fs");
const path = require("path");
const { generate, writeFiles, logUnexpectedFiles } = require("mst-gql/generator/generate");

const format = "ts";
const outDir = path.join(__dirname, "..", "src", "models");

const schemaWrapper = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "src", "graphql", "schema.json"), "utf8"));

const json = schemaWrapper.data;

const files = generate(
    json.__schema,
    format
);

writeFiles(outDir, files, format, true);
logUnexpectedFiles(outDir, files);



