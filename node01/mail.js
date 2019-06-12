"use strict";
const nodemailer = require("nodemailer");
// 封装一个mailseed
const mail = {
    seed(tomail,toinfo){
        // create reusable transporter object using the default SMTP transport 创建发送邮件的对象
        let transporter = nodemailer.createTransport({
            host: "smtp.163.com",   // 发送方邮箱   通过lib/well-known/services.json查询邮箱信息
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'xxxxxxx@163.com', // generated ethereal user      发送方的邮箱地址
                pass: 'xxxxxxx' // generated ethereal password   smtp 验证码
            }
        });
        
        // send mail with defined transport object   邮件信息
        let mailinfo = {
          from: '"Fred Foo 👻" <xxxxxxx.com>', // sender address
          to: tomail, // list of receivers
          subject: "Hello ✔", // Subject line
          // text: "Hello ", // plain text body
          html: "<b>"+toinfo+"</b>" // html body 
        };
        // text和html只能有一个   text只能输文本，字符串
        // 发送邮件
        transporter.sendMail(mailinfo,(err,info)=>{
            console.log(err);
            console.log(info);
        });
    }
}
module.exports = mail;






// 邮箱轰炸
// setInterval(()=>{
//     transporter.sendMail(mailinfo);
// },1000)
