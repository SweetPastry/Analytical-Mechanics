function d = qftest_vector1(p, q)
% 这个是主函数
    n = length(p);
    d = zeros(size(p));
    for ii = 1:n
        d(ii) = qftest1(p(ii), q(ii));
    end
end
% 下面这个qftest1函数就是局部函数
function z = qftest1(x, y)
    a = x + y;
    b = x - y;
    z = a^2 + b^2;
end



% function d = qftest_vector1(p, q)
% % 这个例子我们在上一小节见到过：
% % p和q是两个等长度的向量
%     n = length(p);
%     d = zeros(size(p));
%     for ii = 1:n
%         a = p(ii) + q(ii);
%         b = p(ii) - q(ii);
%         d(ii) = a^2 + b^2;
%     end
% end  
  
%% 
% 配套的讲解视频可在b站上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  视频观看网站： https://www.bilibili.com/video/BV1Xm41167aC/
