classdef qf_dog % 定义了一个名为qf_dog的类
    properties % 声明属性
        color % 狗的颜色
        age % 狗的年龄
        kind % 狗的种类
    end
    methods % 声明方法
        % 吃饭的方法
        % 参数说明：
        % ~ 表示当前实例对象（这里我们并不需要用到该对象，因此用~代替）
        % x 表示传递给方法的参数，即吃的狗粮的量
        function eat(~, x)
            disp(["我吃了" x "克狗粮！"]) % 显示狗吃了多少克狗粮
        end
        % 睡觉的方法
        function sleep(~)
            disp('睡觉真舒服呀！') % 显示狗睡觉时的状态
        end
        % 散步的方法
        function walk(~)
            disp('和主人一起散步好开心呀！') % 显示狗散步时的状态
        end
        % 类的构造函数
        % 参数说明：
        % color 狗的颜色
        % age 狗的年龄
        % kind 狗的种类
        % obj 表示当前实例对象
        function obj = qf_dog(color, age, kind)
            obj.color = color; % 给实例对象的color属性赋值
            obj.age = age; % 给实例对象的age属性赋值
            obj.kind = kind; % 给实例对象的kind属性赋值
        end
    end
end