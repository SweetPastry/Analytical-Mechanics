function checkInputs(A,B,varargin)
    minArgs=2;
    maxArgs=5;
    narginchk(minArgs,maxArgs)
    
    fprintf('Received 2 required and %d optional inputs\n', length(varargin))
end  
  
%% 
% 配套的讲解视频大家可在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  视频观看网站： https://www.bilibili.com/video/BV1Xm41167aC/
