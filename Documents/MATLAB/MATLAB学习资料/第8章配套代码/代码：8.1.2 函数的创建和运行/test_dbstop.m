function z = test_dbstop(x,y,o)
    n = length(o);
    z = zeros(1,n);
    for ii = 1:n
        z(ii) = qftest2(x(ii),y(ii),o(ii));
    end
    % 你还可以测试以下错误：
    % x//y
    % x*y
    % x||y
    % x#y
end  
  
%% 
% 配套的讲解视频可在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  网址： https://www.bilibili.com/video/BV1Xm41167aC/
