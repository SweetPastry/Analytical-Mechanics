function a = q8(b)
% Q8 Excel列名称和序号的转换
    if isnumeric(b)  % 序号转列名称
        a = ''; % 初始化输出字符向量  
        while b > 0  
            b = b - 1; 
            remainder = mod(b, 26);  
            a = [char(remainder + 'A') a];  
            b = floor(b / 26); 
        end  
    else   % 列名称转序号
        [~,ind] = ismember(char(upper(b)),'A':'Z');
        d = flip(26 .^((1:length(b))-1));
        a = sum(ind.*d);
    end
end  
  
%% 
% 配套的讲解视频大家可在b站免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
