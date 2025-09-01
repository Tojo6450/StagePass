const User = require('../models/User.js');

const createUserOrUpdate = async (req, res) => {
  const { data } = req.body;
  const { id, email_addresses, first_name, last_name, image_url, username } = data;

  if (!id || !email_addresses) {
    return res.status(400).json({ message: 'Missing required Clerk user data' });
  }

  try {
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        clerkId: id,
        email: email_addresses[0].email_address,
        firstName: first_name,
        lastName: last_name,
        username: username,
        photo: image_url,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating or updating user', error: error.message });
  }
};

const setUserRole = async (req, res) => {
  const { clerkId, role } = req.body;

  if (!clerkId || !role) {
    return res.status(400).json({ message: 'Clerk ID and role are required.' });
  }
  if (role !== 'attendee' && role !== 'organizer') {
    return res.status(400).json({ message: 'Invalid role specified.' });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { clerkId: clerkId },
      { $set: { role: role } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json({ message: 'User role updated successfully!', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user role', error: error.message });
  }
};

const getMyProfile = async (req, res) => {
  const { clerkId } = req.query;

  if (!clerkId) {
    return res.status(400).json({ message: 'Clerk ID is required' });
  }

  try {
    const user = await User.findOne({ clerkId: clerkId });
    if (!user) {
      return res.status(404).json({ message: 'User not found in database' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error: error.message });
  }
};

module.exports = { createUserOrUpdate, setUserRole, getMyProfile };
