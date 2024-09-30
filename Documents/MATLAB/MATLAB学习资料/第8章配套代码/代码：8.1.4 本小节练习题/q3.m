function [x_max, y_max] = q3(a, b, d)
    % Q3 利用网格搜索法在给定区间内寻找函数的最大值
    % a和b: 搜索区间的起始点a、终止点b
    % d: 搜索步长
    % x_max: 最大值对应的x坐标
    % y_max: 函数在x_max处的最大值
    if d <= 0
        error('步长d必须为正数');
    end
    if a >= b
        error('起始点a必须小于终止点b');
    end
    x = a:d:b;
    y = 2*x.*sin(8*x)+x.*cos(3*x);
    [y_max,ind] = max(y);
    x_max = x(ind);
end  
  
%% 
% 配套的讲解视频可在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  网址： https://www.bilibili.com/video/BV1Xm41167aC/
