function F = qf_factorial(n)
% ���õݹ���������n�Ľ׳�
    if n == 1   % �ݹ�ĳ���
        F = 1;
    else
        F = n * qf_factorial(n-1);
    end
end  
  
%% 
% ���׵Ľ�����Ƶ������bվ��ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  ��ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
