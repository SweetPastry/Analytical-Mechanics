function y = q2_1(x)  
    if x < 3 || x > 9 
        error('x�ķ�Χ��[3,9]');
    else
        y = (3 <= x && x < 5) * (1 - (x - 3)^2 / 4) + ...
            (7 <= x && x <= 9) * ((x - 7)^2 / 4);
    end
end

% function y = q2_1(x)  
%     if 3 <= x && x < 5  
%         y = 1 - (x - 3)^2 / 4;  
%     elseif 5 <= x && x < 7  
%         y = 0;  
%     elseif 7 <= x && x <= 9  
%         y = (x - 7)^2 / 4;  
%     else  
%         error('x�ķ�Χ��[3,9]');  
%     end  
% end  
  
%% 
% ���׵Ľ�����Ƶ������bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��Ƶ�ۿ���վ�� https://www.bilibili.com/video/BV1Xm41167aC/
