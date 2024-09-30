function e = qfeig(A)
% 求矩阵A的特征值e
% 若A不是方阵，则返回[ ]
    e = [ ];
    if size(A,1) ~= size(A,2)
        return 
    end
    e = eig(A);
end  
 
%% 
% 配套的讲解视频可在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
