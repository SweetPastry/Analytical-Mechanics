function f = q7_recursion(x, n) 
    % Q7 计算连根式
    if n == 1  
        f = sqrt(1 + x);  
    else  
        f = sqrt(n + q7_recursion(x, n - 1));  
    end  
end  
  
%% 
% 配套的讲解视频可在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  视频观看网站： https://www.bilibili.com/video/BV1Xm41167aC/
