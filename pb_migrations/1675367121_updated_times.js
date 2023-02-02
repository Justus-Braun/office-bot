migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s79icwlhqet80jc")

  // remove
  collection.schema.removeField("2mwwik2v")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s79icwlhqet80jc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2mwwik2v",
    "name": "timezone",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
