function [D,cats] = one_hot(x)
% Q9 将分类数据转换为独热编码(One-Hot Encoding)
    s = string(x);
    cats = unique(s);  
    cats = reshape(cats,1,[ ]);  % 转换成行向量
    D = (s(:) == cats) * 1;
end  
  
%% 
% 配套的讲解视频可以在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  网址： https://www.bilibili.com/video/BV1Xm41167aC/
