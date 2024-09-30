function y = intefun2(x)
    % 错误的方法
    % if x > 1
    %      y = 3*x.^2;
    % else
    %      y = x+1;
    % end
    
    % 正确的方法1：
    y = x;
    n = length(y);
    for ii = 1:n
        if x(ii) > 1
             y(ii) = 3*x(ii).^2;
        else
             y(ii) = x(ii)+1;
        end
    end
    
    % 正确的方法2：
    % y = x;
    % ind1 = x>1;
    % y(ind1) = 3*x(ind1).^2;
    % ind2 = ~ind1;
    % y(ind2) = x(ind2) + 1;
    
    % 正确的方法3：
    % y = x;
    % y(x>1) = 3*x(x>1).^2;
    % y(x<=1) = x(x<=1) + 1;
    
    % % 正确的方法4：
    % y = (x>1).*(3*x.^2) + (x<=1).*(x+1);

end  
  
%% 
% 配套的讲解视频可以在b站上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  视频观看网站： https://www.bilibili.com/video/BV1Xm41167aC/
