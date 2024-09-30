function z = qftest2(x,y,o)
    switch o
        case '+'
            % z = x+y
            z = x+y;
        case '-'
            % z = x-y
            z = x-y;
        otherwise
            error('输入参数o只能为+或-')
    end
end  
  
%% 
% 配套的讲解视频可在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  网址： https://www.bilibili.com/video/BV1Xm41167aC/
