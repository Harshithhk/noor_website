import dbConnect from "../../../../utils/dbConnect"
import Event from "../../../../models/Event"

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case "GET":
      try {
        const event = await Event.findById(id)
        if (!event) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: event })
      } catch (err) {
        res.status(400).json({ success: false })
      }
      break

    case "PUT":
      try {
        const event = await Event.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!event) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: event })
      } catch (err) {
        res.status(400).json({ success: false })
      }
      break

    case "DELETE":
      try {
        const deletedEvent = await Event.deleteOne({ _id: id })
        if (!deletedEvent) {
          return re.status(400).json({ success: false })
        }
        res.status(400).json({ success: true, data: {} })
      } catch (err) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
