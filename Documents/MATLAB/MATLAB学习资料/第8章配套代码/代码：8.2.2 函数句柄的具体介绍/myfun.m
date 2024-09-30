function [d1,d2,d3,d4] = myfun(x)
% 该函数用于计算数值向量的平均值、中位数、最大值和最小值
% 输入参数：
% x是一个数组向量
% 输出值：
% d1,d2,d3,d4分别是平均值、中位数、最大值和最小值
    d1 = mean(x);
    d2 = median(x);
    d3 = max(x);
    d4 = min(x);
end  
  
%% 
% 配套的讲解视频大家可在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  网址： https://www.bilibili.com/video/BV1Xm41167aC/
