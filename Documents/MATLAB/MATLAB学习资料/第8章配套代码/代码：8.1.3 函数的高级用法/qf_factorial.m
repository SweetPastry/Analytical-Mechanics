function F = qf_factorial(n)
% 利用递归求正整数n的阶乘
    if n == 1   % 递归的出口
        F = 1;
    else
        F = n * qf_factorial(n-1);
    end
end  
  
%% 
% 配套的讲解视频可以在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  网址： https://www.bilibili.com/video/BV1Xm41167aC/
