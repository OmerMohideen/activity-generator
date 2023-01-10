migrate((db) => {
  const collection = new Collection({
    "id": "txkcztnfspke64y",
    "created": "2023-01-10 18:38:44.103Z",
    "updated": "2023-01-10 18:38:44.103Z",
    "name": "activities",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lsjnsynp",
        "name": "key",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dqmqn8eo",
        "name": "activity",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("txkcztnfspke64y");

  return dao.deleteCollection(collection);
})
