migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s79icwlhqet80jc")

  // remove
  collection.schema.removeField("bcas67ue")

  // remove
  collection.schema.removeField("1iwknuye")

  // remove
  collection.schema.removeField("ktnn5kd8")

  // remove
  collection.schema.removeField("kcfe8bl6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyyfvi5h",
    "name": "startHours",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7us8u0al",
    "name": "endHours",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iuskyym1",
    "name": "startMinutes",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ukmnvwn8",
    "name": "endMinutes",
    "type": "text",
    "required": false,
    "unique": false,
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
    "id": "bcas67ue",
    "name": "startHours",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1iwknuye",
    "name": "endHours",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ktnn5kd8",
    "name": "startMinutes",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kcfe8bl6",
    "name": "endMinutes",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("pyyfvi5h")

  // remove
  collection.schema.removeField("7us8u0al")

  // remove
  collection.schema.removeField("iuskyym1")

  // remove
  collection.schema.removeField("ukmnvwn8")

  return dao.saveCollection(collection)
})
