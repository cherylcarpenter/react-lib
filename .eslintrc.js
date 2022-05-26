module.exports = {
  extends: "eslint:recommended",
  rules: {
    "import/no-anonymous-default-export": [0, {
      "allowArray": false,
      "allowArrowFunction": false,
      "allowAnonymousClass": false,
      "allowAnonymousFunction": false,
      "allowCallExpression": true, // The true value here is for backward compatibility
      "allowLiteral": false,
      "allowObject": false
    }]
}
}
