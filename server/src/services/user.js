const getUser = async (id) => {
  try {
    return await User.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (err) {
    throw new Error(err);
  }
};
