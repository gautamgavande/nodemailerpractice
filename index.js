const nodemailer=require("nodemailer")
require("dotenv").config()
/////configure email cridentials
///security me jana hai
let transpoter=nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
    user: "gautamgavande2436@gmail.com",
    pass:process.env.PASS ,
  },
})

// let mailOptions={
//     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//     to: "ankitmech2016@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
// }
// // send mail with defined transport object
// transpoter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//         });



async function main() {
    // send mail with defined transport object
    const info = await transpoter.sendMail({
      from: '"Gautam Gavande👻" <gautamgavande2436@gmail.com>', // sender address
      to: ["ankitmech2016@gmail.com","17shubhijain@gmail.com"], // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?  hiii i am gautam</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
main().catch(console.error);
    