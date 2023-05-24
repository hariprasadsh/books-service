const { db } = require("../utils/admin");

exports.fetchAll = async (req, res) => {
  const booksRef = db.collection("books");
  let data = [];

  try {
    const snapshot = await booksRef.get();
    if (snapshot) {
      data = snapshot.docs.map((doc) => ({
        _id: doc.id,
        ...doc.data(),
      }));
    }
    return data;
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};

exports.save = async (book) => {
  const bookRef = db.collection("books");

  try {
    await bookRef.add(book); // or we can use `await bookRef.doc().set(book)`

    return true;
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};
