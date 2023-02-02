migrate((db) => {
  const collection = new Collection({
    "id": "s79icwlhqet80jc",
    "created": "2023-02-02 16:21:24.562Z",
    "updated": "2023-02-02 16:21:24.562Z",
    "name": "times",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "suwdg7bp",
        "name": "guild",
        "type": "number",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("s79icwlhqet80jc");

  return dao.deleteCollection(collection);
})
