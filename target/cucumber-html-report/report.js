$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authetification - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m\u0027authentifier",
  "id": "authetification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 65770553858,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Title of your scenario",
  "description": "",
  "id": "authetification---orangehrm;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisie username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "je saisi password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sue le bouton Login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers le compte Admin",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1759674932,
  "status": "passed"
});
});