% function z = qftest(x, y)
%     a = x + y;
%     b = x - y;
%     z = a^2 + b^2;
% end  
% 下面这段改进的代码用于8.1.3节中
function z = qftest(x, y)
    % MATLAB的版本不得低于2019b
    arguments  
        x (1,1) {mustBeNumeric}
        y (1,1) {mustBeNumeric}
    end
%     arguments
%         x (1,1) double
%         y (1,1) double
%     end
    a = x + y;
    b = x - y;
    z = a^2 + b^2;
end  
  
%% 
% 配套的讲解视频可以在b站上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
