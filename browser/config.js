System.config({
  "baseURL": __dirname + "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.15",
    "babel": "npm:babel-core@5.2.9",
    "babel-runtime": "npm:babel-runtime@5.2.9",
    "core-js": "npm:core-js@0.9.6",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.9.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});