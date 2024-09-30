function d = jwdist(x,y)
    % 根据两点的经纬度计算大圆距离，单位为km
    % x和y分别为两点的[经度, 纬度]向量，单位为度，计算之前请先转换为弧度制
    x = x*pi/180;
    y = y*pi/180;
    % d = 6371*acos(cos(x(2))*cos(y(2))*cos(x(1)-y(1))+ ...
    %     sin(x(2))*sin(y(2)));
    d = 6371*2*asin(sqrt((sin((x(2)-y(2))/2))^2+ ...
        cos(x(2))*cos(y(2))*sin((x(1)-y(1))/2)^2));
end  
  
%% 
% 配套的讲解视频大家可在bilibili上免费观看：
% 《MATLAB教程新手入门篇（数学建模清风主讲，适合零基础同学观看）》
%  观看地址： https://www.bilibili.com/video/BV1Xm41167aC/
