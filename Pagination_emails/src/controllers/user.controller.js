const express = require('express');

const User = require("../models/user.model");

const router = express.Router();

const transporter = require('../config/mail')

router.get("", async(req, res)=>{

    const page = +req.query.page || 1;
    const size = +req.query.size || 10;

    const offset = (page -1) * size;

    const query = {age:{$gt:40}};

    const users = await User.find(query).sort({last_name:1}).skip(offset).limit(size).lean().exec();

    const totalDocuments = await User.find(query).countDocuments();

    const totalPages = Math.ceil(totalDocuments / size);

     await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>New mail!</b>", // html body
        attachments: [
            {
                filename: 'dummy.txt',
                path:'/D/Pagination_emails/src/text.txt'
            }
        ]
      });

    return res.status(200).json({users, totalPages});
})

module.exports = router;