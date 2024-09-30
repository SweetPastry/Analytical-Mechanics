function d = qftest_vector(p, q)
% qftest_vector函数接受两个等长的数值向量p和q作为输入  
% 它会将p和q中相同位置的元素成对地传递到qftest函数中进行计算
% 并返回一个与输入向量p和q等长的向量d  
% 向量d中的每个元素都是对应位置的p和q元素在qftest函数中计算的结果
    n = length(p);
    d = zeros(size(p));
    for ii = 1:n
        d(ii) = qftest(p(ii), q(ii));
    end
end  
  
%% 
% 配套的讲解视频可以在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
