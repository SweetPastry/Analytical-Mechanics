function   y = Rosenbrock(x)
    tem1 = x(1:end-1);  
    tem2 = x(2:end);
    y = sum(100 * (tem2-tem1.^2).^2 + (tem1-1).^2);
end  
  
%% 
% 配套的讲解视频大家可在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  视频观看网站： https://www.bilibili.com/video/BV1Xm41167aC/
