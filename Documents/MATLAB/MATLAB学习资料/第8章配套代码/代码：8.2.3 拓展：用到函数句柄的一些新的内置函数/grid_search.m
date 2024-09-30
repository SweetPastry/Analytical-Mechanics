function [x_min, f_min] = grid_search(f, a, b, d)
    % 输入参数：
    %   f(x)的函数句柄f
    %   起始点a
    %   终止点b （b>a）
    %   搜索步长d（d>0）
    % 返回值：
    %   f在[a,b]上最小值f_min
    %   最小值处对应的x值x_min
    x = a:d:b;
    f = f(x);
    [f_min,ind] = min(f);
    x_min = x(ind);
end  
  
%% 
% 配套的讲解视频可以在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  网址： https://www.bilibili.com/video/BV1Xm41167aC/
