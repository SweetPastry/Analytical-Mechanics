function f = q7(x, n)   
    % Q7 计算连根式
    % 初始化结果变量为x  
    f = x;  
    % 从1迭代到n，逐层添加平方根  
    for i = 1:n  
        f = sqrt(i + f);  % 根据公式逐层添加平方根  
    end  
end  
  
%% 
% 配套的讲解视频可以在b站上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
