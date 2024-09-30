function F = q5(A, method, v) 
    % Q5 填补缺失值
    F = A;
    if sum(isnan(A)) == 0
        return  % 如果没有缺失值就直接返回
    end
    if strcmp(method,'constant')
        F(isnan(F)) = v;
    elseif strcmp(method,'previous')
        F = fill_last_one(A);
    elseif strcmp(method,'next')
        F = flip(fill_last_one(flip(A)));
    end
end

% 下面的fill_last_one是一个局部函数
function F = fill_last_one(A)
    F = A;
    lastValidValue = NaN;
    for i = 1:length(F)
        if isnan(F(i))
            F(i) = lastValidValue;
        else
            lastValidValue = F(i);
        end
    end
end  
  
%% 
% 配套的讲解视频可在b站上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  视频观看网站： https://www.bilibili.com/video/BV1Xm41167aC/
