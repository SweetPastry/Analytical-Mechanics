% function z = qftest(x, y)
%     a = x + y;
%     b = x - y;
%     z = a^2 + b^2;
% end  
% ������θĽ��Ĵ�������8.1.3����
function z = qftest(x, y)
    % MATLAB�İ汾���õ���2019b
    arguments  
        x (1,1) {mustBeNumeric}
        y (1,1) {mustBeNumeric}
    end
%     arguments
%         x (1,1) double
%         y (1,1) double
%     end
    a = x + y;
    b = x - y;
    z = a^2 + b^2;
end  
  
%% 
% ���׵Ľ�����Ƶ������bվ����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
