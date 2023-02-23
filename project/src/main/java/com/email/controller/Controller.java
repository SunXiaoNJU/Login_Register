package com.email.controller;

import com.email.service.EmailService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Random;

/**
 * @author 孙骁
 */
public class Controller {
    @Resource
    private EmailService emailService;
    @RequestMapping("/getEmailCode")
    @ResponseBody
    public String getEmailCode(String toEmail, HttpSession httpSession) {
        Random random = new Random();
        //生成随机验证码
        int code = 100000 + random.nextInt(899999);
        //把验证码存储到session中
        httpSession.setAttribute("code", code);
        //执行发送验证码
        if (emailService.sendEmail(toEmail, "验证码", "欢迎注册,您的验证码为:" + code)) {
            return "获取成功";
        }
        return "获取失败";
    }

    @RequestMapping("/checkEmailCode")
    @ResponseBody
    public String checkEmailCode(String code,HttpSession httpSession) {
        String emailCode = httpSession.getAttribute("code").toString();
        if(emailCode!=null) {
            if(emailCode.equals(code)) {
                return "校验成功";
            }
        }
        return "校验失败";
    }
}
