const cron = require('node-cron');
const twilio = require('twilio');
const { Task, User } = require('../models');

const accountSid = 'your_twilio_account_sid';
const authToken = 'your_twilio_auth_token';
const client = new twilio(accountSid, authToken);

cron.schedule('0 9 * * *', async () => {
  const tasks = await Task.findAll({ where: { priority: { [Op.lt]: 3 } } });

  for (const task of tasks) {
    const user = await User.findByPk(task.user_id);
    try {
      await client.calls.create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: user.phone_number,
        from: 'your_twilio_phone_number'
      });
    } catch (error) {
      console.error(`Failed to call user ${user.id}:`, error);
    }
  }
});
