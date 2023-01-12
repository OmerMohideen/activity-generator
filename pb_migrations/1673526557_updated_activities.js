migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txkcztnfspke64y")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txkcztnfspke64y")

  // remove
  collection.schema.removeField("nsescdy1")

  return dao.saveCollection(collection)
})
