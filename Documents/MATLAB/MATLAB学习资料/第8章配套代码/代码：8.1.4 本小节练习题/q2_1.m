function y = q2_1(x)  
    if x < 3 || x > 9 
        error('x的范围是[3,9]');
    else
        y = (3 <= x && x < 5) * (1 - (x - 3)^2 / 4) + ...
            (7 <= x && x <= 9) * ((x - 7)^2 / 4);
    end
end

% function y = q2_1(x)  
%     if 3 <= x && x < 5  
%         y = 1 - (x - 3)^2 / 4;  
%     elseif 5 <= x && x < 7  
%         y = 0;  
%     elseif 7 <= x && x <= 9  
%         y = (x - 7)^2 / 4;  
%     else  
%         error('x的范围是[3,9]');  
%     end  
% end  
  
%% 
% 配套的讲解视频可以在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  视频观看网站： https://www.bilibili.com/video/BV1Xm41167aC/
