function y = q2_2(x)  
   y = x;
   for ii = 1:length(x)
       if 3 <= x(ii) && x(ii) < 5
           y(ii) = 1 - (x(ii) - 3)^2 / 4;
       elseif 5 <= x(ii) && x(ii) < 7
           y(ii) = 0;
       elseif 7 <= x(ii) && x(ii) <= 9
           y(ii) = (x(ii) - 7)^2 / 4;
       else
           y(ii) = NaN;
       end
   end
end

% function y = q2_2(x)  
%    y = zeros(size(x));
%    ind0 = x<3 | x>9;
%    y(ind0) = NaN;
%    idx1 = (x >= 3) & (x < 5);
%    y(idx1) = 1-((x(idx1)-3).^2)/4;
%    idx3 = (x >= 7) & (x <= 9);
%    y(idx3) = ((x(idx3)-7).^2)/4;
% end  
% 
%% 
% ���׵Ľ�����Ƶ��ҿ���bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
