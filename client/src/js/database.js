import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });


// get ALL route for openDB (IDB)
export const getDb = async () => {
  
  const jateDb = await openDB("jate", 1);

  const tx = jateDb.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");

  const request = store.getAll();

  const result = await request;

  console.log("get route working?");

  return result;
};

// put route for openDB (IDB)
export const putDb = async (content) => {

  const jateDb = await openDB("jate", 1);

  const tx = jateDb.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");

  const request = store.put({ "jate": content});

  const result = await request;

  console.log("Put route must be working...");

  return result;
};


initdb();
