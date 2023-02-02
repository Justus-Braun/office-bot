migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s79icwlhqet80jc")

  // remove
  collection.schema.removeField("zdooeyko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pehh5ir8",
    "name": "channel_id",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s79icwlhqet80jc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zdooeyko",
    "name": "channel_id",
    "type": "number",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("pehh5ir8")

  return dao.saveCollection(collection)
})
