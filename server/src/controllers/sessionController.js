import Session from '../models/Session.js';

export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSession = async (req, res) => {
  const { title, description, durationMinutes, category } = req.body;

  try {
    const session = await Session.create({
      user: req.user.id,
      title,
      description,
      durationMinutes,
      category,
    });
    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    if (session.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await session.deleteOne();
    res.status(200).json({ id: req.params.id, message: 'Session deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};