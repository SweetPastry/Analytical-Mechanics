function d = hailstone2(n)
% 冰雹猜想 3n+1猜想
% 返回值是使用向量d保存的变化过程
    d = n;
    while n~= 1
        if mod(n,2) == 0
            n = n/2;
        else
            n = 3*n+1;
        end
        d = [d, n];
    end
end  
  
%% 
% 配套的讲解视频可以在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
