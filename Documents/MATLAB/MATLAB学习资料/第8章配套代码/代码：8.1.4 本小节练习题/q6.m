function h = q6(n, x)   
% Q6 使用递归计算Hermite多项式
    if n == 0  
        h = 1;  
    elseif n == 1  
        h = 2 * x;  
    else  
        h = 2 * x * q6(n-1, x) - 2 * (n-1) * q6(n-2, x);  
    end  
end  
  
%% 
% 配套的讲解视频大家可在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
