function y = q1_4(x,mu,sigma)  
    if nargin < 1  % 确保至少提供了x参数
        error('第一个输入参数x是必需参数');
    end
    if nargin < 2  % 如果mu未提供，则设置默认值为0 
        mu = 0;
    end
    if nargin < 3  % 如果sigma未提供，则设置默认值为1
        sigma = 1;
    end
    y =  1 / (sqrt(2 * pi) * sigma) * ...
        exp(-((x - mu) / sigma).^2 / 2);  
end

% function y = q1_4(x,mu,sigma)  
%     if ~exist('x', 'var')
%         error('第一个输入参数x是必需参数');
%     end
%     if ~exist('mu', 'var')  % 如果mu未提供，则设置默认值为0 
%         mu = 0;
%     end
%     if ~exist('sigma', 'var')  % 如果sigma未提供，则设置默认值为1
%         sigma = 1;
%     end
%     y =  1 / (sqrt(2 * pi) * sigma) * ...
%         exp(-((x - mu) / sigma).^2 / 2);  
% end

% function y = q1_4(x,mu,sigma)  
%     arguments
%         x {mustBeNumeric}
%         mu (1,1) {mustBeNumeric} = 0 
%         sigma  (1,1) {mustBeNumeric} = 1 
%     end
%         y =  1 / (sqrt(2 * pi) * sigma) * ...
%             exp(-((x - mu) / sigma).^2 / 2);  
% end  
  
%% 
% 配套的讲解视频可在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
