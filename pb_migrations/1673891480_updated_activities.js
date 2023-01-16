migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txkcztnfspke64y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nsescdy1",
    "name": "completed",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txkcztnfspke64y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nsescdy1",
    "name": "completed",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
