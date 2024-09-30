function F = qf_factorial0(n)
% 未设置递归出口，会无限递归
        F = n * qf_factorial0(n-1);
end  
  
%% 
% 配套的讲解视频可以在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  网址： https://www.bilibili.com/video/BV1Xm41167aC/
