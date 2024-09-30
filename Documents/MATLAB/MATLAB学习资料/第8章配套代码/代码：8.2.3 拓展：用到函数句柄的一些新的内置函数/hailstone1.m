function k = hailstone1(n)
% 冰雹猜想 3n+1猜想
% 返回值是需要经过的变化次数k
    k = 0;
    while n~= 1
        if mod(n,2) == 0
            n = n/2;
        else
            n = 3*n+1;
        end
        k = k + 1;
    end
end  
  
%% 
% 配套的讲解视频可以在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  视频观看网站： https://www.bilibili.com/video/BV1Xm41167aC/
