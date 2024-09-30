function [x_max, y_max] = q3(a, b, d)
    % Q3 ���������������ڸ���������Ѱ�Һ��������ֵ
    % a��b: �����������ʼ��a����ֹ��b
    % d: ��������
    % x_max: ���ֵ��Ӧ��x����
    % y_max: ������x_max�������ֵ
    if d <= 0
        error('����d����Ϊ����');
    end
    if a >= b
        error('��ʼ��a����С����ֹ��b');
    end
    x = a:d:b;
    y = 2*x.*sin(8*x)+x.*cos(3*x);
    [y_max,ind] = max(y);
    x_max = x(ind);
end  
  
%% 
% ���׵Ľ�����Ƶ����bվ��ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
