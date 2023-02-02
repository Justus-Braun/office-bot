migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s79icwlhqet80jc")

  collection.listRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s79icwlhqet80jc")

  collection.listRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
