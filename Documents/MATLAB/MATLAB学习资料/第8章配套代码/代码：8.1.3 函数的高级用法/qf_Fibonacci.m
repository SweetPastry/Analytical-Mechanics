clc;clear
Fibonacci(5)
Fibonacci(10)
Fibonacci(30)

function f = Fibonacci(n)
% 这是一个局部函数
% 用于计算斐波那契数列的第n项
    F = ones(1,n); 
    for k = 3:n
        F(k) = F(k-1) + F(k-2);
    end
    f = F(n);
end  


  
%% 
% 配套的讲解视频大家可在b站上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  网址： https://www.bilibili.com/video/BV1Xm41167aC/
