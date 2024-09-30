function d = qf_cat(dim, varargin)
% 用于测试c的使用方法
% 实现cat函数的部分功能
    % c = varargin;
    if isempty(varargin)
        error('至少需要一个用于拼接的数组')
    end
    if dim == 1  
        d = vertcat(varargin{:});
    elseif dim == 2
        d = horzcat(varargin{:});
    else
        error('第一个输入参数为1或2')
    end
end  
  
%% 
% 配套的讲解视频大家可在b站上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
