function p = inte_test(k)
    f = @(x) (1+x) .* (cos(x)).^ k;
    p = integral(f, -pi/2, pi/2); 
    % 也可以写到一行：
    % p = integral(@(x) (1+x) .* (cos(x)).^ k, -pi/2, pi/2); 
end  
  
%% 
% 配套的讲解视频可以在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  网址： https://www.bilibili.com/video/BV1Xm41167aC/
