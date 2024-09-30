function d = hailstone2(n)
% �������� 3n+1����
% ����ֵ��ʹ������d����ı仯����
    d = n;
    while n~= 1
        if mod(n,2) == 0
            n = n/2;
        else
            n = 3*n+1;
        end
        d = [d, n];
    end
end  
  
%% 
% ���׵Ľ�����Ƶ������bվ��ѹۿ���
% ��MATLAB�̳���������ƪ����ѧ��ģ����������ʺ������ͬѧ�ۿ�����
%  �ۿ���ַ�� https://www.bilibili.com/video/BV1Xm41167aC/
