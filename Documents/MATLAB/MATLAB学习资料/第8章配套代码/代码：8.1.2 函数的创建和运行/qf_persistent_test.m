function qf_fun()
    persistent n
    if isempty(n)
        n = 0;
    end
    n = n+1;
    n
end  
  
%% 
% 配套的讲解视频大家可在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  视频观看网站： https://www.bilibili.com/video/BV1Xm41167aC/
