const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')
require('env2')('./config.env')

function dateToday () {
  let date = new Date()
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let year = date.getFullYear()
  let month = months[date.getMonth()]
  let day = date.getDate()
  let hour = date.getHours()
  if (hour < 10) {
    hour = ('0').concat(hour)
  }
  let minute = date.getMinutes()
  if (minute < 10) {
    minute = ('0').concat(minute)
  }
  return [`${day} ${month} ${year}`, `${hour}:${minute}`]
}

const sendEmail = (req, res) => {
  const auth = {
    auth: {
      api_key: process.env.API_KEY,
      domain: process.env.DOMAIN
    }
  }
  const nodemailerMailgun = nodemailer.createTransport(mg(auth))

  let criteria = req.body.imageCriteria.reduce((prev, curr) =>
    prev.concat(`<li style="font-size:14px;">${curr}</li><br>`
  ), '')

  let date = dateToday()

  nodemailerMailgun.sendMail({
    from: 'postmaster@childline-yoti.com',
    to: 'childline.report.content@gmail.com',  //childline.report.content@gmail.com
    subject: 'Report online content',
    html: `<h1>Online content report from Childline</h1>
          <p style="font-size:14px;">The following details relate to a request to remove an image or video from a person under the age of 18. The age of the person has been verified by YOTI. This request was made via the Childline website.</p>
          <h2>Request details</h2>
          <p style="font-size:14px;"><span style="font-weight:bolder;">URL of content:</span>  ${req.body.url}</p>
          <h3>Description of content (optional):</h3>
          <p style="font-size:14px;">${req.body.description}</p>
          <h3>Categories selected:</h3>
          <ul>
            ${criteria}
          </ul>
          <p style="font-size:14px;"><span style="font-weight:bolder;">Date of request:</span> ${date[0]} </p>
          <p style="font-size:14px;"><span style="font-weight:bolder;">Time of request:</span> ${date[1]} </p>
          <p style="font-size:14px;font-weight:bolder;">Email address of user for further contact (optional):</p>
          <p style="font-size:14px;">${req.body.email}</p>`
  }, (err) => {
    if (err) {
      return res.json({error: 'We had a problem sending your details, please try again later.'})
    }
    return res.json({response: 'Success!!! Email has been sent!'})
  })
}

module.exports = sendEmail
