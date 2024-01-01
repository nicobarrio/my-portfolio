const path = require('path');

const controller = {
    home: (req, res) => {
        res.render(path.join(__dirname, '../views/home'));
    },
    resume: (req, res) => {
        res.render(path.join(__dirname, '../views/resume/resume'));
    },
    contact: (req, res) => {
        res.render(path.join(__dirname, '../views/contact/contact'));
    }
}

module.exports = controller; 