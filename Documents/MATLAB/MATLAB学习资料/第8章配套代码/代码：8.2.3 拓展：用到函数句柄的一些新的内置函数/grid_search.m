function [x_min, f_min] = grid_search(f, a, b, d)
    % ���������
    %   f(x)�ĺ������f
    %   ��ʼ��a
    %   ��ֹ��b ��b>a��
    %   ��������d��d>0��
    % ����ֵ��
    %   f��[a,b]����Сֵf_min
    %   ��Сֵ����Ӧ��xֵx_min
    x = a:d:b;
    f = f(x);
    [f_min,ind] = min(f);
    x_min = x(ind);
end  
  
%% 
% ���׵Ľ�����Ƶ������bilibili����ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
