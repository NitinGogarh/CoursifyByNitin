const { Router } = require("express");
const data = require("../MOCK_DATA");
const coursesModel = require("../models/addedCourses");
const enrollModel = require("../models/enrollCourses");
const router = Router();
router.get("/", (req, res) => {
  return res.json(data);
});
router.get("/addcourses/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await coursesModel.findOne({ email });
    return res.json({ courses: user.courses });
  } catch (error) {
    return res.json({ msg: "Internal Server Error" });
  }
});

router.get("/enroll/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await enrollModel.findOne({ email });
    return res.json({ courses: user.courses });
  } catch (error) {
    return res.json({ msg: "Internal Server Error" });
  }
});

router.post("/enroll", async (req, res) => {
  const { email, data } = req.body;
  try {
    const user = await enrollModel.findOne({ email });
    if (user) {
      const { courses } = user;
      const alreadyAdded = await courses.find(({ id }) => id === data.id);
      if (!alreadyAdded) {
        await enrollModel.findByIdAndUpdate(
          user._id,
          {
            courses: [...user.courses, { ...data, progress:{} }],
          },
          { new: true }
        );
      } else
        return res
          .status(400)
          .json({ msg: "Course already added to the added list." });
    } else
    {
      await enrollModel.create({ email, courses: [{ ...data, progress:{} }] });
    }
      
    return res.json({ msg: "Course successfully added to added list." });
  } catch (error) {
    return res.json({ msg: "Error adding Course to the added list" });
  }
});
router.post("/addcourses", async (req, res) => {
  const { email, data } = req.body;
  try {
    const user = await coursesModel.findOne({ email });
    if (user) {
      const { courses } = user;
      const alreadyAdded = await courses.find(({ id }) => id === data.id);
      if (!alreadyAdded) {
        await coursesModel.findByIdAndUpdate(
          user._id,
          {
            courses: [...user.courses, data],
          },
          { new: true }
        );
      } else
        return res.json({ msg: "Course already added to the added list." });
    } else await coursesModel.create({ email, courses: [data] });
    return res.json({ msg: "Course successfully added to added list." });
  } catch (error) {
    return res.json({ msg: "Error adding Course to the added list" });
  }
});
module.exports = router;
